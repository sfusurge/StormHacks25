import { ReactNode } from "react";
import style from "./dialog.module.css"
import HoverEffectButton from "@/components/HoverEffectButton";

export function Dialog({title, onClose, children}: {title:string, onClose:()=>void, children:ReactNode}){



    return <div className={style.dialog}>
        <div className={style.titleBar}>
            <p className={style.title}>{title}</p>
            <HoverEffectButton>
                X
            </HoverEffectButton>
        </div>
        {children}
    </div>
}

export function HorizontalDivider(){
    return <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
        <img src="/assets/line-diamond.svg" alt="" />
        <img src="/assets/line-diamond.svg" alt="" style={{transform:"scale(-1)"}}/>
    </div>;
}   