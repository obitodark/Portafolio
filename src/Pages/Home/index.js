import React from 'react';
import { Grid } from '@mui/material';

import { ViewPresentation, ViewProjects, ViewAbout, ViewSkill } from '../../components';

// import ModelJbl from '../../components/ModelJbl';

// const canvas = {
//     height: '500px'
// };
function Home() {
    return (
        <div>
            <Grid container maxWidth={'100%'}>
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
                {/* <Grid item xs={12}>
                    <Canvas className="canvas" style={{ height: '500px' }}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2, 5, 5]} intesity={1} />
                        <Suspense fallback={null}>
                            <BoxThree />
                        </Suspense>
                    </Canvas>
                    <Canvas className="canvas" style={{ height: '500px' }}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2, 5, 5]} intesity={1} />
                        <Suspense fallback={null}>
                            <AnimateSphere />
                        </Suspense>
                    </Canvas>
                    <Canvas className="canvas" style={{ height: '500px' }}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2, 5, 5]} intesity={1} />
                        <Suspense fallback={null}>
                            <ModelJbl />
                        </Suspense>
                    </Canvas>
                </Grid> */}
                <Grid item xs={12} mt={3} id="Projects">
                    <ViewProjects />
                </Grid>
                <Grid item xs={12} id="About">
                    <ViewAbout />
                </Grid>
            </Grid>
        </div>
    );
}
export default Home;
