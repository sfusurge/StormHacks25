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
            <Image src="/anim-background.gif" height={10} width={272} alt="horizontal pattern"
                   className="absolute z-20 w-full h-full object-cover pointer-events-none mix-blend-color-dodge"
            />
            {/*background tiling*/}
            <div className="absolute z-0
                bg-[url('/pattern-element-buffer.svg')]
                bg-[length:82.5px_82.5px]
                bg-center
                bg-repeat
                w-[200%] h-[200%]
                left-[-50%] top-[-50%]
                rotate-45
                origin-center"
            />
            <div className="relative z-30 flex flex-row h-screen">
                <Sidebar/>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start pt-8 px-8">
                        <Timer/>
                        <SwapBackground/>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <Frame/>
                    </div>
                    <div className="flex justify-center pb-8">
                        <Controls/>
                    </div>
                </div>
            </div>
        </div>
    );
}
