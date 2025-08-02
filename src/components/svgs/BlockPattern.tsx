import { useTheme } from '../ThemeProvider';

export interface BlockPatternProps {
    className?: string;
}

export function BlockPattern({ className }: BlockPatternProps) {
    const { mode } = useTheme();

    return (
        <div
            className={`h-[11px] w-full bg-repeat-x ${className ?? ''}`}
            style={{
                background: `url('/assets/block-pattern-${mode}.svg')`,
            }}
        />
    );
}
