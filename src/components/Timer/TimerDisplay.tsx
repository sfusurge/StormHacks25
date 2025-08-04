'use client';

import { useAtomValue } from 'jotai';
import { formattedTimeAtom } from './TimerAtom';

export function TimerDisplay() {
  const formattedTime = useAtomValue(formattedTimeAtom);

  return (
    <span className="text-decor">
      {formattedTime}
    </span>
  );
}
