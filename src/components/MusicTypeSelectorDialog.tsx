import { Dialog } from "@/components/Dialog/Dialog";
import HoverEffectButton from "@/components/HoverEffectButton";
import { musicLibAtom, currentLibTypeAtom } from "@/components/MusicPlayer";
import { useSetAtom, useAtomValue } from "jotai";
import { ReactNode } from "react";


export function MusicTypeSelectorDialog({ onClose: _onClose, mobileMode = false, triggerButton, show }: { onClose: () => void, mobileMode?: boolean, triggerButton?: ReactNode, show?: boolean }) {

    const setLib = useSetAtom(musicLibAtom);
    const currentType = useAtomValue(currentLibTypeAtom);

    return <Dialog
        title="Music Type"
        onClose={_onClose}
        mobileTriggerButton={triggerButton}
        mobileShow={show}
        mobileMode={mobileMode}
    >
        <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", width: "100%" }}>
            <HoverEffectButton
                onClick={() => setLib("calm")}
                style={{ padding: "0.1rem 0.75rem" }}
                active={currentType==="calm"}
                aria-pressed={currentType === "calm"}
            >
                Calm
            </HoverEffectButton>
            {/*<HoverEffectButton*/}
            {/*    style={{ padding: "0.1rem 0.75rem" }}*/}
            {/*    onClick={() => {*/}
            {/*        setLib("ambiance");*/}
            {/*    }}>*/}
            {/*    Ambiance*/}
            {/*</HoverEffectButton>*/}
            <HoverEffectButton
                style={{ padding: "0.1rem 0.75rem" }}
                onClick={() => {
                    setLib("special");
                }}
                active={currentType==="special"}
                aria-pressed={currentType === "special"}
                >
                Special
            </HoverEffectButton>
            <HoverEffectButton
                style={{ padding: "0.1rem 0.75rem" }}
                onClick={() => {
                    setLib("epic");
                }}
                active={currentType==="epic"}
                aria-pressed={currentType === "epic"}
                >
                Epic
            </HoverEffectButton>
        </div>
    </Dialog>;
}