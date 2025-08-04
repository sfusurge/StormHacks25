import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { AngelBackgrounds, DemonBackgrounds } from '@/Backgrounds';
import { useAtomValue } from 'jotai';
import { atom } from 'jotai';

export const currentBackgroundIndexAtom = atom(0);

export function CurrentBackgroundMobile({ currentBackground }: FrameProps) {
    const { mode } = useTheme();
    const currentBackgroundIndex = useAtomValue(currentBackgroundIndexAtom);
    
    const backgrounds = mode === 'angel' ? AngelBackgrounds : DemonBackgrounds;
    const currentBg = backgrounds[currentBackgroundIndex];

    return (
        <Image
            key={currentBg}
            src={currentBg}
            alt="background"
            height={1000}
            width={1800}
            className="object-cover w-full h-[75dvh]"
        />
    );
}

type FrameProps = {
    currentBackground: string;
};

export default function Frame({ currentBackground }: FrameProps) {
    const { mode } = useTheme();

    return (
        <div className="w-full max-w-3/4 aspect-[872/511]">
            <div className="relative w-full h-full">
                <div className="absolute inset-0 p-[2.87%]">
                    <div className="relative w-full h-full">
                        <Image
                            key={currentBackground}
                            src={currentBackground}
                            alt="background"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <Image
                        src={`/assets/frame-${mode}.svg`}
                        alt="frame"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
