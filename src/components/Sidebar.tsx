import Image from "next/image";
import Socials from "@/components/Socials";
import EmailSignUp from "@/components/EmailSignUp";

export default function Sidebar() {
    return (
        <div className="p-4 sm:pb-4 pb-8 flex flex-col w-full lg:w-[302px]  lg:border-r border-b lg:border-b-0 border-accent bg-[#161414D9] justify-between items-center gap-4">
            <div className="w-full items-center">
                <div className="w-full flex items-center justify-center flex-col">
                    <div className="h-[11px] w-full bg-[url('/assets/block-pattern.svg')] bg-repeat-x" />

                    <div className="flex flex-row justify-between w-full my-2">
                        <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond" />
                        <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex lg:flex-col md:grid grid-cols-[1fr_auto_1fr] lg:px-0 md:px-8 px-0 md:place-items-center gap-10">
                    <Image className="sm:mx-auto px-8 sm:px-12 md:px-0 sm:w-auto w-full mt-4" src="/assets/SH-logo.svg" height={106} width={250} alt="stormhacks logo" />

                    <div className="md:flex flex-col items-center hidden lg:hidden xl:hidden">
                        <Image src="/assets/line-diamond-v.svg" className="w-4 h-full" height={138} width={16} alt="vertical pattern" />
                        <Image src="/assets/line-diamond-v.svg" height={138} width={16} alt="vertical pattern"
                            className="rotate-180 w-4 h-full" />
                    </div>
                    <div className="w-full flex md:hidden lg:flex xl:flex items-center px-4">
                        <Image src="/assets/line-diamond.svg" className="flex-1" height={16} width={120} alt="horizontal pattern" />
                        <Image src="/assets/line-diamond.svg" height={16} width={120} alt="horizontal pattern" className="rotate-180 flex-1" />
                    </div>


                    <div className="flex flex-col gap-3 text-left">
                        <p className=" italic font-bold text-lg xs:text-[15px] leading-normal px-4 text-[#F1ECEB]">
                            Your 24-Hour Creative Sandbox
                        </p>
                        <p className="italic font-normal text-[12px] text-pretty leading-normal w-full px-4 text-[#A7928E]">
                            Join us at SFU Burnaby Campus from October 4th to 5th for StormHacks 2025. This is Western
                            Canada’s biggest hackathon, a place where innovators like you can turn their visions into
                            reality.
                        </p>
                    </div>

                    <div className="flex sm:hidden lg:flex px-4 mb-4">
                        <EmailSignUp />
                    </div>
                </div>

            </div>

            <div className="w-full flex items-center justify-center flex-col ">
                <div className="hidden lg:block">
                    <Socials />
                </div>
                <div className="flex flex-row justify-between w-full my-2">
                    <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond" />
                    <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond" />
                </div>
                <div className="h-[11px] w-full bg-[url('/assets/block-pattern.svg')] bg-repeat-x" />
            </div>

        </div>
    );
}