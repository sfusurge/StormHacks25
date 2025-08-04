import Image from 'next/image';
import Socials from '@/components/Socials';
import EmailSignUp from '@/components/EmailSignUp';
import { StormHacksLogo } from './svgs/StormHacksLogo';
import { BlockPattern } from './svgs/BlockPattern';
import { Diamond } from './svgs/Diamond';
import { LineDiamond } from './svgs/LineDiamond';
import { LineDiamondVertical } from './svgs/LineDiamondVertical';
import { BlockPatternVertical } from './svgs/BlockPatternVertical';

export default function Sidebar() {
    return (
        <div className="p-4 sm:pb-4 pb-8 flex flex-col w-full lg:w-[302px] lg:border-r border-b lg:border-b-0 border-accent bg-background justify-between items-center gap-4">
            <div className="w-full items-center">
                <div className="w-full flex items-center justify-center flex-col">
                    <BlockPattern />

                    <div className="flex flex-row justify-between w-full my-2">
                        <Diamond width={8} height={14} />

                        <Diamond width={8} height={14} />
                    </div>
                </div>

                <div className="flex flex-col lg:flex lg:flex-col md:grid grid-cols-[1fr_auto_1fr] lg:px-0 md:px-8 px-0 md:place-items-center gap-10">
                    <StormHacksLogo />

                    <div className="md:flex flex-col items-center hidden lg:hidden xl:hidden">
                        <LineDiamondVertical
                            height={138}
                            width={16}
                            className="w-4 h-full"
                        />
                        <LineDiamondVertical
                            height={138}
                            width={16}
                            className="rotate-180 w-4 h-full"
                        />
                    </div>
                    <div className="w-full flex md:hidden lg:flex xl:flex items-center px-5">
                        <LineDiamond height={16} width={120} />
                        <LineDiamond
                            className="rotate-180"
                            height={16}
                            width={120}
                        />
                    </div>

                    <div className="flex flex-col gap-3 text-left">
                        <p className="italic font-bold text-xl md:text-[15px] leading-normal px-5 text-main">
                            {/* Your 24-Hour Creative Sandbox */}
                            More Details Coming Soon...
                        </p>
                        <p className="italic font-normal text-base sm:text-[12px] text-balance leading-normal w-full px-5 text-primary">
                            Join us at SFU Burnaby Campus from October 4th to
                            5th for StormHacks 2025. This is one of Canada&apos;s
                            largest hackathons, a place where innovators like you
                            can turn their visions into reality.
                        </p>
                    </div>

                    <div className="flex sm:hidden lg:flex mx-5 mb-4">
                        <EmailSignUp />
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center flex-col ">
                <div className="hidden lg:block">
                    <Socials />
                </div>
                <div className="flex flex-row justify-between w-full my-2">
                    <Diamond width={8} height={14} />

                    <Diamond width={8} height={14} />
                </div>

                <BlockPattern />
            </div>
        </div>
    );
}
