import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { ViewPresentation, ViewProjects, ViewAbout, ViewSkill, ViewContact, ViewDetailProject } from '../../../components';
import { ViewModal } from '../../../components/common';
import { ContextProjects } from '../../../context/contextProjects';

function Home() {
    const { dataProject, isOpenModalDetailProject, closeModalDetailProject } = useContext(ContextProjects);
    return (
        <>
            <ViewModal open={isOpenModalDetailProject} isClose={closeModalDetailProject} title={''}>
                <ViewDetailProject dataProject={dataProject} />
            </ViewModal>
            <Grid container maxWidth={'100%'} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} mb={12} id="Home">
                    <ViewPresentation />
                </Grid>
                <Grid item xs={12} id="Skill">
                    <ViewSkill />
                </Grid>
                <Grid item xs={12}>
                    {/* <ViewStackCarrusuel /> */}
                    {/* <ViewParticles /> */}
                </Grid>

                <Grid item xs={12} mt={3} id="Projects">
                    <ViewProjects />
                </Grid>
                <Grid item xs={12} id="About">
                    <ViewAbout />
                </Grid>
                <Grid item xs={12} sm={10} lg={8} mt={5}>
                    <ViewContact />
                </Grid>
            </Grid>
        </>
    );
}
export default Home;
