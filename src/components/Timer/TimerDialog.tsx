import { Dialog, HorizontalDivider } from "@/components/Dialog/Dialog";
import Timer from '@/components/Timer/Timer';
import { MobileSwapBackground } from '@/components/SwapBackground';
import { ReactNode } from "react";

export interface TimerDialogProps {
    onClose: () => void;
    mobileMode?: boolean;
    onChangeBackground?: () => void;
    mobileTriggerButton: ReactNode;
    mobileShow: boolean;
}

export function TimerDialog({
    mobileShow,
    onClose,
    mobileMode = false,
    onChangeBackground,
    mobileTriggerButton
}: TimerDialogProps) {
    return (
        <>
            <Dialog title="Timer" onClose={onClose} mobileMode={mobileMode} mobileTriggerButton={mobileTriggerButton} mobileShow={mobileShow}>
                <div className="flex flex-col gap-8 w-full">
                    <Timer />
                    <div className="flex flex-col">
                        <p className="font-bold text-[15px] italic text-main" >
                            Background
                        </p>

                        <MobileSwapBackground onChangeBackground={onChangeBackground} />
                    </div>
                </div>
            </Dialog>
        </>
    );
}