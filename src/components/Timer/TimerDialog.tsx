import { Dialog, HorizontalDivider } from "@/components/Dialog/Dialog";
import Timer from '@/components/Timer/Timer';
import { MobileSwapBackground } from '@/components/SwapBackground';

export interface TimerDialogProps {
    onClose: () => void;
    mobileMode?: boolean;
    onChangeBackground?: () => void;
}

export function TimerDialog({
    onClose,
    mobileMode = false,
    onChangeBackground
}: TimerDialogProps) {
    return (
        <Dialog title="Timer" onClose={onClose} mobileMode={mobileMode}>
            <div className="flex flex-col gap-6">
                <Timer />
                <div className="flex flex-col gap-3">
                <p style={{
                    fontWeight: "600",
                    opacity: 0.9
                }}>
                    Background
                </p>

                <MobileSwapBackground onChangeBackground={onChangeBackground} />
                    </div>
            </div>
        </Dialog>
    );
}