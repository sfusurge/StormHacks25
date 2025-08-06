export interface BlockPatternVerticalProps {
    className?: string;
}

export function BlockPatternVertical({ className }: BlockPatternVerticalProps) {
    return (
        <div
            className={`w-[11px] bg-repeat-x ${className ?? ''}`}
            style={{
                background: `url('/assets/block-pattern-vertical.svg')`,
            }}
            data-demon="border"
        />
    );
}
