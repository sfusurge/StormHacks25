'use client';

import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Frame, { currentBackgroundIndexAtom, CurrentBackgroundMobile } from '@/components/Frame';
import Controls, { CurrentTrackInfo } from '@/components/MusicPlayer';
import Timer from '@/components/Timer/Timer';
import { TimerDisplay } from '@/components/Timer/TimerDisplay';
import SwapBackground from '@/components/SwapBackground';
import { useState } from 'react';
import { AngelBackgrounds, DemonBackgrounds } from '@/Backgrounds';
import Footer from '@/components/Footer';
import EmailSignUp from '@/components/EmailSignUp';
import HoverEffectButton from '@/components/HoverEffectButton';
import { useTheme } from '@/components/ThemeProvider';
import { AmbiancePlayer } from "@/components/AmbiancePlayer";
import { useAtom } from 'jotai';
import { TimerDialog } from '@/components/Timer/TimerDialog';

export default function Home() {
    const [showSettings, setShowSettings] = useState(false);
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useAtom(currentBackgroundIndexAtom);

    const { mode } = useTheme();
    const backgrounds = mode === 'angel' ? AngelBackgrounds : DemonBackgrounds;
    const currentBackground = backgrounds[currentBackgroundIndex];

    const onChangeBackground = () => {
        const nextIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        setCurrentBackgroundIndex(nextIndex);
    };

    return (
        <div className="font-catriel h-screen w-full relative overflow-x-hidden sm:overflow-hidden bg-[#0C0C0B]">
            {/*grain effect*/}
            {/* <Image
                src="/assets/anim-background.gif"
                height={10}
                width={272}
                alt="horizontal pattern"
                className="absolute z-30 w-full h-full object-cover pointer-events-none mix-blend-color-dodge"
            /> */}
            <AmbiancePlayer />

            {/*background tiling*/}
            <div className="absolute inset-0 z-10 overflow-hidden">
                <div
                    className="absolute
                        bg-[length:82.5px_82.5px]
                        bg-center
                        bg-repeat
                        w-[250%] h-[250%]
                        left-[-50%] top-[-25%]
                        rotate-45
                        origin-center"
                    style={{
                        background: `url('/assets/pattern-element-buffer-${mode}.svg')`,
                    }}
                />
            </div>

            <div className="relative z-30 flex flex-col lg:flex-row h-full">
                <Sidebar />

                <div className="sm:hidden w-full">
                    <div className="flex w-full px-5 py-5 italic justify-between leading-tight">
                        <CurrentTrackInfo />

                        <div className='flex justify-center items-center gap-3'>
                            <TimerDisplay />
                            <TimerDialog
                                mobileTriggerButton={<HoverEffectButton
                                    onClick={() => setShowSettings(!showSettings)}
                                >
                                    <Image
                                        src={`/assets/settings-${mode}.svg`}
                                        height={40}
                                        width={40}
                                        alt="Open Settings Modal"
                                    />
                                </HoverEffectButton>}
                                mobileShow={showSettings}
                                onChangeBackground={onChangeBackground}
                                mobileMode
                                onClose={() => setShowSettings(false)}
                            />
                        </div>

                    </div>
                    <div className="relative w-full h-full">
                        <CurrentBackgroundMobile currentBackground={currentBackground} />
                    </div>
                </div>

                <Footer />

                <div className="flex-1 sm:flex flex-col hidden h-full">
                    <div className="flex justify-between items-start pt-8 px-8">
                        <Timer />
                        <div className="hidden sm:flex lg:hidden">
                            <EmailSignUp />
                        </div>
                        <SwapBackground
                            onChangeBackground={onChangeBackground}
                        />
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <Frame currentBackground={currentBackground} />
                    </div>
                    <div className="flex justify-center pb-4">
                        <Controls />
                    </div>
                </div>
            </div>
        </div>
    );
}