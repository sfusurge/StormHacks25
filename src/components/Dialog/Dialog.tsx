import { CSSProperties, ReactNode } from "react";
import style from "./dialog.module.css"
import HoverEffectButton from "@/components/HoverEffectButton";
import { RockFilter } from "@/components/RockFilter/RockFilter";

export function Dialog({ title, onClose, mobileMode, children, mobileTriggerButton, mobileShow }: {
    mobileMode: boolean,
    title: string,
    onClose: () => void,
    children: ReactNode,
    mobileTriggerButton?: ReactNode,
    mobileShow?: boolean,
}) {
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const dialogContent = (
        <div className={`${style.dialog} ${mobileMode ? style.mobile : ""}`}>
            <RockFilter />

            <div data-demon='border' className={style.decorBar}></div>
            <div data-demon='border' className={style.decorBar} style={{ top: "unset", bottom: "0" }}></div>

            <div className={style.titleBar}>
                <p className={style.title}>{title}</p>
                <HoverEffectButton onClick={onClose} style={{ width: "24px", height: "24px" }}>
                    X
                </HoverEffectButton>
            </div>
            <HorizontalDivider />
            {children}
        </div>
    );

    if (mobileMode) {
        return (
            <>
                {mobileShow && <>
                    <div className={style.dialogBackdrop} onClick={handleBackdropClick} />
                    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-[1002] pointer-events-none">
                        

                        {dialogContent}
                    </div>
                </>}
                {mobileTriggerButton && (
                    <div className={`${mobileShow ? "z-[1001]" : "flex"}`}>
                        {mobileTriggerButton}
                    </div>
                )}
            </>
        );
    }

    return dialogContent;
}

export function HorizontalDivider() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%"
        }}>
            <div className={style.divider} data-demon='border'></div>
            <div className={style.divider} style={{ transform: "scale(-1, 1)" }} data-demon='border'></div>
        </div>
    );
}