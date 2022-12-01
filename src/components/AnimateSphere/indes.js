import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimateSphere = () => {
    return (
        <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial color="#FFD866" attach="material" distort={0.5} speed={2} roughness={0} />
        </Sphere>
    );
};
export default AnimateSphere;
// https://github.com/CesiumGS/gltf-pipeline
// https://github.com/pmndrs/gltfjsx
