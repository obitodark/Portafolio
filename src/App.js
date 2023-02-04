import DataProvider from './context/DataProvider';

// import { createTheme, ThemeProvider } from '@mui/material';
import { ColorModeContextProvider } from './context/ColorModeContext';
import Router from './router';
import DataProviderSkill from './context/ContextSkill';
import { DataProviderProjects } from './context/contextProjects';
import DataProviderCategories from './context/ContextCategories';

function App() {
    return (
        <ColorModeContextProvider>
            <DataProviderSkill>
                <DataProviderProjects>
                    <DataProviderCategories>
                        <DataProvider>
                            <Router />
                        </DataProvider>
                    </DataProviderCategories>
                </DataProviderProjects>
            </DataProviderSkill>
        </ColorModeContextProvider>
    );
}

export default App;
