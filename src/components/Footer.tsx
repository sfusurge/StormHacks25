import Image from "next/image";
import Socials from "@/components/Socials";

export default function Footer() {
    return (
        <footer className="sm:hidden w-full bg-[#161414D9] border-t border-accent mt-8 p-4">

            {/* INSERT BUTTONS LATER */}
            <div className="flex justify-between">
                mute
                <div className="flex gap-4">
                    {"<<"}
                    {"="}
                    {">>"}
                </div>
                vol
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