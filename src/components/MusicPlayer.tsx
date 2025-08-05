'use client';

import Image from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react';
import {
    calmMusicLibrary,
    epicMusicLibrary,
    specialMusicLibrary,
    ambianceLibrary,
    type MusicItem,
} from '@/audioLibrary';
import HoverEffectButton from '@/components/HoverEffectButton';
import { useTheme } from './ThemeProvider';
import { atom, useAtom, useAtomValue } from 'jotai';
import { BlockPatternVertical } from './svgs/BlockPatternVertical';
import { Diamond } from './svgs/Diamond';
import { MusicTypeSelectorDialog } from '@/components/MusicTypeSelectorDialog';
import { AmbianceDialog } from '@/components/AmbianceDialog/AmbianceDialog';
import { masterVolumeAtom } from '@/components/AmbiancePlayer';
import { ScrollingText } from "@/components/ScrollingText";
import { RockFilter } from '@/components/RockFilter/RockFilter';

const trackIndexAtom = atom(0);

export const musicLibOptions = {
    calm: calmMusicLibrary,
    epic: epicMusicLibrary,
    special: specialMusicLibrary,
    ambiance: ambianceLibrary,
};

function shuffleArr<T>(arr: T[]) {
    for (let i = arr.length - 1; i > -1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}

export const currentLibTypeAtom = atom<'calm' | 'epic' | 'special' | 'ambiance'>('calm');

const _musicLibAtom = atom<MusicItem[]>(shuffleArr(musicLibOptions.calm));
export const musicLibAtom = atom(
    (get) => get(_musicLibAtom),
    (get, set, variant: keyof typeof musicLibOptions) => {
        const newLib = musicLibOptions[variant];
        shuffleArr(newLib);
        set(_musicLibAtom, newLib);
        set(trackIndexAtom, 0);
        set(currentLibTypeAtom, variant);
    },
);

export function CurrentTrackInfo() {
    const musicLib = useAtomValue(musicLibAtom);
    const currentTrackIndex = useAtomValue(trackIndexAtom);
    const currentTrack = useMemo(
        () => musicLib[currentTrackIndex],
        [currentTrackIndex, musicLib],
    );

    return (
        <div className="flex flex-col flex-1 min-w-0 pr-3">
            <ScrollingText text={`${currentTrack.title}`} className='font-bold' />
            <ScrollingText text={`${currentTrack.artist}`} className='font-primary' />
        </div>
    );
}

export default function Controls() {
    const musicLib = useAtomValue(musicLibAtom);
    const [currentTrackIndex, setCurrentTrackIndex] = useAtom(trackIndexAtom);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const masterVolume = useAtomValue(masterVolumeAtom);

    const currentTrack = useMemo(
        () => musicLib[currentTrackIndex],
        [currentTrackIndex, musicLib],
    );
    const [currentTitle, currentArtist] = useMemo(
        () => [currentTrack.title, currentTrack.artist],
        [currentTrack],
    );

    const [initialPlay, setInitial] = useState(true);

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        audioRef.current.pause();
        audioRef.current.currentTime = 0;

        if (!initialPlay) {

            audioRef.current.src = currentTrack.file;
        }
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch(() => {
                        setIsPlaying(false);
                    });
            }
        }
    }, [currentTrack.file, currentTrackIndex, isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = masterVolume;
        }
    }, [masterVolume])

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                setInitial(false);
                setTimeout(() => {
                    audioRef.current!.src = currentTrack.file;
                    audioRef.current!.play();
                }, 0)
            }
            setIsPlaying(!isPlaying);
        }
    };

    const playNext = () => {
        const nextIndex = (currentTrackIndex + 1) % musicLib.length;
        setCurrentTrackIndex(nextIndex);
        setIsPlaying(true);
    };

    const playPrevious = () => {
        const prevIndex =
            currentTrackIndex === 0
                ? musicLib.length - 1
                : currentTrackIndex - 1;
        setCurrentTrackIndex(prevIndex);
        setIsPlaying(true);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
        playNext();
    };

    const [showMusicSelector, setShowMusicSelector] = useState(false);
    const [showAmbianceMenu, setShowAmbianceMenu] = useState(false);

    return (
        <>
            <audio
                ref={audioRef}
                onEnded={handleAudioEnded}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* MOBILE */}
            <div className="sm:hidden w-full">
                <div className="flex justify-between items-center w-full gap-4">
                    <MusicTypeSelectorDialog
                        show={showMusicSelector}
                        triggerButton={
                            <HoverEffectButton
                                onClick={() => setShowMusicSelector(!showMusicSelector)}
                                className="flex-1 min-w-15 max-w-15"
                                style={{ aspectRatio: 1 }}
                            >
                                <Image
                                    src={`/assets/music.svg`}
                                    height={24}
                                    width={24}
                                    alt="Music Library"
                                    data-demon="primary"
                                    className="w-[18px]"
                                />
                            </HoverEffectButton>}
                        mobileMode
                        onClose={() => setShowMusicSelector(false)}
                    />

                    <div className="flex flex-1 gap-4 justify-center">
                        <HoverEffectButton onClick={playPrevious} className="flex-1 min-w-6 max-w-14" style={{ aspectRatio: 1 }}>
                            <Image
                                src={`/assets/prev.svg`}
                                height={24}
                                width={24}
                                alt="Previous"
                                data-demon="primary"
                                className=" w-[18px]"
                            />
                        </HoverEffectButton>
                        <HoverEffectButton
                            onClick={togglePlayPause}
                            className="flex-1 min-w-6 max-w-14"
                            style={{ aspectRatio: 1 }}
                        >
                            <Image
                                data-demon='primary'
                                src={
                                    isPlaying
                                        ? `/assets/pause.svg`
                                        : `/assets/play.svg`
                                }
                                height={24}
                                width={24}
                                alt={isPlaying ? 'Pause' : 'Play'}
                                style={{ height: "16px" }}
                            />
                        </HoverEffectButton>
                        <HoverEffectButton onClick={playNext} className="flex-1 min-w-6 max-w-14" style={{ aspectRatio: 1 }}>
                            <Image
                                data-demon='primary'
                                src={`/assets/prev.svg`}
                                height={24}
                                width={24}
                                alt="Next"
                                className="w-[18px]"
                                style={{ transform: "scale(-1, 1)" }}
                            />
                        </HoverEffectButton>
                    </div>

                    <AmbianceDialog
                        mobileShow={showAmbianceMenu}
                        mobileTriggerButton={
                            <HoverEffectButton
                                onClick={() => setShowAmbianceMenu(!showAmbianceMenu)}
                                className="flex-1 min-w-15 max-w-15"
                                style={{ aspectRatio: 1 }}
                            >
                                <Image
                                    data-demon='primary'
                                    src={`/assets/sound.svg`}
                                    height={24}
                                    width={24}
                                    alt="Sound"
                                    className="w-[18px]"
                                />
                            </HoverEffectButton>
                        }
                        mobileMode
                        onClose={() => setShowAmbianceMenu(false)}
                    />
                </div>
            </div>

            {/* DESKTOP */}
             <div className="hidden sm:block mt-auto mb-4 relative border border-border bg-background sm:w-[80%] xl:w-[50%] h-[43px]">
                <RockFilter />
                <div className="flex justify-between h-full">
                    <div className="flex flex-row gap-2">
                        <BlockPatternVertical />
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex flex-row gap-2">

                                <div className="self-center relative flex">
                                    <HoverEffectButton
                                        className='w-[24px] h-[24px]'
                                        onClick={() => {
                                            setShowMusicSelector(!showMusicSelector);
                                        }}
                                    >
                                        <Image
                                            data-demon='primary'
                                            src={`/assets/music.svg`}
                                            height={16}
                                            width={16}
                                            alt="Play"
                                            style={{ height: "16px" }}
                                        />
                                    </HoverEffectButton>
                                    {showMusicSelector &&
                                        <MusicTypeSelectorDialog
                                            onClose={() => {
                                                setShowMusicSelector(false);
                                            }}
                                        />
                                    }
                                </div>

                                <div className="flex flex-col w-32">
                                    <ScrollingText
                                        text={currentTitle}
                                        className="text-[12px] text-main font-bold"
                                    />
                                    <p className="text-[10px] text-primary">
                                        {currentArtist}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="self-center relative flex">
                            {showAmbianceMenu &&
                                <AmbianceDialog
                                    onClose={() => {
                                        setShowAmbianceMenu(!showAmbianceMenu);
                                    }} />
                            }
                            <HoverEffectButton
                                onClick={() => {
                                    setShowAmbianceMenu(!showAmbianceMenu);
                                }}
                                className="self-center w-[24px] h-[24px]"
                            >
                                <Image
                                    data-demon='primary'
                                    src={`/assets/sound.svg`}
                                    height={16}
                                    width={16}
                                    alt="Sound"
                                    style={{ height: "16px" }}
                                />
                            </HoverEffectButton>
                        </div>
                        <BlockPatternVertical className="h-[43px] w-[11px] bg-repeat-y rotate-180" />
                    </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4">
                    <Diamond width={8} height={14} />
                    <div className="flex items-center justify-center gap-4">
                        <HoverEffectButton
                            className="cursor-pointer w-[24px] h-[24px]"
                            onClick={playPrevious}
                        >
                            <Image
                                data-demon='primary'
                                src={`/assets/prev.svg`}
                                height={12}
                                width={12}
                                alt="Previous"
                            />
                        </HoverEffectButton>
                        <HoverEffectButton
                            className="cursor-pointer  w-[24px] h-[24px]"
                            onClick={togglePlayPause}
                        >
                            <Image
                                data-demon='primary'
                                src={
                                    isPlaying
                                        ? `/assets/pause.svg`
                                        : `/assets/play.svg`
                                }
                                height={12}
                                width={12}
                                alt={isPlaying ? 'Pause' : 'Play'}
                                style={{ height: "16px" }}
                            />
                        </HoverEffectButton>
                        <HoverEffectButton
                            className="cursor-pointer  w-[24px] h-[24px]"
                            onClick={playNext}
                            style={{ transform: "scale(-1, 1)" }}
                        >
                            <Image
                                data-demon='primary'
                                src={`/assets/prev.svg`}
                                height={12}
                                width={12}
                                alt="Next"
                            />
                        </HoverEffectButton>
                    </div>
                    <Diamond width={8} height={14} />
                </div>
            </div>
        </>
    );
}