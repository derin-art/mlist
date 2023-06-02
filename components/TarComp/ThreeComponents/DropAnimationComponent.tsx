import { Gltf, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function DropAnimationComponent() {
  const [model, setModel] = useState(null);
  const ref = useRef<THREE.Group>(null);
  const main = useGLTF("/Fidget.glb");
  console.log(main);
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
    <div className="w-full h-screen bg-white">
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
      
          <primitive   position={[0, 0, 0]} object={main.scene}>
            <meshStandardMaterial color={"red"}></meshStandardMaterial>
          </primitive>
        </group>
      </Canvas>
    </div>
  );
}
