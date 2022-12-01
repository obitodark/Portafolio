import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import themes from '../theme';

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
    mode: 'light'
});

export const ColorModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
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

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ColorModeContext;
