import Image from 'next/image';
import Link from 'next/link';

type IconProps = {
    href: string;
    src: string;
    alt: string;
};

function SocialIcon({ href, src, alt }: IconProps) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <Image
                src={src}
                height={24}
                width={24}
                alt={alt}
                className="w-[44px] h-[44px] sm:w-[24px] sm:h-[24px]"
                data-demon="primary"

            />
        </Link>
    );
}

export default function Socials() {

    return (
        <div>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
                <SocialIcon
                    href="https://www.instagram.com/sfusurge/"
                    src={`/assets/ig.svg`}
                    alt="Instagram"

                />
                <SocialIcon
                    href="https://sfusurge.com"
                    src={`/assets/web.svg`}
                    alt="Website"

                />
                <SocialIcon
                    href="https://www.linkedin.com/company/sfu-surge/"
                    src={`/assets/linkedin.svg`}
                    alt="LinkedIn"
                />
            </div>
        </div>
    );
}

