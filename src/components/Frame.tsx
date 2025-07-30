import Image from "next/image";

export default function Frame() {
    return (
        <div className="relative" style={{ width: 872, height: 511 }}>
            {/* Background image constrained within frame */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/backgrounds/placeholder.png"
                    alt="background"
                    fill
                    style={{
                        objectFit: "cover",
                        clipPath: "inset(25px 25px 25px 25px)" // Adjust these values based on your frame's inner boundaries
                    }}
                />
            </div>

            {/* Frame overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <Image
                    src="/assets/frame.svg"
                    alt="frame"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
}