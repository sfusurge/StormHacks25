
import Image from 'next/image';
import { useTheme } from '../ThemeProvider'; 

export interface LineDiamondVerticalProps {
    height: `${number}` | number;
    width: `${number}` | number;
    className?: string;
}

export function LineDiamondVertical({ height, width, className }: LineDiamondVerticalProps) {
    const { mode } = useTheme();
    return (
        <Image
            src={`/assets/line-diamond-v.svg`}
            height={height}
            width={width}
            data-demon="border"
            alt="vertical pattern"
            className={`flex-1 ${className}`}
        />
    );
}