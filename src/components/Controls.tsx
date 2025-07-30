import Image from "next/image";

export default function Controls() {
    const currentTitle = 'Soft Spot';
    const currentArtist = 'Keshi';

    return (
        <div className="mt-auto mb-8 relative border border-[#574E49] bg-[#161414D9]/85 w-[726px] h-[43px]">
            <div className="flex justify-between h-full">
                <div className="flex flex-row gap-2">
                    <div className="h-[43px] w-[11px] [background-image:url('/block-pattern-vertical.svg')] bg-repeat-y"/>

                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-row gap-2">
                            <Image src="/music.svg" height={24} width={24} alt="Play"/>
                            <div className="flex flex-col">
                                <p className="text-[12px] text-[#F1ECEB]">{currentTitle}</p>
                                <p className="text-[10px] text-[#A7928E]">{currentArtist}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-2">
                    <button>
                        <Image src="/sound.svg" height={24} width={24} alt="Sound"/>
                    </button>
                    <div className="h-[43px] w-[11px] [background-image:url('/block-pattern-vertical.svg')] bg-repeat-y rotate-180"/>
                </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4">
                <Image src="/diamond.svg" height={14} width={8} alt="diamond"/>
                <div className="flex items-center justify-center gap-4">
                    <button>
                        <Image src="/prev.svg" height={24} width={24} alt="Prev"/>
                    </button>
                    <button>
                        <Image src="/pause.svg" height={24} width={24} alt="Pause"/>
                    </button>
                    <button>
                        <Image src="/next.svg" height={24} width={24} alt="Next"/>
                    </button>
                </div>
                <Image src="/diamond.svg" height={14} width={8} alt="diamond"/>
            </div>
        </div>
    );
}