import Image from "next/image";

type FrameProps = {
    currentBackground: string;
};

export default function Frame({ currentBackground }: FrameProps) {
    return (
        <div className="w-full max-w-3/4 aspect-[872/511]">
            <div className="relative w-full h-full">
                <div className="absolute inset-0 p-[2.87%]">
                    <div className="relative w-full h-full">
                        <Image
                            key={currentBackground}
                            src={currentBackground}
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
