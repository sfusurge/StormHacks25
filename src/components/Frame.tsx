import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { AngelBackgrounds, DemonBackgrounds } from '@/Backgrounds';
import { useAtomValue } from 'jotai';
import { atom } from 'jotai';
import { useEffect, useState } from 'react';
import { ProgressBar, Slider } from '@/components/AmbianceDialog/AmbianceDialog';
import { Diamond } from '@/components/svgs/Diamond';

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
    const [loading, setLoading] = useState(true);
    const [imageUrl, setUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
        setLoading(true);
        if (imageUrl) {
            setTimeout(() => {
                setUrl(currentBackground);
            }, 300);
        } else {
            setUrl(currentBackground);
        }
    }, [currentBackground])

    return (
        <div className="inset-0  relative" style={{
            height: "100%",
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            display: 'flex',
            aspectRatio: "calc(872/511)"
        }}>

            <img
                src={imageUrl}
                alt="background"
                style={{
                    width: "calc(100% - (2 * 2.87%))", maxWidth: "100%", objectFit: "contain", margin: "2.87%", opacity: loading ? 0 : 1,
                    position: "relative", zIndex: 2
                }}
                onLoad={() => {
                    setLoading(false);
                }}
            />

            {
                loading && <div style={{
                    backgroundColor: "var(--color-background)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "2.87%",
                    top: "50%",
                    width: "calc(100% - (2 * 2.87%))",
                    aspectRatio: "calc(872/511)",
                    transform: "translate(0, -50%)",
                    zIndex: 1

                }}>
                    <Diamond height={32} width={24} />
                </div>
            }


            <Image
                src={`/assets/frame.svg`}
                alt="frame"
                fill
                className="object-contain absolute inset-0 pointer-events-none z-10"
                loading='eager'
                data-demon="border"
            />
        </div>

    );
}
