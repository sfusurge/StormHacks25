import Image from "next/image";

export default function SwapBackground() {
    return (
        <div className="mt-auto mb-8 relative border border-[#574E49] bg-[#161414D9]/85 w-[181px] h-[43px]">
            <div className="flex justify-between items-center h-full">
                <div
                    className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y"/>
                <button
                    className="bg-[#06060599] px-2 py-1 text-xs text-[#8A6F6A] border border-[#8A6F6A] cursor-pointer h-[22px] w-[118px] flex items-center justify-center"
                >
                    Swap Background
                </button>
                <div
                    className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y rotate-180"/>
            </div>
        </div>
    );
}
