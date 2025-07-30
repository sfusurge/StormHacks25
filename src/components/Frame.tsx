import Image from "next/image";

export default function Frame() {
    return (
        <div className="relative w-[872px] h-[511px]">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/backgrounds/placeholder.png"
                    alt="background"
                    fill
                    className="object-cover"
                    style={{
                        clipPath: "inset(25px 25px 25px 25px)"
                    }}
                />
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