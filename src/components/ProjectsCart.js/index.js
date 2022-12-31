import { Card, CardMedia, Typography, CardContent, CardActions, Button, useTheme, Divider } from '@mui/material';
import './stylesCart.css';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
const ProjectsCart = ({ project }) => {
    const theme = useTheme();
    const styles_card = {
        border: theme.palette.mode === 'dark' ? 'none' : '1px solid rgb(214, 214, 214)',
        boxShadow: 'none',
        ':before': {
            boxShadow:
                theme.palette.mode === 'dark'
                    ? '8px 8px 10px #08111C , -8px -8px 8px #08111C '
                    : '8px 8px 10px rgb(212, 204, 204), -8px -8px 8px rgb(212, 204, 204)'
        }
    };

    const handleView = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div>
            <Card sx={{ ...styles_card, maxWidth: 345, borderRadius: '20px' }} className="box-item">
                <CardMedia component="img" height="140" image={project.image} alt="green iguana" sx={{ borderRadius: '20px' }} />

                <CardContent sx={{ borderRadius: '20px' }}>
                    <Divider sx={{ background: 'black' }} mt={1} />
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" csx={{ borderRadius: '9px' }}>
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleView(project.link)}>
                        <LinkIcon />
                    </Button>
                    <Button size="small" onClick={() => handleView(project.link)}>
                        <GitHubIcon />
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProjectsCart;
