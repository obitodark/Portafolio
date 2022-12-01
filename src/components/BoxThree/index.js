import { useLoader } from '@react-three/fiber';
import { MeshStandardMaterial, TextureLoader } from 'three';
import textureRock from '../../Images/rock.jpg';
const BoxThree = () => {
    const corloMap = useLoader(TextureLoader, textureRock);
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            {/* <meshNormalMaterial attach="material" /> */}
            <meshStandardMaterial map={corloMap} />
            {/* <meshLambertMaterial attach="material" color="#E7FE55" /> */}
        </mesh>
    );
};
export default BoxThree;
