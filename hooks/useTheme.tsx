'use client';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

type Themes = 'dark' | 'light';
type ThemeState = {
    theme: Themes;
    setTheme(theme: Themes): void;
};

const ThemeContext = createContext<ThemeState | null>(null);

const useTheme = (): ThemeState => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Please use ThemeProvider in parent component');
    }

    return context;
};

export const ThemeProvider = (props: PropsWithChildren) => {
    const [theme, setTheme] = useState<Themes>('dark');

    return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};

export default useTheme;
