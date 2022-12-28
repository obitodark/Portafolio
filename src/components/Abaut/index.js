import { Grid, Typography, Container, Box } from '@mui/material';
import user from '../../Images/user.png';
import Spline from '@splinetool/react-spline';
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
                        <Typography variant="h4" my={3} sx={{ background: '#40404' }}>
                            ABOUT
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} sx={{ order: { xs: 1, sm: 1, lg: 0 } }}>
                        <Typography variant="h5" my={2}>
                            Willians Ccallo
                        </Typography>
                        <Typography variant="body1" display={'block'}>
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
                        <Grid item /*sx={{ background: '#005FF0', borderRadius: '23% 77% 61% 39% / 69% 42% 58% 31% ' }}*/ p={3}>
                            {/* <img width={350} src={user} alt="" /> */}
                        </Grid>
                    </Grid>
                    <Spline scene="https://prod.spline.design/isi0uXRsKYhbiiS5/scene.splinecode" />
                </Grid>
            </Container>
        </div>
    );
};

export default About;
