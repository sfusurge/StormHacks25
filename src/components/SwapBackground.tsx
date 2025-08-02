import Image from 'next/image';
import HoverEffectButton from '@/components/HoverEffectButton';
import { useTheme } from './ThemeProvider';

export interface SwapBackgroundProps {
    onChangeBackground?: () => void;
}

export default function SwapBackground({
    onChangeBackground,
}: SwapBackgroundProps) {
    const { mode, toggleMode } = useTheme();

    return (
        <div className="mt-auto mb-8 relative border border-accent bg-background w-[181px] h-[43px]">
            <div className="flex justify-between items-center h-full">
                <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y" />
                <HoverEffectButton
                    className="bg-[#06060599] px-2 py-1 text-xs text-decor border-[0.643px] border-decor cursor-pointer h-[22px] w-[118px] flex items-center justify-center"
                    onClick={onChangeBackground}
                >
                    Swap Background
                </HoverEffectButton>

                <HoverEffectButton
                    className="cursor-pointer"
                    onClick={toggleMode}
                >
                    <Image
                        src={`/assets/moon-${mode}.svg`}
                        alt={'mode'}
                        width={22}
                        height={22}
                    />
                </HoverEffectButton>
                <div className="h-[43px] w-[11px] [background-image:url('/assets/block-pattern-vertical.svg')] bg-repeat-y rotate-180" />
            </div>
        </div>
    );
}
