import Image from 'next/image';
import HoverEffectButton from '@/components/HoverEffectButton';
import { useTheme } from './ThemeProvider';
import { HorizontalDivider } from './Dialog/Dialog';
import { BlockPatternVertical } from './svgs/BlockPatternVertical';
import { RockFilter } from '@/components/RockFilter/RockFilter';

export interface SwapBackgroundProps {
    onChangeBackground?: () => void;
}

export default function SwapBackground({
    onChangeBackground,
}: SwapBackgroundProps) {
    const { mode, toggleMode } = useTheme();

    return (
        <div className="mt-auto mb-8 relative border border-border bg-background h-11">
            <RockFilter/>
            <div className="flex justify-between items-center h-full">
                <BlockPatternVertical className='h-11 mr-1.5' />
                <HoverEffectButton
                    className="cursor-pointer w-[24px] h-[24px] mr-3"
                    onClick={onChangeBackground}
                >
                    <Image
                        src={`/assets/swap-background.svg`}
                        alt={'mode'}
                        width={22}
                        height={22}
                        style={{ width: "22px" }}
                        data-demon="primary"
                    />

                </HoverEffectButton>

                <HoverEffectButton
                    className="cursor-pointer w-[24px] h-[24px]"
                    onClick={toggleMode}
                >
                    {
                        mode === "angel" ?
                            <Image
                                src={`/assets/eye-open.svg`}
                                alt={'mode'}
                                width={22}
                                height={22}
                                style={{ width: "22px" }}
                                data-demon="primary"
                            /> :
                            <Image
                                src={"/assets/eye-closed.svg"}
                                alt={'mode'}
                                width={22}
                                height={22}
                                style={{ width: "22px" }}
                                data-demon="primary"
                            />
                    }

                </HoverEffectButton>
                <BlockPatternVertical className='h-11 rotate-180 ml-1.5' />
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
                    className=" px-4 not-italic py-2 text-base sm:text-sm text-decor border-[0.643px] border-decor cursor-pointer h-11 flex-1 flex items-center justify-center"
                    onClick={onChangeBackground}
                >
                    Swap Background
                </HoverEffectButton>

                <HoverEffectButton
                    className="cursor-pointer border-[0.643px] border-decor hover:border-main h-11 w-11"
                    onClick={toggleMode}
                >
                    {
                        mode === "angel" ?
                            <Image
                                src={`/assets/eye-open.svg`}
                                alt={'mode'}
                                width={22}
                                height={22}
                                style={{ width: "22px" }}
                                data-demon="primary"
                            /> :
                            <Image
                                src={"/assets/eye-closed.svg"}
                                alt={'mode'}
                                width={22}
                                height={22}
                                style={{ width: "22px" }}
                                data-demon="primary"
                            />
                    }
                </HoverEffectButton>
            </div>
        </div>
    );
}
