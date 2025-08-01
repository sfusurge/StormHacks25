'use client';

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Frame from "@/components/Frame";
import Controls from "@/components/Controls";
import Timer from "@/components/Timer";
import SwapBackground from "@/components/SwapBackground";
import Footer from "@/components/Footer";
import EmailSignUp from "@/components/EmailSignUp";
export default function Home() {
    return (
        <div className="font-catriel min-h-screen w-full relative overflow-x-hidden sm:overflow-hidden bg-[#0C0C0B]">
            {/*grain effect*/}
            <Image src="/assets/anim-background.gif" height={10} width={272} alt="horizontal pattern"
                className="fixed z-40 w-full h-full object-cover pointer-events-none mix-blend-color-dodge"
            />
            {/*background tiling*/}
            <div className="absolute z-10
                bg-[url('/assets/pattern-element-buffer.svg')]
                bg-[length:82.5px_82.5px]
                bg-center
                bg-repeat
                w-[200%] h-[200%]
                left-[-50%] top-[-50%]
                rotate-45
                origin-center"
            />
            <div className="relative z-30 flex flex-col lg:flex-row h-screen">
                <Sidebar />
                <div className="sm:hidden w-full">
                    <div className="flex w-full px-4 py-4 italic justify-between leading-tight">
                        <div className="flex flex-col">
                            <p className="font-bold">Soft Spot</p>
                            <p className="text-primary">Keshi</p>
                        </div>
                        <button>
                            SETTINGS
                        </button>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src="/backgrounds/background-1.png"
                            alt="background"
                            height={1000}
                            width={1800}
                            className="object-cover w-full h-[75dvh]"
                        />
                    </div>
                </div>
                
                <Footer/>


                <div className="flex-1 sm:flex flex-col hidden">
                    <div className="flex justify-between items-start pt-8 px-8">
                        <Timer />
                        <div className="hidden sm:flex lg:hidden">
                        <EmailSignUp/>
                        </div>
                        <SwapBackground />
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <Frame />
                    </div>
                    <div className="flex justify-center pb-4">
                        <Controls />
                    </div>
                </div>
            </div>
        </div>
    );
}
