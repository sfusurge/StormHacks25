import { Dialog } from "@/components/Dialog/Dialog";
import HoverEffectButton from "@/components/HoverEffectButton";
import { musicLibAtom } from "@/components/MusicPlayer";
import { useSetAtom } from "jotai";


export function MusicTypeSelectorDialog({ onClose: _onClose }: { onClose: () => void }) {

    const setLib = useSetAtom(musicLibAtom);

    return <Dialog
        title="Music Type"
        onClose={_onClose}
        mobileMode={false}
    >
        <div style={{ display: "flex", gap: "0.25rem" }}>
            <HoverEffectButton onClick={() => {
                setLib("calm");
            }}
                style={{ padding: "0.1rem 0.25rem" }}
            >
                Calm
            </HoverEffectButton>
            <HoverEffectButton
                style={{ padding: "0.1rem 0.25rem" }}
                onClick={() => {
                    setLib("ambiance");
                }}>
                Ambiance
            </HoverEffectButton>
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