'use client';

import { useEffect, useRef } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import {
    pausedAtom,
    minutesAtom,
    secondsAtom,
    remainingTimeAtom
} from './TimerAtom';

export function TimerController() {
    const paused = useAtomValue(pausedAtom);
    const minutes = useAtomValue(minutesAtom);
    const seconds = useAtomValue(secondsAtom);
    const setRemainingTime = useSetAtom(remainingTimeAtom);
    const setMinutes = useSetAtom(minutesAtom);
    const setSeconds = useSetAtom(secondsAtom);
    const setPaused = useSetAtom(pausedAtom);

    const soundUrl = '/audio/sound-effects/button_click_or_timer_end.mp3';
    const audioRef = useRef<HTMLAudioElement | undefined>(undefined);

    const interval = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
    const initialTime = useRef<{ minutes: string; seconds: string } | null>(null);

    useEffect(() => {
        if (!paused) {

            // create audio if needed
            if (!audioRef.current) {
                audioRef.current = document.createElement("audio");
                audioRef.current.src = soundUrl;
            }

            const m = parseInt(minutes);
            const s = parseInt(seconds);

            if (!initialTime.current) {
                initialTime.current = { minutes, seconds };
            }

            setRemainingTime(m * 60 + s);

            interval.current = setInterval(() => {
                setRemainingTime((prev) => {
                    const newTime = prev - 1;

                    setMinutes(`${Math.floor(newTime / 60)}`);
                    setSeconds(`${newTime % 60}`.padStart(2, '0'));

                    if (newTime <= 0) {
                        audioRef.current?.play();
                        setPaused(true);

                        if (initialTime.current) {
                            setMinutes(initialTime.current.minutes);
                            setSeconds(initialTime.current.seconds);
                        }

                        initialTime.current = null;

                        return 0;
                    }

                    return newTime;
                });
            }, 1000);
        }

        if (paused && interval.current) {
            clearInterval(interval.current);
            interval.current = undefined;
        }

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, [paused, minutes, seconds, setMinutes, setSeconds, setPaused, setRemainingTime]);

    return null;
}