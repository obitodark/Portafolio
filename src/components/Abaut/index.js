import { Grid, Typography, Container, Box, Button } from '@mui/material';

import user from '../../Images/avatar.png';
import { styled, useTheme } from '@mui/material/styles';
// import Spline from '@splinetool/react-spline';
import './css.css';
const About = () => {
    const theme = useTheme();
    const box = {
        width: '400px',
        height: '400px',
        backgroundImage: 'linear-gradient(45deg, #ffd866, #ff5733)',
        transition: 'all .2s ease-in',
        borderRadius: '23% 77% 61% 39% / 69% 42% 58% 31%',
        ':hover': {
            borderRadius: '53% 25% 61% 29% / 89% 22% 68% 81%',
            transition: 'all .2s ease-in'
        }
    };
    const StyleBoxDecorative = {
        // boxShadow: theme.palette.mode !== 'dark' ? ' 3px 2px 5px  red' : '2px solid white',
        background: theme.palette.mode !== 'dark' ? ' #00e5ac' : '#DEF067',
        ':before': {
            background: theme.palette.mode !== 'dark' ? ' #00e5ac' : '#DEF067'
        },
        ':after': {
            background: theme.palette.mode !== 'dark' ? ' #00e5ac' : '#DEF067'
        }
    };
    const StyleBoxDecorative2 = {
        background: theme.palette.mode !== 'dark' ? ' #00e5ac' : '#DEF067',
        ':before': {
            background: theme.palette.mode !== 'dark' ? ' #00e5ac' : '#DEF067'
        }
    };
    return (
        <>
            <Container maxWidth="lg">
                <Grid container mt={10} p={2}>
                    <Grid item xs={12}>
                        {' '}
                        <Typography variant="h4" my={3} sx={{ background: '#40404' }}>
                            ABOUT
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} sx={{ order: { xs: 1, sm: 1, lg: 0 } }}>
                        <Typography variant="h5" my={2}>
                            Willians Ccallo
                        </Typography>
                        <Typography variant="body1" display={'block'} sx={{ wordWrap: 'break-word' }}>
                            Soy engrasado de Tecnico Computacion e Informatica y certicado en desarrollo web full stack en TECSUP ,cuento
                            con conocimietos solidos en Html,Css,Javascript,React,Bootstrap,Material UI
                        </Typography>
                        <br />
                        <Typography variant="body1" display={'block'}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reiciendis vel labore quo rem nam beatae
                            consequatur, omnis obcaecati, totam atque fugiat? Hic provident aliquam veritatis incidunt inventore, eligendi
                            nemo.
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} sm={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            position={'relative'}
                            sx={{
                                // border: '1px solid red',
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                                width: '380px',
                                height: '290px',
                                overflow: 'hidden'
                            }}
                        >
                            <div className="box-container-img">
                                <img width="100%" height="auto" src={user} alt="" />
                            </div>
                            <Box className="box-decorate" sx={{ ...StyleBoxDecorative }}></Box>
                            <Box className="box-decorate2" sx={{ ...StyleBoxDecorative2 }}></Box>
                        </Box>
                        {/* <Grid
                            item
                            className="back-user"
                            sx={{
                                backdropFilter: 'blur(50px)',
                                background: 'transparent',
                                borderRadius: '10px ',
                                height: '350px',
                                width: '300px',
                                display: 'flex',
                                position: 'relative',
                                border: '1px solid black'

                                // boxShadow: '5px 5px 5px red'
                            }}
                            p={3}
                        >
                            <img width="100%" height="100%" src={user} alt="" />
                        </Grid> */}
                    </Grid>
                    {/* <Spline scene="https://prod.spline.design/isi0uXRsKYhbiiS5/scene.splinecode" /> */}
                </Grid>
            </Container>
        </>
    );
};

export default About;
