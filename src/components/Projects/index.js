import { Container, Grid, Typography, Button, Divider } from '@mui/material';
import ProjectsCart from '../ProjectsCart.js';
import anime from 'animejs/lib/anime.es.js';
import image1 from '../../Images/tienda.jpg';
import image2 from '../../Images/rickmorty.jpg';
const Projects = () => {
    const image = [image1, image2];
    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} mt={5}>
                <Grid item xs={12}>
                    <Typography variant="h4">Proyectos Realizados</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button>All</Button>
                    <Button>React</Button>
                    <Button>html/css/javascripts</Button>
                </Grid>
                <Grid item xs={12}>
                    {' '}
                    <Divider sx={{ background: '#404040' }} />
                </Grid>
                <Grid item xs={12} container spacing={3} justifyContent="center">
                    {[1, 2].map((data, index) => (
                        <Grid item xs={12} sm={6} lg={3}>
                            <ProjectsCart key={data} image={image[index]} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;
