import {createContext, useContext, useEffect, useState} from 'react';
const ThemeContext=createContext();
export function ThemeProvider({children} ) {
    const [theme, setTheme]= useState(
        ()=>localStorage.getItem('theme') || 'light'
    );
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.dataset.theme =theme;
    }, [theme]);
    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
export function useTheme() {
    return useContext(ThemeContext);
}