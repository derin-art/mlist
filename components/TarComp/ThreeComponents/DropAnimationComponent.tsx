import { Gltf, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function DropAnimationComponent() {
  const [model, setModel] = useState(null);
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/firstRigid.glb");
  /*   useEffect(async () => {
    const loader = new GLTFLoader();
    loader.load("spring.glb", async (gltf) => {
      const node = await gltf.parser.getDependencies("node");
      console.log(node[0]);
      setModel(node[0]);
    });
  }, []);
 */

  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <group
          scale={[10, 10, 10]}
          ref={ref}
          position={[0, 0, -2]}
          dispose={null}
        >
          <OrbitControls></OrbitControls>
          <directionalLight
            intensity={30}
            position={[0, 0, 3]}
          ></directionalLight>
          <primitive position={[0, 0, 0]} object={scene}></primitive>
        </group>
      </Canvas>
    </div>
  );
}