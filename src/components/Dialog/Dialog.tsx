import { CSSProperties, ReactNode } from "react";
import style from "./dialog.module.css"
import HoverEffectButton from "@/components/HoverEffectButton";

export function Dialog({ title, onClose, mobileMode, children }: { mobileMode: boolean, title: string, onClose: () => void, children: ReactNode }) {
    return <div className={`${style.dialog} ${mobileMode ? style.mobile : ""}`}>
        <div data-demon-shift='accent' className={style.decorBar}></div>
        <div data-demon-shift='accent' className={style.decorBar} style={{ top: "unset", bottom: "0" }}></div>

        <div className={style.titleBar}>
            <p className={style.title}>{title}</p>
            <HoverEffectButton onClick={onClose} style={{ width: "24px", height: "24px" }}>
                X
            </HoverEffectButton>
        </div>
        <HorizontalDivider />
        {children}
    </div>
}

export function HorizontalDivider() {
    return <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
        <div className={style.divider} data-demon-shift='accent'></div>
        <div className={style.divider} style={{ transform: "scale(-1, 1)" }} data-demon-shift='accent'></div>
    </div>;
}