import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import themes from '../theme';
import ComponentsOverrides from '../theme/overrides';
import Button from '../theme/overrides/Button';

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
    mode: 'light'
});

export const ColorModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
            mode
        }),
        [mode]
    );

    const theme = useMemo(() => createTheme(themes.getDesignTokens(mode)), [mode]);
    // theme.components = ComponentsOverrides(theme);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ColorModeContext;
