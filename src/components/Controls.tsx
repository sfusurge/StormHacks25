import Image from "next/image";

export default function Controls() {
    return (
        <div
            className="mt-auto mb-8 flex border border-[#574E49] bg-[#161414D9]/85 w-[726px] h-[43px] justify-between">
            <div
                className="h-[43px] w-[11px] [background-image:url('/block-pattern-vertical.svg')] bg-repeat-y "/>
            <div
                className="h-[43px] w-[11px] [background-image:url('/block-pattern-vertical.svg')] bg-repeat-y rotate-180"/>

        </div>
    );
}
