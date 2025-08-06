import { atom } from 'jotai';

// base timer atoms
export const pausedAtom = atom(true);
export const minutesAtom = atom('25');
export const secondsAtom = atom('00');
export const remainingTimeAtom = atom(0);

// formatted time atom
export const formattedTimeAtom = atom((get) => {
  const minutes = get(minutesAtom);
  const seconds = get(secondsAtom);
  return `${minutes}:${seconds}`;
});

// toggle atom start/top
export const toggleTimerAtom = atom(
  null,
  (get, set) => {
    const currentPaused = get(pausedAtom);
    set(pausedAtom, !currentPaused);
  }
);

// writing atom for set/pause stime
export const setTimeAtom = atom(
  null,
  (get, set, { minutes, seconds }: { minutes?: string; seconds?: string }) => {
    set(pausedAtom, true); // always pause atom when setting time
    if (minutes !== undefined) set(minutesAtom, minutes);
    if (seconds !== undefined) set(secondsAtom, seconds);
  }
);