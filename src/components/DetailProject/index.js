import { CardHeader, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const DetailProject = ({ dataProject }) => {
    const handleView = (url) => {
        window.open(url, '_blank');
    };
    return (
        <>
            <CardHeader sx={{ marginTop: '-80px' }} title={`${dataProject.name}`} subheader="Projecto Propio" />
            <CardMedia
                sx={{ width: { xs: '100%' }, height: { xs: '200px', sm: '350px' } }}
                image={dataProject && dataProject.images_projects && dataProject.images_projects[0].images.url_image}
                title="image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {dataProject.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleView(dataProject.url_projects)}>
                    <LinkIcon />
                </Button>
                <Button size="small" onClick={() => handleView(dataProject.url_github)}>
                    <GitHubIcon />
                </Button>
            </CardActions>
        </>
    );
};
export default DetailProject;
