'use client';

import { useAtomValue } from 'jotai';
import { formattedTimeAtom, pausedAtom } from './TimerAtom';

export function TimerDisplay({ showWhenPaused = false }: {showWhenPaused?: boolean}) {
  const formattedTime = useAtomValue(formattedTimeAtom);
  const isPaused = useAtomValue(pausedAtom);

  if (isPaused && !showWhenPaused) return null;

  return (
    <span className="text-decor">
      {formattedTime}
    </span>
  );
}
