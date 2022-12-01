import React, { Suspense } from 'react';
import { Grid } from '@mui/material';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ViewPresentation, ViewProjects, ViewAbout, ViewSkill, ViewStackCarrusuel, ViewParticles } from '../../components';
import BoxThree from '../../components/BoxThree';
import AnimateSphere from '../../components/AnimateSphere/indes';
import ModelJbl from '../../components/ModelJbl/Jbl';

// import ModelJbl from '../../components/ModelJbl';

// const canvas = {
//     height: '500px'
// };
function Home() {
    return (
        <div>
            <Grid container maxWidth={'100%'}>
                <Grid item xs={12} mb={12}>
                    <ViewPresentation />
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12} mt={3}>
                    <ViewProjects />
                </Grid>
                <Grid item xs={12}>
                    {/* <ViewAbout /> */}
                </Grid>
            </Grid>
        </div>
    );
}
export default Home;
