'use client'

import Image from "next/image";
import { useTimer } from 'react-timer-hook';

export default function Timer() {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1500);

    const {
        seconds,
        minutes,
        isRunning,
        start,
    } = useTimer({ expiryTimestamp, autoStart: false });

    return (
        <div className="mt-auto mb-8 relative border border-[#574E49] bg-[#161414D9] w-[181px] h-[43px]">
            <div className="flex justify-between items-center h-full">
                <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y"/>
                <div
                    className="flex justify-center items-center w-[153px] gap-2 h-[33px] p-[6.427px] flex-shrink-0 border-[0.643px] border-[#372F2F] bg-[#06060599]"
                >
                    <div className="flex flex-row gap-0">
                        <Image src="/assets/clock.svg" height={15} width={16} alt="clock"/>
                        <time className="text-[#8A6F6A] min-w-[48px] text-center text-xs">
                            {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
                        </time>
                    </div>

                    <button className="bg-[#06060599] px-2 py-1 text-xs text-[#8A6F6A] border border-[#8A6F6A] cursor-pointer h-[20px] w-[45px] flex items-center justify-center"
                            onClick={start}
                            disabled={isRunning}
                    >
                        Start
                    </button>
                </div>
                <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y rotate-180"/>
            </div>
        </div>
    );
}