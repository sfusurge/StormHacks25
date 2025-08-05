
export interface BlockPatternProps {
    className?: string;
}

export function BlockPattern({ className }: BlockPatternProps) {

    return (
        <div
            className={`h-[11px] w-full bg-repeat-x ${className ?? ''}`}
            style={{
                background: `url('/assets/block-pattern.svg')`,
            }}
            data-demon="border"
        />
    );
}
