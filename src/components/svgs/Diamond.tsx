import Image from 'next/image';
import { useTheme } from '../ThemeProvider';

export interface DiamondProps {
    height: `${number}` | number;
    width: `${number}` | number;
}

export function Diamond({ height, width }: DiamondProps) {
    const { mode } = useTheme();

    return (
        <Image
            src={`/assets/diamond-${mode}.svg`}
            height={height}
            width={width}
            alt="diamond"
        />
    );
}
