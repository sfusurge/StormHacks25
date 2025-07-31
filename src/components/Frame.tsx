import Image from "next/image";

export default function Frame() {
    return (
        <div className="relative w-[872px] h-[511px]">
            <div className="absolute inset-0 p-[25px]">
                <div className="relative w-full h-full">
                    <Image
                        src="/backgrounds/background-1.png"
                        alt="background"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/assets/frame.svg"
                    alt="frame"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
