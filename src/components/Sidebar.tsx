import Image from "next/image";
import Socials from "@/components/Socials";
import EmailSignUp from "@/components/EmailSignUp";

export default function Sidebar() {
    return (
        <div className="p-4 flex flex-col w-[302px] h-screen border-r border-[#574E49] bg-[#161414D9] justify-between items-center gap-4">
            <div className="w-full flex flex-col items-center">
                <div className="w-[261px] flex items-center justify-center flex-col">
                    <div className="h-[11px] w-[261px] bg-[url('/assets/block-pattern.svg')] bg-repeat-x"/>

                    <div className="flex flex-row justify-between w-full my-2">
                        <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond"/>
                        <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond"/>
                    </div>
                </div>


                <Image className="mx-auto" src="/assets/SH-logo.svg" height={106} width={193} alt="horizontal pattern"/>

                <div className="flex flex-row justify-between w-full my-2 pt-8 pb-8">
                    <Image src="/assets/line-diamond.svg" height={16} width={138} alt="horizontal pattern"/>
                    <Image src="/assets/line-diamond.svg" height={16} width={138} alt="horizontal pattern"
                           className="rotate-180"/>
                </div>


                <div className="flex flex-col gap-4">
                    <p className="text-center italic font-bold text-[15px] leading-normal text-[#F1ECEB]">
                        Your 24-Hour Creative Sandbox
                    </p>
                    <p className="italic font-normal text-[12px] leading-normal w-[226px] text-[#A7928E]">
                        Join us at SFU Burnaby Campus from October 4th to 5th for StormHacks 2025. This is Western
                        Canada’s biggest hackathon, a place where innovators like you can turn their visions into
                        reality.
                    </p>
                </div>

                <EmailSignUp/>

            </div>

            <div className="w-[261px] flex items-center justify-center flex-col">
                <Socials/>
                <div className="flex flex-row justify-between w-full my-2">
                    <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond"/>
                    <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond"/>
                </div>
                <div className="h-[11px] w-[261px] bg-[url('/assets/block-pattern.svg')] bg-repeat-x"/>
            </div>
        </div>
    );
}