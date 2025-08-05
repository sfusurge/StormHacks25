import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { atom } from "jotai";

export const masterVolumeAtom = atom(1);

export const ambianceVolumesAtom = atom({
    Rain: 0,
    Cafe: 0,
    Water: 0,
    Fire: 0
});

export function AmbiancePlayer() {
    const [masterVolume] = useAtom(masterVolumeAtom);
    const [volumes] = useAtom(ambianceVolumesAtom);

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
                    ref.src = opt.file;
                } else if (vol === 0 && !ref.paused) {
                    ref.pause();
                }
            }
        }
    }, [masterVolume, volumes]);

    return (
        <div style={{ display: "none" }}>
            {options.map(opt => (
                <audio
                    key={opt.name}
                    loop
                    ref={opt.ref}
                />
            ))}
        </div>
    );
}