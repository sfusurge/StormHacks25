'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Mode = 'demon' | 'angel';

interface ThemeContextType {
    mode: Mode;
    setMode: (mode: Mode) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<Mode>('angel');

    const toggleMode = () =>
        setMode((mode) => (mode === 'angel' ? 'demon' : 'angel'));

    useEffect(() => {
        document.documentElement.setAttribute('data-mode', mode);
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }

    return context;
}
