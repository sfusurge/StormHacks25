'use client';

import Image from 'next/image';
import { useTimer } from 'react-timer-hook';
import { useState, useRef } from 'react';
import useSound from 'use-sound';
import HoverEffectButton from '@/components/HoverEffectButton';
import { useTheme } from './ThemeProvider';

export default function Timer() {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('25:00');
    const [paused, setPaused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const { mode } = useTheme();

    const parseTime = (str: string) => {
        const [min, sec] = str.split(':').map(Number);
        const now = new Date();
        now.setSeconds(now.getSeconds() + min * 60 + sec);
        return now;
    };

    const expiryTimestamp = parseTime(inputValue);

    const soundUrl = '/audio/sound-effects/button_click_or_timer_end.mp3';
    const [play] = useSound(soundUrl);

    const { seconds, minutes, isRunning, start, restart } = useTimer({
        expiryTimestamp,
        autoStart: false,
        onExpire: play,
    });

    const handleEditComplete = () => {
        setIsEditing(false);
        setPaused(false);
        restart(parseTime(inputValue), false);
    };

    const handleStartStop = () => {
        if (isRunning && !paused) {
            const timeLeft = new Date(
                Date.now() + minutes * 60 * 1000 + seconds * 1000,
            );
            restart(timeLeft, false);
            setPaused(true);
        } else {
            start();
            setPaused(false);
        }
    };

    return (
        <div className="mt-auto mb-8 relative border border-accent bg-background w-[181px] h-[43px]">
            <div className="flex justify-between items-center h-full">
                <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y" />
                <div className="flex justify-center items-center w-[153px] gap-2 h-[33px] p-[6.427px] flex-shrink-0 border-[0.643px] border-border bg-[#06060599]">
                    <div className="flex flex-row gap-0 items-center">
                        <Image
                            src={`/assets/clock-${mode}.svg`}
                            height={15}
                            width={16}
                            alt="clock"
                        />
                        {isEditing ? (
                            <input
                                ref={inputRef}
                                className="text-hover-button w-[48px] text-center text-xs bg-transparent outline-none"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onBlur={handleEditComplete}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        inputRef.current?.blur();
                                    }
                                }}
                            />
                        ) : (
                            <time
                                className={`w-[48px] text-center text-xs cursor-pointer ${
                                    isRunning && !paused
                                        ? 'text-main italic font-bold font-catriel text-[12px] leading-normal'
                                        : 'text-hover-button'
                                }`}
                                onClick={() => setIsEditing(true)}
                            >
                                {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
                            </time>
                        )}
                    </div>

                    <HoverEffectButton
                        className="bg-[#06060599] px-2 py-1 text-xs border-[0.643px] h-[20px] w-[45px] flex items-center justify-center cursor-pointer
                            text-hover-button border-hover-button hover:border-main "
                        onClick={handleStartStop}
                    >
                        {isRunning && !paused ? 'Stop' : 'Start'}
                    </HoverEffectButton>
                </div>
                <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y rotate-180" />
            </div>
        </div>
    );
}
