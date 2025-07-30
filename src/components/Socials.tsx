import Image from "next/image";
import Link from "next/link";

export default function Socials() {
    return (
        <div>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
                <Link href="https://www.instagram.com/sfusurge/" target="_blank" rel="noopener noreferrer">
                    <Image src="/ig.svg" height={24} width={24} alt="Instagram"/>
                </Link>
                <Link href="https://sfusurge.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/website.svg" height={24} width={24} alt="Website"/>
                </Link>
                <Link href="https://www.linkedin.com/company/sfu-surge/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.svg" height={24} width={24} alt="LinkedIn"/>
                </Link>
            </div>
        </div>
    );
}