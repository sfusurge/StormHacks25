import React, { CSSProperties } from 'react';
import useSound from 'use-sound';

const HoverEffectButton = ({
    children,
    onClick,
    className = '',
    style,
    type = "button"
}: Readonly<{
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: CSSProperties;
    type?: "button" | "submit" | "reset";
}>) => {
    const soundUrl = '/audio/sound-effects/button_hover.mp3';
    const [play] = useSound(soundUrl, { volume: 0.01 });

    return (
        <button
            style={{ ...style }}
            className={`cursor-pointer group relative transition-all duration-300 border-[0.643px] border-decor hover:border-main hover:shadow-[0_0_7px_0_var(--color-decor)] ${className}`}
            onMouseEnter={() => play()}
            onClick={onClick}
            type={type}
        >
            <div className="transition-all duration-300 group-hover:brightness-[1.8] group-hover:sepia-[0.2] group-hover:hue-rotate-[15deg]">
                {children}
            </div>

            {/*corner pieces*/}
            <span className="absolute -top-0.5 -left-0.5 w-2 h-2 border-l-1 border-t-1 border-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 border-r-1 border-t-1 border-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l-1 border-b-1 border-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r-1 border-b-1 border-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
    );
};

export default HoverEffectButton;