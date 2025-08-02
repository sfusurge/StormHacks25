import { useTheme } from '../ThemeProvider';

export interface BlockPatternVerticalProps {
    className?: string;
}

export function BlockPatternVertical({ className }: BlockPatternVerticalProps) {
    const { mode } = useTheme();

    return (
        <div
            className={`w-[11px] bg-repeat-x ${className ?? ''}`}
            style={{
                background: `url('/assets/block-pattern-vertical-${mode}.svg')`,
            }}
        />
    );
}
