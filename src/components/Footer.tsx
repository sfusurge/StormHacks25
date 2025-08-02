import Image from "next/image";
import Socials from "@/components/Socials";
import HoverEffectButton from "@/components/HoverEffectButton";

export default function Footer() {
    return (
        <footer className="sm:hidden w-full bg-background border-t border-accent mt-8 p-4">
            <div className="flex justify-between gap-8">
                {/* TODO: USE MUSIC LIBRARY */}
                <HoverEffectButton>
                    <Image src="/assets/music.svg" height={60} width={60} alt="Mute" />
                </HoverEffectButton>
                <div className="flex gap-4">
                    <HoverEffectButton>
                        <Image src="/assets/prev.svg" height={60} width={60} alt="Previous" />
                    </HoverEffectButton>
                    <HoverEffectButton>
                        <Image src="/assets/play.svg" height={60} width={60} alt="Play" />
                    </HoverEffectButton>
                    <HoverEffectButton>
                        <Image src="/assets/next.svg" height={60} width={60} alt="Next" />
                    </HoverEffectButton>
                </div>
                <HoverEffectButton>
                    <Image src="/assets/sound.svg" height={60} width={60} alt="Volume" />
                </HoverEffectButton>
            </div>

            <div className="px-4 py-8 flex flex-col items-center mt-20">
                <Socials />
            </div>

            <div className="w-full flex items-center justify-center flex-col">
                <div className="flex flex-row justify-between w-full my-2">
                    <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond" />
                    <Image src="/assets/diamond.svg" height={14} width={8} alt="diamond" />
                </div>
                <div className="h-[11px] w-full bg-[url('/assets/block-pattern.svg')] bg-repeat-x" />
            </div>
        </footer>
    );
}
