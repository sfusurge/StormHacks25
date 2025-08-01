import Image from "next/image";

export default function Frame() {
    return (
        <div className="w-full max-w-3/4 aspect-[872/511]">
            <div className="relative w-full h-full">
                <div className="absolute inset-0 p-[2.87%]">
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
        </div>
    );
}