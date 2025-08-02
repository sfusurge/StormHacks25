'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import useSound from 'use-sound';
import HoverEffectButton from '@/components/HoverEffectButton';
import style from './Timer.module.css';
import { useTheme } from '../ThemeProvider';

export default function Timer() {
    const [paused, setPaused] = useState(true);

    const soundUrl = '/audio/sound-effects/button_click_or_timer_end.mp3';
    const [play] = useSound(soundUrl);

    const { mode } = useTheme();

    const remainingTime = useRef(0);
    const interval = useRef<ReturnType<typeof setInterval> | undefined>(
        undefined,
    );

    const [minutes, setMinutes] = useState('25');
    const [seconds, setSeconds] = useState('00');

    const minRef = useRef<HTMLInputElement>(null);
    const secRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!paused) {
            const m = parseInt(minutes);
            const s = parseInt(seconds);
            remainingTime.current = m * 60 + s;

            interval.current = setInterval(() => {
                remainingTime.current -= 1;

                setMinutes(`${Math.floor(remainingTime.current / 60)}`);
                setSeconds(`${remainingTime.current % 60}`.padStart(2, '0'));

                if (remainingTime.current <= 0) {
                    play();
                    setPaused(true);
                }
            }, 1000);
        }

        if (paused) {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = undefined;
            }
        }
    }, [paused]);

    return (
        <div className="mt-auto mb-8 relative border border-accent bg-[#161414D9] w-[181px] h-[43px]">
            <div className="flex justify-between items-center h-full">
                <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y" />
                <div className="flex justify-center items-center w-[153px] gap-2 h-[33px] p-[6.427px] flex-shrink-0 border-[0.643px] border-accent bg-[#06060599]">
                    <div className="flex flex-row gap-0 items-center">
                        <Image
                            src={`/assets/clock-${mode}.svg`}
                            height={15}
                            width={16}
                            alt="clock"
                        />

                        <span className={style.timeInputContainer}>
                            <input
                                style={{
                                    textAlign: 'right',
                                }}
                                value={minutes}
                                ref={minRef}
                                className={style.timeInputField}
                                type="number"
                                min={0}
                                max={999}
                                onChange={(e) => {
                                    setPaused(true);
                                    const val = Math.max(
                                        Math.min(999, parseInt(e.target.value)),
                                        0,
                                    );
                                    if (isNaN(val)) {
                                        return setMinutes('0');
                                    }
                                    setMinutes(`${val}`);
                                }}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter' || e.key === ':') {
                                        minRef.current?.blur();
                                        secRef.current?.select();
                                    }
                                }}
                            />
                            :
                            <input
                                style={{
                                    textAlign: 'left',
                                }}
                                ref={secRef}
                                value={seconds}
                                className={style.timeInputField}
                                type="number"
                                min={0}
                                max={59}
                                onChange={(e) => {
                                    setPaused(true);
                                    const val = Math.max(
                                        Math.min(59, parseInt(e.target.value)),
                                        0,
                                    );

                                    if (isNaN(val)) {
                                        return setSeconds('00');
                                    }

                                    if (val < 10) {
                                        setSeconds(`0${val}`);
                                    } else {
                                        setSeconds(`${val}`);
                                    }
                                }}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        secRef.current?.blur();
                                        setPaused(false);
                                    }
                                }}
                            />
                        </span>
                    </div>

                    <HoverEffectButton
                        onClick={() => {
                            setPaused(!paused);
                        }}
                        className="bg-[#06060599] px-2 py-1 text-xs border-[0.643px] h-[20px] w-[45px] flex items-center justify-center cursor-pointer
                            text-hover-button border-hover-button hover:border-main "
                    >
                        {paused ? 'Start' : 'Stop'}
                    </HoverEffectButton>
                </div>
                <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y rotate-180" />
            </div>
        </div>
    );
}

function TimerInput({ onEditFinished }: { onEditFinished: () => void }) {
    return;
}

