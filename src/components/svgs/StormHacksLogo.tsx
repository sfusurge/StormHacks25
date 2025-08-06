import Image from "next/image";

export function StormHacksLogo() {

    return <Image
        width={193}
        height={124}
        className="fill-main h-auto sm:mx-auto px-8 sm:px-12 md:px-0 sm:w-auto w-full mt-4"
        src={"/assets/SH-logo.svg"}
        alt="stormhacks title"
        data-demon="title"
    />
}
