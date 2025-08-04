import { Dialog } from "@/components/Dialog/Dialog";
import { useAtom } from "jotai";
import { CSSProperties, useState } from "react";
import { masterVolumeAtom, ambianceVolumesAtom } from "@/components/AmbiancePlayer";
import style from "./ambianceDialog.module.css";

export function AmbianceDialog({ onClose, mobileMode = false }: { onClose: () => void, mobileMode?: boolean }) {
    const [masterVolume, setMasterVolume] = useAtom(masterVolumeAtom);
    const [volumes, setVolumes] = useAtom(ambianceVolumesAtom);

    const options = ["Rain", "Cafe", "Water", "Fire"];

    return (
        <Dialog title="Sound Settings" onClose={onClose} mobileMode={mobileMode}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                    <p className={style.header}>Music Volume</p>
                    <div className={style.row}>
                        <img src="/assets/mute.svg" alt="" />
                        <Slider initialVal={masterVolume * 100} onChange={(val) => setMasterVolume(val)}
                        />
                        <img src="/assets/fullSound.svg" alt="" />
                    </div>
                </div>

                <div>
                    <p className={style.header}>Environment Sounds</p>
                    {options.map(name => (
                        <div
                            key={name}
                            style={{
                                display: "flex",
                                margin: "0.25rem 0",
                                fontStyle: "italic",
                                alignItems: "center",
                                gap: "0.5rem"
                            }}
                        >
                            <span style={{ width: "2.5rem" }}>{name}</span>
                            <Slider initialVal={volumes[name as keyof typeof volumes] * 100}
                                onChange={(val) => {
                                    setVolumes({ ...volumes, [name]: val });
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Dialog>
    );
}


export function Slider({ initialVal, onChange: _onChange }: { initialVal: number, onChange: (val: number) => void }) {

    const [val, setVal] = useState(initialVal);


    return <div style={{
        "--progress": val / 100,
    } as CSSProperties} className={style.sliderWrapper}>
        <input type="range" min={0} max={100}

            className={style.slider}
            onChange={(e) => {
                const newVal = parseInt(e.target.value);
                setVal(newVal);
                _onChange(newVal / 100)
            }}
        />
    </div>
}