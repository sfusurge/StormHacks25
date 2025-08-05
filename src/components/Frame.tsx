import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { AngelBackgrounds, DemonBackgrounds } from '@/Backgrounds';
import { useAtomValue } from 'jotai';
import { atom } from 'jotai';
import { useEffect, useState } from 'react';
import { ProgressBar, Slider } from '@/components/AmbianceDialog/AmbianceDialog';

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
            loading='lazy'
        />
    );
}

type FrameProps = {
    currentBackground: string;
};

export default function Frame({ currentBackground }: FrameProps) {
    const [loading, setLoading] = useState(false);
    const [loadingProgress, setProgress] = useState(0);


    useEffect(() => {
        setLoading(true);

    }, [currentBackground]);

    return (
        <div className="w-full max-w-19/20 aspect-[872/511]">
            <div className="relative w-full h-full">
                <div className="absolute inset-0 p-[2.87%]">
                    <div className="relative w-full h-full">
                        <img
                            key={currentBackground}
                            src={currentBackground}
                            alt="background"
                            className="object-contain"
                            style={{ display: loading ? "none" : "block" }}
                            onLoad={() => {
                                setLoading(false);
                            }}
                            onProgress={(e) => {
                                console.log(e);

                                const event = e as unknown as ProgressEvent;
                                setProgress(Math.ceil((event.loaded / event.total) * 100));
                            }}
                        />

                        {loading && <div style={{ margin: "auto", display: "flex", height: "100%", width: '100%', alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            Loading...
                            <div style={{ maxWidth: "400px", width: "100%", margin: "0.5rem" }}>
                                <ProgressBar val={loadingProgress} />

                            </div>
                        </div>}
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <Image
                        src={`/assets/frame.svg`}
                        alt="frame"
                        fill
                        className="object-contain"
                        loading='lazy'
                        data-demon="border"
                    />
                </div>
            </div>
        </div>
    );
}
