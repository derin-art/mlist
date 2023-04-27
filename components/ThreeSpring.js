import { Gltf, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeSpring() {
  const [model, setModel] = useState(null);
  const ref = useRef();
  const { scene } = useGLTF("/tar.glb")
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
    <group scale={[10, 10, 10]} ref={ref} position={[0, 0, -2]} dispose={null}>
      <OrbitControls></OrbitControls>
      <directionalLight intensity={30} position={[0, 0, 3]}></directionalLight>
      <primitive position={[0, 0, 0]} object={scene}></primitive>
    </group>
  );
}
