import { Container, Grid, Typography, Button, Divider, Pagination, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';

import { ContextCategories } from '../../context/ContextCategories.js';
import { ContextProjects } from '../../context/contextProjects.js';
import ModalContainer from '../common/ModalContainer/index.js';

import ProjectsCart from '../ProjectsCart.js';

const Projects = () => {
    const { dataProjectsByPage, setProjectsByPage } = useContext(ContextProjects);
    const { dataCategories } = useContext(ContextCategories);
    const [alignment, setAlignment] = useState('left');
    const handleOnChangePage = (event, value) => {
        setProjectsByPage(value, 8, alignment);
    };
    const handleFilterProjects = (filter) => {
        setProjectsByPage(1, 8, filter);
        setAlignment(filter);
    };
    return (
        <Container maxWidth="xl">
            <ModalContainer></ModalContainer>
            <Grid container spacing={3} mt={5}>
                <Grid item xs={12}>
                    <Typography variant="h4">Proyectos Realizados</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ToggleButtonGroup value={alignment} exclusive aria-label="text alignment">
                        <ToggleButton
                            sx={{ color: 'main', border: 'none' }}
                            value=""
                            aria-label="left aligned"
                            onClick={() => handleFilterProjects('')}
                        >
                            <Typography variant="body" color="primary">
                                All
                            </Typography>
                        </ToggleButton>
                        {dataCategories.map((category, index) => (
                            // <Button key={index} onClick={() => handleFilterProjects(category._id)}>
                            //     {category.name}
                            // </Button>
                            <ToggleButton
                                sx={{ border: 'none' }}
                                value={category._id}
                                aria-label="centered"
                                onClick={() => handleFilterProjects(category._id)}
                            >
                                <Typography variant="Body" color={'primary'}>
                                    {category.name}
                                </Typography>
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    {console.log('data_pprjects', dataProjectsByPage)}
                    <Divider sx={{ background: '#404040' }} />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Pagination count={dataProjectsByPage.totalPages} onChange={handleOnChangePage} variant="outlined" shape="rounded" />
                </Grid>
                <Grid item xs={12} container spacing={2} justifyContent="center">
                    {dataProjectsByPage.items !== undefined && dataProjectsByPage.items.length > 0
                        ? dataProjectsByPage.items.map((project, index) => (
                              <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
                                  <ProjectsCart project={project} />
                              </Grid>
                          ))
                        : ''}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;
