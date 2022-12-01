import DataProvider from './context/DataProvider';

// import { createTheme, ThemeProvider } from '@mui/material';
import { ColorModeContextProvider } from './context/ColorModeContext';
import Router from './router';

function App() {
    return (
        <DataProvider>
            <ColorModeContextProvider>
                <Router />
            </ColorModeContextProvider>
        </DataProvider>
    );
}

export default App;
