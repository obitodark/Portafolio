import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import StylesComponents from './stylesWelcome';
import image from '../../Images/programer1.svg';
import './css.css';
import ProflePicture from '../ProfilePicture';
const Presentation = () => {
    const theme = useTheme();
    // anime({
    //     targets: 'img',
    //     duration: 800,
    //     translateX: 250
    // });

    const stylesText = {
        color: theme.palette.mode === 'dark' ? '#E7FE55' : '#654EC4'
    };
    return (
        <Container maxWidth="xl">
            <Grid container mt={5} justifyContent="center" position={'relative'}>
                <Grid item container xs={12} sm={12} lg={6}>
                    <Grid item container xs={12} flexDirection="row" className="container" justifyContent="center">
                        <Grid item>
                            <Typography variant="h2" fontWeight={900} m={0} p={0}>
                                Hello.
                            </Typography>

                            <Typography variant="h2" sx={stylesText} fontWeight={900} display="inline" color="#E7FE55">
                                I´am Willians Ccallo
                            </Typography>

                            <StylesComponents.textEffectWrite size={25} weight={400}>
                                Programador Full Stack
                            </StylesComponents.textEffectWrite>
                            <Grid item mt={5}>
                                <Button variant="contained" size="large">
                                    Learn more
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={12} lg={6} mt={{ xs: 5, sm: 1 }} justifyContent="center">
                    <Grid item>
                        <ProflePicture />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Presentation;
