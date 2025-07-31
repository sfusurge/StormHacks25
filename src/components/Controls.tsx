"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import {calmMusicLibrary, epicMusicLibrary, specialMusicLibrary} from "@/audioLibrary"

export default function Controls() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const currentTrack = calmMusicLibrary[currentTrackIndex]
    const currentTitle = currentTrack.title
    const currentArtist = currentTrack.artist

    useEffect(() => {
        if (!audioRef.current){
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
        }
        else {
            setIsPlaying(true);
        }
    }, [currentTrack.file, currentTrackIndex]);


    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            }
            else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const playNext = () => {
        const nextIndex = (currentTrackIndex + 1) % calmMusicLibrary.length
        setCurrentTrackIndex(nextIndex)
    }

    const playPrevious = () => {
        const prevIndex = currentTrackIndex === 0 ? calmMusicLibrary.length - 1 : currentTrackIndex - 1
        setCurrentTrackIndex(prevIndex)
    }

    const handleAudioEnded = () => {
        setIsPlaying(false)
        playNext()
    }

    return (
        <div className="mt-auto mb-4 relative border border-[#574E49] bg-[#161414D9] w-[726px] h-[43px]">
            <audio
                ref={audioRef}
                onEnded={handleAudioEnded}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            <div className="flex justify-between h-full">
                <div className="flex flex-row gap-2">
                    <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y" />
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-row gap-2">
                            <Image src="/assets/music.svg" height={24} width={24} alt="Play" />
                            <div className="flex flex-col">
                                <p className="text-[12px] text-[#F1ECEB]">{currentTitle}</p>
                                <p className="text-[10px] text-[#A7928E]">{currentArtist}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <button className="cursor-pointer">
                        <Image src="/assets/sound.svg" height={24} width={24} alt="Sound" />
                    </button>
                    <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y rotate-180" />
                </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4">
                <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond" />
                <div className="flex items-center justify-center gap-4">
                    <button className="cursor-pointer" onClick={playPrevious}>
                        <Image src="/assets/prev.svg" height={24} width={24} alt="Prev" />
                    </button>
                    <button className="cursor-pointer" onClick={togglePlayPause}>
                        <Image
                            src={isPlaying ? "/assets/pause.svg" : "/assets/play.svg"}
                            height={24}
                            width={24}
                            alt={isPlaying ? "Pause" : "Play"}
                        />
                    </button>
                    <button className="cursor-pointer" onClick={playNext}>
                        <Image src="/assets/next.svg" height={24} width={24} alt="Next" />
                    </button>
                </div>
                <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond" />
            </div>
        </div>
    )
}
