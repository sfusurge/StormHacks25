'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import HoverEffectButton from '@/components/HoverEffectButton';
import style from './Timer.module.css';
import { useTheme } from '../ThemeProvider';
import { BlockPatternVertical } from '../svgs/BlockPatternVertical';
import {
    pausedAtom,
    minutesAtom,
    secondsAtom,
    toggleTimerAtom,
    setTimeAtom
} from './TimerAtom'

type TimerInputProps = {
    minutes: string;
    seconds: string;
    minRef: React.RefObject<HTMLInputElement | null>;
    secRef: React.RefObject<HTMLInputElement | null>;
    setTime: (val: { minutes?: string; seconds?: string }) => void;
    toggleTimer: () => void;
    mobile?: boolean;
};

function TimerInput({
    minutes,
    seconds,
    minRef,
    secRef,
    setTime,
    toggleTimer,
    mobile = false,
}: TimerInputProps) {
    return (
        <span className={style.timeInputContainer}>
            <input
                style={{
                    textAlign: 'right',
                }}
                value={minutes}
                ref={minRef}
                className={`${style.timeInputField} ${mobile ? 'text-base w-5' : ''}`}
                type="number"
                min={0}
                max={999}
                onChange={(e) => {
                    const val = Math.max(
                        Math.min(999, parseInt(e.target.value)),
                        0,
                    );
                    if (isNaN(val)) {
                        return setTime({ minutes: '0' });
                    }
                    setTime({ minutes: `${val}` });
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
                className={`${style.timeInputField} ${mobile ? 'text-base w-5' : ''}`}
                type="number"
                min={0}
                max={59}
                onChange={(e) => {
                    const val = Math.max(
                        Math.min(59, parseInt(e.target.value)),
                        0,
                    );

                    if (isNaN(val)) {
                        return setTime({ seconds: '00' });
                    }

                    const formattedSeconds = val < 10 ? `0${val}` : `${val}`;
                    setTime({ seconds: formattedSeconds });
                }}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        secRef.current?.blur();
                        toggleTimer();
                    }
                }}
            />
        </span>
    );
}

export default function Timer() {
    const paused = useAtomValue(pausedAtom);
    const minutes = useAtomValue(minutesAtom);
    const seconds = useAtomValue(secondsAtom);
    const toggleTimer = useSetAtom(toggleTimerAtom);
    const setTime = useSetAtom(setTimeAtom);

    const { mode } = useTheme();

    const minRef = useRef<HTMLInputElement>(null);
    const secRef = useRef<HTMLInputElement>(null);

    return (
        <>
            {/* Mobile */}
            <div className='flex flex-row gap-0 items-center border border-decor bg-background w-full py-2 px-3 sm:hidden justify-between'>
                <div className="flex flex-row gap-1.5">
                    <Image
                        src={`/assets/clock-${mode}.svg`}
                        height={32}
                        width={32}
                        alt="clock"
                    />
                    <TimerInput
                        minutes={minutes}
                        seconds={seconds}
                        minRef={minRef}
                        secRef={secRef}
                        setTime={setTime}
                        toggleTimer={toggleTimer}
                        mobile
                    />
                </div>
                <HoverEffectButton
                    onClick={toggleTimer}
                    className="bg-[#06060599] text-md px-2 py-1 border-[0.643px] flex items-center justify-center cursor-pointer
                        text-decor not-italic border-decor hover:border-main "
                >
                    {paused ? 'Start' : 'Stop'}
                </HoverEffectButton>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex mt-auto mb-8 relative border border-accent bg-background h-11">
                <div className="flex justify-between items-center h-full">
                    <BlockPatternVertical className='h-[44px] mr-1' />
                    <div className="flex justify-between px-2 items-center w-[153px] gap-2 h-[33px] p-[6.427px] flex-shrink-0 border-[0.643px] border-accent bg-[#06060599]">
                        <div className="flex flex-row gap-0 justify-between items-center">
                            <Image
                                src={`/assets/clock-${mode}.svg`}
                                height={15}
                                width={16}
                                alt="clock"
                            />
                            <TimerInput
                                minutes={minutes}
                                seconds={seconds}
                                minRef={minRef}
                                secRef={secRef}
                                setTime={setTime}
                                toggleTimer={toggleTimer}
                            />
                        </div>
                        <HoverEffectButton
                            onClick={toggleTimer}
                            className="bg-[#06060599] px-2 py-1 text-xs border-[0.643px] h-[20px] w-[45px] flex items-center justify-center cursor-pointer
                        text-decor border-decor hover:border-main "
                        >
                            {paused ? 'Start' : 'Stop'}
                        </HoverEffectButton>
                    </div>
                    <BlockPatternVertical className='h-11 ml-1 rotate-180' />
                </div>
            </div>
        </>
    );
}
