import Image from "next/image";
import Socials from "@/components/Socials";
import Controls from "@/components/MusicPlayer";
import { Diamond } from "@/components/svgs/Diamond";
import { BlockPattern } from "@/components/svgs/BlockPattern";

export default function Footer() {

    return (
        <footer className="sm:hidden w-full bg-background border-t border-accent mt-8 p-4">
            <div className="flex justify-between gap-8 w-full md:hidden">
                <Controls />
            </div>

            <div className="px-4 py-8 flex flex-col items-center mt-20">
                <Socials />
            </div>

            <div className="w-full flex items-center justify-center flex-col">
                <div className="flex flex-row justify-between w-full my-2">
                    <Diamond height={14} width={8} />
                    <Diamond height={14} width={8} />
                </div>
                <BlockPattern />
            </div>
        </footer>
    );
}
