import { Card, CardMedia, Typography, CardContent, Box, CardActions, Button, useTheme, Grid } from '@mui/material';
import './stylesCart.css';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from 'react';
import { ContextProjects } from '../../context/contextProjects';

const ProjectsCart = ({ project }) => {
    const { openModalDetailProject, setProject } = useContext(ContextProjects);
    const theme = useTheme();
    const styles_card = {
        overflow: 'hidden',
        border: theme.palette.mode === 'dark' ? '#424242' : '1px solid rgb(214, 214, 214)',
        boxShadow: 'none',
        ':before': {
            borderRadius: '10px',
            boxShadow:
                theme.palette.mode === 'dark'
                    ? '8px 8px 10px black , -8px -8px 8px ##222222  '
                    : '8px 8px 10px rgb(212, 204, 204), -8px -8px 8px rgb(212, 204, 204)'
        }
    };

    const handleOpenModal = () => {
        setProject(project._id);
        openModalDetailProject();
    };
    const handleView = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div>
            <Card sx={{ ...styles_card, display: 'flex', justifyContent: 'space-between', borderRadius: '10px' }} className="box-item">
                <Grid container sx={{ height: '200px', overflow: 'hidden' }} onClick={handleOpenModal}>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography gutterBottom variant="subtitle" component="div" sx={{ fontWeight: 500 }}>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="div" className="block-ellipsis">
                                    {project.description}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" onClick={() => handleView(project.url_projects)}>
                                    <LinkIcon />
                                </Button>
                                <Button size="small" onClick={() => handleView(project.url_github)}>
                                    <GitHubIcon />
                                </Button>
                            </CardActions>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            sx={{ width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden' }}
                            image={project.images_projects[0].images !== undefined ? project.images_projects[0].images.url_image : ''}
                            alt="Live from space album cover"
                        />
                    </Grid>
                </Grid>
            </Card>
            {/* <Card sx={{ ...styles_card, maxWidth: 345, borderRadius: '10px' }} className="box-item">
                <CardMedia
                    className="card-projects"
                    component="img"
                    height="140"
                    image={project.images_projects[0].images !== undefined ? project.images_projects[0].images.url_image : ''}
                    alt="image-project"
                    sx={{ borderRadius: '10px' }}
                />

                <CardContent sx={{ borderRadius: '10px' }}>
                    <Divider sx={{ background: 'black' }} mt={1} />
                    <Typography gutterBottom variant="subtitle" component="div" sx={{ fontWeight: 500 }}>
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" csx={{ borderRadius: '9px' }}>
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleView(project.url_projects)}>
                        <LinkIcon />
                    </Button>
                    <Button size="small" onClick={() => handleView(project.url_github)}>
                        <GitHubIcon />
                    </Button>
                </CardActions>
            </Card> */}
        </div>
    );
};

export default ProjectsCart;
