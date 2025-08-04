import { Dialog } from "@/components/Dialog/Dialog";
import HoverEffectButton from "@/components/HoverEffectButton";
import { musicLibAtom } from "@/components/MusicPlayer";
import { useSetAtom } from "jotai";


export function MusicTypeSelectorDialog({ onClose: _onClose, mobileMode = false }: { onClose: () => void, mobileMode?: boolean }) {

    const setLib = useSetAtom(musicLibAtom);

    return <Dialog
        title="Music Type"
        onClose={_onClose}
        mobileMode={mobileMode}
    >
        <div style={{ display: "flex", gap: "1rem" }}>
            <HoverEffectButton onClick={() => {
                setLib("calm");
            }}
                style={{ padding: "0.1rem 0.25rem" }}
            >
                Calm
            </HoverEffectButton>
            {/*<HoverEffectButton*/}
            {/*    style={{ padding: "0.1rem 0.25rem" }}*/}
            {/*    onClick={() => {*/}
            {/*        setLib("ambiance");*/}
            {/*    }}>*/}
            {/*    Ambiance*/}
            {/*</HoverEffectButton>*/}
            <HoverEffectButton
                style={{ padding: "0.1rem 0.25rem" }}
                onClick={() => {
                    setLib("epic");
                }}>
                Epic
            </HoverEffectButton>
            <HoverEffectButton
                style={{ padding: "0.1rem 0.25rem" }}
                onClick={() => {
                    setLib("special");
                }}>
                Special
            </HoverEffectButton>
        </div>
    </Dialog>;
}