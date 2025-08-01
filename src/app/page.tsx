'use client';

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Frame from "@/components/Frame";
import Controls from "@/components/Controls";
import Timer from "@/components/Timer";
import SwapBackground from "@/components/SwapBackground";

export default function Home() {
    return (
        <div className="font-catriel min-h-screen w-full relative overflow-hidden bg-[#0C0C0B]">
            {/*grain effect*/}
            <Image src="/assets/anim-background.gif" height={10} width={272} alt="horizontal pattern"
                   className="absolute z-30 w-full h-full object-cover pointer-events-none mix-blend-color-dodge"
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
            <div className="relative flex flex-row h-screen">
                <div className="z-20">
                    <Sidebar/>
                </div>
                <div className=" flex-1 flex flex-col">
                    <div className="z-20 flex justify-between items-start pt-8 px-8">
                        <Timer/>
                        <SwapBackground/>
                    </div>

                    <div className="z-40 flex-1 flex items-center justify-center">
                        <Frame/>
                    </div>
                    <div className="z-20 flex justify-center pb-4">
                        <Controls/>
                    </div>
                </div>
            </div>
        </div>
    );
}
