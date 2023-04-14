import { Gltf, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeSpring() {
  const [model, setModel] = useState(null);
  const ref = useRef();
  const { scene } = useGLTF("/dog.glb");
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
    <group ref={ref} position={[0, 0, 0]} dispose={null}>
      <primitive position={[0, 0, 0]} object={scene}></primitive>
    </group>
  );
}
