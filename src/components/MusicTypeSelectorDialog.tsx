import { Dialog } from "@/components/Dialog/Dialog";
import HoverEffectButton from "@/components/HoverEffectButton";
import { musicLibAtom } from "@/components/MusicPlayer";
import { useSetAtom } from "jotai";
import { ReactNode } from "react";


export function MusicTypeSelectorDialog({ onClose: _onClose, mobileMode = false, triggerButton, show }: { onClose: () => void, mobileMode?: boolean, triggerButton ?:ReactNode, show?: boolean }) {

    const setLib = useSetAtom(musicLibAtom);

    return <Dialog
        title="Music Type"
        onClose={_onClose}
        mobileTriggerButton={triggerButton}
        mobileShow={show}
        mobileMode={mobileMode}
    >
        <div style={{ display: "flex", gap: "1rem", justifyContent:"space-between", width:"100%" }}>
            <HoverEffectButton onClick={() => {
                setLib("calm");
            }}
                style={{ padding: "0.1rem 0.75rem" }}
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
                    setLib("epic");
                }}>
                Epic
            </HoverEffectButton>
            <HoverEffectButton
                style={{ padding: "0.1rem 0.75rem" }}
                onClick={() => {
                    setLib("special");
                }}>
                Special
            </HoverEffectButton>
        </div>
    </Dialog>;
}