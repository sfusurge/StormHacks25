import Image from 'next/image';

export interface DiamondProps {
    height: `${number}` | number;
    width: `${number}` | number;
}

export function Diamond({ height, width }: DiamondProps) {

    return (
        <Image
            src={`/assets/diamond.svg`}
            height={height}
            width={width}
            alt="diamond"
            data-demon="border"
        />
    );
}
