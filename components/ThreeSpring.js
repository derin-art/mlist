import { Gltf } from "@react-three/drei";
import { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeSpring({
  modelPath,
  scale = 40,
  position = [0, 0, 0],
}) {
  const [model, setModel] = useState(null);
  const ref = useRef();
  useEffect(async () => {
    const loader = new GLTFLoader();
    loader.load("spring.glb", async (gltf) => {
      const node = await gltf.parser.getDependencies("node");
      console.log(node[0]);
      setModel(node[0]);
    });
  }, []);

  model && console.log("sdsdsd");

  return (
    <>
      {model && (
        <group ref={ref} position={[0, 0, 0]} dispose={null}>
          <primitive position={[0, 0, 0]} object={model}></primitive>
        </group>
      )}
    </>
  );
}
