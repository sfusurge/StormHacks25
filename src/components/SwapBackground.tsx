import Image from "next/image";

export default function SwapBackground() {
    return (
        <div className="mt-auto mb-8 relative border border-[#574E49] bg-[#161414D9]/85 w-[181px] h-[43px]">
            <div className="flex justify-between h-full">
                <div className="h-[43px] w-[11px] [background-image:url('/block-pattern-vertical.svg')] bg-repeat-y"/>
                <div
                    className="h-[43px] w-[11px] [background-image:url('/block-pattern-vertical.svg')] bg-repeat-y rotate-180"/>
            </div>
        </div>
    );
}
