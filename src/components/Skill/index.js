import { styled, useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Slider, Avatar } from '@mui/material';

// import DataSkill from './data';

import { useContext } from 'react';
import { ContextSkill } from '../../context/ContextSkill';

const Skill = () => {
    const theme = useTheme();
    const { dataSkills } = useContext(ContextSkill);
    // const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

    const StyleItemBox = {
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden',

        background: `${theme.palette.mode === 'dark' ? '#1C1C1C' : 'transparent'}`
    };
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container>
                    <Typography variant="h4"> My Skill</Typography>
                </Grid>
                <Grid container mt={2}>
                    <Grid item container xs={12} p={2} mt={3} sx={StyleItemBox}>
                        <div className="point-degraded"></div>
                        <div className="point-degraded2"></div>
                        {console.log('data_skils', dataSkills)}
                        <Grid item container spacing={2} justifyContent="center" p={2}>
                            {dataSkills.length > 0 &&
                                dataSkills.map((data, index) => (
                                    <Grid
                                        key={index}
                                        container
                                        item
                                        p={2}
                                        xs={12}
                                        sm={5}
                                        md={3}
                                        lg={2.4}
                                        xl={2}
                                        display="flex"
                                        sx={{
                                            background: `${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)'}`,
                                            borderRadius: '10px',
                                            margin: '5px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            zIndex: 2,
                                            border: '1px solid transparent',
                                            backdropFilter: 'blur(50px)',
                                            '&:hover': {
                                                border: '1px solid #3333FF'
                                            }
                                        }}
                                    >
                                       
                                            <Grid item > 
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={data.url_image}
                                                    sx={{ width: { xs: '30px', sm: '50px' }, height: { xs: '30px', sm: '50px' } }}
                                                    variant="rounded"
                                                />
                                             </Grid> 
                                            <Grid item >
                                                <Typography
                                                    variant="body1"
                                                    color={`${theme.palette.mode === 'dark' ? 'white' : 'black'}`}
                                                    display={'inline'}
                                                    mx={2}
                                                >
                                                    {data.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" mx={2}>
                                                    {data.description}
                                                </Typography>
                                            </Grid>
                                    
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Skill;
