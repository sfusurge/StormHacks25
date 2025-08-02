import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

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
            />
        </Link>
    );
}

export default function Socials() {
    const { mode } = useTheme();

    return (
        <div>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
                <SocialIcon
                    href="https://www.instagram.com/sfusurge/"
                    src={`/assets/ig-${mode}.svg`}
                    alt="Instagram"
                />
                <SocialIcon
                    href="https://sfusurge.com"
                    src={`/assets/website-${mode}.svg`}
                    alt="Website"
                />
                <SocialIcon
                    href="https://www.linkedin.com/company/sfu-surge/"
                    src={`/assets/linkedin-${mode}.svg`}
                    alt="LinkedIn"
                />
            </div>
        </div>
    );
}

