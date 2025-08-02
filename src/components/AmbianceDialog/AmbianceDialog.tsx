import { Dialog } from "@/components/Dialog/Dialog";
import { atom, useAtom } from "jotai";
import { CSSProperties, useActionState, useEffect, useRef, useState } from "react";
import style from "./ambianceDialog.module.css"

export const masterVolumnAtom = atom(1);

export function AmbianceDialog({ onClose: _onClose }: { onClose: () => void }) {

    const [volumes, setVolumes] = useState({
        Rain: 0,
        Cafe: 0,
        Water: 0,
        Fire: 0
    });

    const [masterVolume, setMasterVolume] = useAtom(masterVolumnAtom);

    const options = [
        {
            name: "Rain",
            file: "audio/Ambiance/light_rain.mp3",
            ref: useRef<HTMLAudioElement>(null)
        },
        {
            name: "Cafe",
            file: "audio/Ambiance/cofee_shop_ambience.mp3",
            ref: useRef<HTMLAudioElement>(null)
        },
        {
            name: "Water",
            file: "audio/Ambiance/gentle_ocean_waves.mp3",
            ref: useRef<HTMLAudioElement>(null)
        },
        {
            name: "Fire",
            file: "audio/Ambiance/burning_fireplace_crackling_fire.mp3",
            ref: useRef<HTMLAudioElement>(null)
        }
    ];

    useEffect(() => {
        for (const opt of options) {
            const vol = volumes[opt.name as keyof typeof volumes];

            const ref = opt.ref.current;
            if (ref) {
                ref.volume = masterVolume * vol;

                if (vol > 0 && ref.paused) {
                    ref.play();
                }
            }

        }
    }, [masterVolume, volumes])

    return <Dialog title="Sound Settings" onClose={_onClose} mobileMode={false}>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div>
                <p className={style.header}>
                    Music Volume
                </p>

                <div className={style.row}>
                    <img src="/assets/mute.svg" alt="" />
                    <Slider initialVal={100} onChange={(val) => {
                        setMasterVolume(val)
                    }} />
                    <img src="/assets/fullSound.svg" alt="" />
                </div>
            </div>

            <div>
                <p className={style.header}>Environment Sounds</p>
                {options.map(opt => (
                    <div
                        key={opt.name}
                        style={{
                            display: "flex",
                            margin: "0.25rem 0",
                            fontStyle: "italic",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}>
                        <span style={{ width: "2.5rem" }}>{opt.name}</span>
                        <Slider initialVal={0} onChange={(val) => {
                            setVolumes({ ...volumes, [opt.name]: val })
                        }} />
                        <audio
                            autoPlay
                            loop
                            ref={opt.ref}
                            src={opt.file}
                        />
                    </div>
                ))}
            </div>
        </div>

    </Dialog>
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