import { Card, CardMedia, Typography, CardContent, CardActions, Button, useTheme, Divider } from '@mui/material';

const ProjectsCart = ({ image }) => {
    const theme = useTheme();
    const styles_card = {
        borderRadius: '9px',
        border: '3px solid transparent ',
        // border: theme.palette.mode === 'dark' ? '1px rgba(0,0,0) solid ' : '1px rgba(202, 198, 198,0.5) solid ',
        padding: '0px',
        boxShadow: 'none',

        position: 'relative',
        cursor: 'pointer',

        transition: 'all 0.2s ease-in',

        ':hover': {
            borderRadius: '9px',
            boxShadow:
                theme.palette.mode === 'dark'
                    ? '5px 5px 10px #08111C , -5px -5px 8px #08111C '
                    : '5px 5px 10px rgb(212, 204, 204), -5px -5px 8px rgb(212, 204, 204)',
            // border: theme.palette.mode === 'dark' ? '1px #E7FE55 solid ' : '1px rgb(202, 198, 198)solid ',

            // animation: 'gradient 5s linear infinite',
            // background: 'linear-gradient(100deg, #3aeaa4 25%, #3a67ea 50%, #3aeaa4 75%)',
            // backgroundRepeat: 'repeat',

            borderImage: 'linear-gradient(to right, #E7FE55 , #EA90FF)1',
            // borderRadius: '2rem',
            // padding: '2rem',
            // margin: '5rem',

            transition: 'all 0.2s ease-in'
        }
    };
    return (
        <div>
            <Card sx={{ ...styles_card, maxWidth: 345 }}>
                <CardMedia component="img" height="140" image={image} alt="green iguana" sx={{ borderRadius: '9px' }} />

                <CardContent sx={{ borderRadius: '9px' }}>
                    <Divider sx={{ background: 'black' }} mt={1} />
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary" csx={{ borderRadius: '9px' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except
                        Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProjectsCart;
