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
import { BlockPatternVertical } from './svgs/BlockPatternVertival';
import { Diamond } from './svgs/Diamond';
import { MusicTypeSelectorDialog } from '@/components/MusicTypeSelectorDialog';
import { AmbianceDialog, masterVolumnAtom } from '@/components/AmbianceDialog/AmbianceDialog';

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

const _musicLibAtom = atom<MusicItem[]>(shuffleArr(musicLibOptions.calm));
export const musicLibAtom = atom(
    (get) => get(_musicLibAtom),
    (get, set, variant: keyof typeof musicLibOptions) => {
        const newLib = musicLibOptions[variant];
        shuffleArr(newLib);
        set(_musicLibAtom, newLib);
        set(trackIndexAtom, 0);
    },
);

export default function Controls() {
    const musicLib = useAtomValue(musicLibAtom);
    const [currentTrackIndex, setCurrentTrackIndex] = useAtom(trackIndexAtom);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const masterVolume = useAtomValue(masterVolumnAtom);

    const currentTrack = useMemo(
        () => musicLib[currentTrackIndex],
        [currentTrackIndex, musicLib],
    );
    const [currentTitle, currentArtist] = useMemo(
        () => [currentTrack.title, currentTrack.artist],
        [currentTrack],
    );

    const { mode } = useTheme();

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        audioRef.current.src = currentTrack.file;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => setIsPlaying(true))
                .catch(() => {
                    setIsPlaying(false);
                });
        } else {
            setIsPlaying(true);
        }
    }, [currentTrack.file, currentTrackIndex]);

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
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const playNext = () => {
        const nextIndex = (currentTrackIndex + 1) % musicLib.length;
        setCurrentTrackIndex(nextIndex);
    };

    const playPrevious = () => {
        const prevIndex =
            currentTrackIndex === 0
                ? musicLib.length - 1
                : currentTrackIndex - 1;
        setCurrentTrackIndex(prevIndex);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
        playNext();
    };

    const [showMusicSelector, setShowMusicSelector] = useState(false);
    const [showAmbianceMenu, setShowAmbianceMenu] = useState(false);


    return (
        <div className="mt-auto mb-4 relative border border-accent bg-[#161414D9]  md:w-[80%] xl:w-[50%] h-[43px]">
            <audio
                ref={audioRef}
                onEnded={handleAudioEnded}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            <div className="flex justify-between h-full">
                <div className="flex flex-row gap-2">
                    {/* <div className="w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y" /> */}
                    <BlockPatternVertical />
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-row gap-2">

                            <div className="self-center relative flex">
                                <HoverEffectButton onClick={() => {
                                    setShowMusicSelector(true);
                                }}>

                                    <Image
                                        src={`/assets/music-${mode}.svg`}
                                        height={24}
                                        width={24}
                                        alt="Play"
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

                            <div className="flex flex-col">
                                <p className="text-[12px] text-main font-bold">
                                    {currentTitle}
                                </p>
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
                            <AmbianceDialog onClose={() => {
                                setShowAmbianceMenu(false);
                            }} />}
                        <HoverEffectButton
                            onClick={() => {
                                setShowAmbianceMenu(true);
                            }}
                            className="self-center">
                            <Image
                                src={`/assets/sound-${mode}.svg`}
                                height={24}
                                width={24}
                                alt="Sound"
                            />
                        </HoverEffectButton>
                    </div>
                    <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y rotate-180" />

                    <BlockPatternVertical className="h-[43px] w-[11px] bg-repeat-y rotate-180" />
                </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4">
                <Diamond width={8} height={14} />
                <div className="flex items-center justify-center gap-4">
                    <HoverEffectButton
                        className="cursor-pointer"
                        onClick={playPrevious}
                    >
                        <Image
                            src={`/assets/prev-${mode}.svg`}
                            height={24}
                            width={24}
                            alt="Previous"
                        />
                    </HoverEffectButton>
                    <HoverEffectButton
                        className="cursor-pointer"
                        onClick={togglePlayPause}
                    >
                        <Image
                            src={
                                isPlaying
                                    ? `/assets/pause-${mode}.svg`
                                    : `/assets/play-${mode}.svg`
                            }
                            height={24}
                            width={24}
                            alt={isPlaying ? 'Pause' : 'Play'}
                        />
                    </HoverEffectButton>
                    <HoverEffectButton
                        className="cursor-pointer"
                        onClick={playNext}
                    >
                        <Image
                            src={`/assets/next-${mode}.svg`}
                            height={24}
                            width={24}
                            alt="Next"
                        />
                    </HoverEffectButton>
                </div>
                <Diamond width={8} height={14} />
            </div>
        </div>
    );
}
