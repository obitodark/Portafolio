import { Box, Grid } from '@mui/material';
import user from '../../Images/user.png';
import './profile.css';

const ProflePicture = () => {
    const stylesshape = {
        width: { xs: '300px', sm: '380px' },
        height: { xs: '300px', sm: '380px' }
    };
    return (
        <Grid container sx={{ position: 'relative' }}>
            <Grid item xs={12} container mx={5}>
                {[20, 50, 90, 130, 170, 210, 250, 290].map((box, index) => (
                    <Grid
                        item
                        key={index}
                        sx={{
                            position: 'absolute',
                            background: '#0F0F0F',
                            width: { xs: '350px', sm: '420px' },
                            left: '16px',
                            height: { xs: `${4 * index}px`, sm: `${5 * index}px` },
                            top: { xs: `${box - 5 * index}px`, sm: `${box + 5 * index}px` },
                            backdropFilter: 'blur(15px)',

                            boxShadow: '5px 0px 27px -5px rgba(0, 0, 0, 0.3) ',
                            zIndex: 10
                        }}
                    ></Grid>
                ))}

                <Grid item className="shape" sx={stylesshape}>
                    <Box sx={{ position: 'absolute', zIndex: 11, width: { xs: '250px', sm: '350px' } }}>
                        <img width={'100%'} src={user} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProflePicture;
