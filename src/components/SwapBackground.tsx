import Image from 'next/image';
import HoverEffectButton from '@/components/HoverEffectButton';
import { useTheme } from './ThemeProvider';
import { HorizontalDivider } from './Dialog/Dialog';
import { BlockPatternVertical } from './svgs/BlockPatternVertical';

export interface SwapBackgroundProps {
    onChangeBackground?: () => void;
}



export default function SwapBackground({
    onChangeBackground,
}: SwapBackgroundProps) {
    const { mode, toggleMode } = useTheme();

    return (
        <div className="mt-auto mb-8 relative border border-accent bg-background h-[41px]">
            <div className="flex justify-between items-center h-full">
                <BlockPatternVertical className='h-11 mr-1'/>
                <HoverEffectButton
                    className="bg-[#06060599] px-2 py-1 text-xs text-decor border-[0.643px] border-decor cursor-pointer h-[22px] w-[118px] flex items-center justify-center mr-2"
                    onClick={onChangeBackground}
                >
                    Swap Background
                </HoverEffectButton>

                <HoverEffectButton
                    className="cursor-pointer"
                    onClick={toggleMode}
                >
                    <Image
                        src={`/assets/eye-${mode}.svg`}
                        alt={'mode'}
                        width={22}
                        height={22}
                    />
                </HoverEffectButton>
                <BlockPatternVertical className='h-11 rotate-180 ml-1'/>
            </div>
        </div>
    );
}

export interface MobileSwapBackgroundProps {
    onChangeBackground?: () => void;
}

export function MobileSwapBackground({
    onChangeBackground,
}: MobileSwapBackgroundProps) {
    const { mode, toggleMode } = useTheme();

    return (
        <div className='w-full'>
            <div className='flex justify-center'>
                <HorizontalDivider />
            </div>
            <div className='flex gap-3 items-center'>
                <HoverEffectButton
                    className="bg-[#06060599] px-4 not-italic py-2 text-base sm:text-sm text-decor border-[0.643px] border-decor cursor-pointer h-11 flex-1 flex items-center justify-center"
                    onClick={onChangeBackground}
                >
                    Swap Background
                </HoverEffectButton>

                <HoverEffectButton
                    className="cursor-pointer bg-[#06060599] border-[0.643px] border-decor hover:border-main h-11 w-11"
                    onClick={toggleMode}
                >
                    <Image
                        src={`/assets/eye-${mode}.svg`}
                        alt={'Toggle theme mode'}
                        className='w-full h-full'
                        width={44}
                        height={44}
                    />
                </HoverEffectButton>
            </div>
        </div>
    );
}
