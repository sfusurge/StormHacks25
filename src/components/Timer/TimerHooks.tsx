// hooks/useTimerEffect.ts
import { useEffect, useRef } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import useSound from 'use-sound';
import { 
  pausedAtom, 
  minutesAtom, 
  secondsAtom, 
  remainingTimeAtom 
} from './TimerAtom'

export function useTimerEffect() {
  const paused = useAtomValue(pausedAtom);
  const minutes = useAtomValue(minutesAtom);
  const seconds = useAtomValue(secondsAtom);
  const [remainingTime, setRemainingTime] = useAtom(remainingTimeAtom);
  const setMinutes = useSetAtom(minutesAtom);
  const setSeconds = useSetAtom(secondsAtom);
  const setPaused = useSetAtom(pausedAtom);

  const soundUrl = '/audio/sound-effects/button_click_or_timer_end.mp3';
  const [play] = useSound(soundUrl);

  const interval = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!paused) {
      const m = parseInt(minutes);
      const s = parseInt(seconds);
      setRemainingTime(m * 60 + s);

      interval.current = setInterval(() => {
        setRemainingTime((prev) => {
          const newTime = prev - 1;
          
          setMinutes(`${Math.floor(newTime / 60)}`);
          setSeconds(`${newTime % 60}`.padStart(2, '0'));

          if (newTime <= 0) {
            play();
            setPaused(true);
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
  }, [paused, minutes, seconds, play, setMinutes, setSeconds, setPaused, setRemainingTime]);
}