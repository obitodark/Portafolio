import { Grid, Typography, Container, Box } from '@mui/material';
import user from '../../Images/user.png';
import './css.css';
const About = () => {
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
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container mt={10} p={2}>
                    <Grid item xs={12}>
                        {' '}
                        <Typography variant="h4" sx={{ background: '#40404' }}>
                            ABOUT
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" my={2}>
                            Willians Ccallo
                        </Typography>
                        <Typography variant="body1">
                            Soy engrasado de Tecnico Computacion e Informatica y certicado en desarrollo web full stack en TECSUP ,cuento
                            con conocimietos solidos en HTML,CSS,JAVASCRIPTS,REACT,BOOSTTRAP,MATERIAL UI
                        </Typography>
                        <br />
                        <Typography variant="body1" display={'block'}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus reiciendis vel labore quo rem nam beatae
                            consequatur, omnis obcaecati, totam atque fugiat? Hic provident aliquam veritatis incidunt inventore, eligendi
                            nemo.
                        </Typography>
                    </Grid>
                    <Grid item container xs={6} sx={{ position: 'relative' }}>
                        <Grid iten mx={5} mt={-5}>
                            {[10, 20, 50, 90, 130, 170, 210].map((box, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        position: 'absolute',
                                        background: '#0F0F0F',
                                        width: '400px',
                                        height: `${5 * index}px`,
                                        top: `${box + 5 * index}px`,
                                        zIndex: 10
                                        // border: '1px solid white'
                                    }}
                                ></Box>
                            ))}

                            <Box sx={{ position: 'absolute', zIndex: 11 }}>
                                <img width={350} src={user} alt="" />
                            </Box>
                            <Box className="shape">
                                <Box className="bd">
                                    {/* <Box sx={{ position: 'absolute', background: '#0F0F0F', width: '100%', height: '10px' }}></Box> */}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default About;
