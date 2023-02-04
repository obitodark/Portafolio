import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { ViewLogin } from '../../../components';
import { singIn } from '../../../services/auth.services';

import './auth.styles.css';

const Auth = () => {
    const theme = useTheme();
    const styledContainer = {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        backdropFilter: 'blur(50px)',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: `${theme.palette.mode === 'dark' ? '#0B0B0F' : 'transparent'}`
    };
    return (
        <Box sx={styledContainer}>
            <div className="point-degraded_superior"></div>
            {/* <div className="point-degraded_inferior "></div> */}
            <Box
                sx={{
                    zIndex: 5,
                    borderRadius: 2,
                    width: '500px',
                    height: '400px',

                    border: `1px solid ${theme.palette.mode === 'dark' ? 'tranparent' : '#B0B3B8'}`,
                    background: `${theme.palette.mode === 'dark' ? 'rgba(15,15,15,0.5)' : 'rgba(255, 255, 255,0.6)'}`,
                    backdropFilter: 'blur(50px)'
                }}
            >
                <ViewLogin />
            </Box>
        </Box>
    );
};

export default Auth;
