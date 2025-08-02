import Image from 'next/image';
import { useTheme } from '../ThemeProvider';

export interface LineDiamondProps {
    height: `${number}` | number;
    width: `${number}` | number;
    className?: string;
}

export function LineDiamond({ height, width, className }: LineDiamondProps) {
    const { mode } = useTheme();

    return (
        <Image
            src={`/assets/line-diamond-${mode}.svg`}
            height={height}
            width={width}
            alt="horizontal pattern"
            className={`flex-1 ${className}`}
        />
    );
}
