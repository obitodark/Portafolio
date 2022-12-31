import { Container, Grid, Typography, Button, Divider } from '@mui/material';
import ProjectsCart from '../ProjectsCart.js';

import dataProject from './data.js';

const Projects = () => {
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
                    {dataProject.projects.map((project, index) => (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <ProjectsCart key={index} project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;
