import Image from "next/image";

export default function Frame() {
    return (
        <div className="flex items-center justify-center">
            <Image src={"/frame.svg"} alt={"frame"} height={511} width={872}/>
        </div>
    );
}
