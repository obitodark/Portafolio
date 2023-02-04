import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import user from '../../Images/avatar.png';

const ProflePicture = () => {
    const theme = useTheme();
    const stylesshape = {
        width: { xs: '300px', sm: '370px' },
        height: { xs: '300px', sm: '370px' }
    };
    return (
        <Grid container sx={{ position: 'relative', overflow: 'hidden' }}>
            <Grid
                item
                xs={12}
                container
                sx={{
                    // border: 'solid blue 1px',
                    width: { xs: '320px', sm: '420px' },
                    height: { xs: '320px', sm: '420px' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {[20, 50, 90, 130, 170, 210, 250, 290].map((box, index) => (
                    <Grid
                        item
                        key={index}
                        sx={{
                            position: 'absolute',
                            background: `${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : '#0F0F0F'}`,
                            width: { xs: '320px', sm: '420px' },
                            left: { xs: '0px', sm: '0px' },
                            height: { xs: `${4 * index}px`, sm: `${5 * index}px` },
                            top: { xs: `${box - 5 * index}px`, sm: `${box + 5 * index}px` },
                            backdropFilter: 'blur(20px)',

                            boxShadow: '5px 0px 27px -5px rgba(0, 0, 0, 0.3) ',
                            zIndex: 1
                        }}
                    ></Grid>
                ))}

                <Grid
                    item
                    className="shape "
                    sx={{ ...stylesshape, background: `${theme.palette.mode === 'dark' ? '#E7FE55' : '#00EDB2'}` }}
                ></Grid>
                <Box sx={{ position: 'absolute', width: { xs: '250px', sm: '350px', zIndex: 5 } }}>
                    <img draggable="false" width={'100%'} src={user} alt="" />
                </Box>
            </Grid>
        </Grid>
    );
};

export default ProflePicture;
