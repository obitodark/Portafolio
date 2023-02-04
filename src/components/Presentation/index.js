import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Button, Box, Divider } from '@mui/material';
import StylesComponents from './stylesWelcome';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import './css.css';
import ProflePicture from '../ProfilePicture';
const Presentation = () => {
    const theme = useTheme();
    // anime({
    //     targets: 'img',
    //     duration: 800,
    //     translateX: 250
    // });
    const handleOpenWhatsApp = () => {
        return window.open(' https://wa.me/51977980622?text=Hola,%20quiero%20contactar%20contigo', '_blank');
    };
    const handleOpenGithub = () => {
        return window.open('https://github.com/obitodark?tab=repositories', '_blank');
    };

    const stylesText = {
        color: theme.palette.mode === 'dark' ? '#E7FE55' : '#005FF0'
    };
    return (
        <Container maxWidth="xl">
            <Grid container mt={5} justifyContent="center" position={'relative'}>
                <Grid item container xs={12} sm={12} lg={6}>
                    <Grid item container xs={12} flexDirection="row" className="container" justifyContent="center">
                        <Grid item sx={{ display: 'flex', flexDirection: 'column' }} pt={5}>
                            <Button size="small" onClick={handleOpenWhatsApp}>
                                <WhatsAppIcon fontSize="large" />
                                <Divider orientation="vertical" variant="middle" sx={{ padding: '4px' }} />
                            </Button>

                            <Button size="small" onClick={handleOpenGithub}>
                                <GitHubIcon fontSize="large" p={5} />
                                <Divider orientation="vertical" variant="middle" sx={{ padding: '4px' }} />
                            </Button>
                        </Grid>

                        <Grid item>
                            <Typography
                                variant="h1"
                                fontWeight={900}
                                m={0}
                                p={0}
                                // sx={{ color: 'transparent', WebkitTextStroke: '2px black' }}
                            >
                                Hello.
                            </Typography>

                            <Typography variant="h2" sx={stylesText} fontWeight={900} display="inline" color="#E7FE55">
                                I´am Willians Ccallo
                            </Typography>

                            <StylesComponents.textEffectWrite size={25} weight={600}>
                                Programador Full Stack
                            </StylesComponents.textEffectWrite>

                            <Grid item mt={5}>
                                <Button
                                    variant="dashed"
                                    // variant="contained"
                                    // size="large"
                                    // sx={{ borderRadius: '10px', textTransform: 'capitalize', padding: '10px 20px' }}
                                >
                                    Learn more
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={12} lg={6} p={5} mt={{ xs: 5, sm: 1 }} justifyContent="center">
                    <Grid item>
                        <ProflePicture />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Presentation;
