import { Edges, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const types = {
  boolean: "bool",
  range: "range",
  color: "color",
};

const Materials = new THREE.MeshLambertMaterial({});

const Toon = {
  color: types.color,
  emissive: types.color,
  emissiveIntensity: types.range,
  transparent: types.boolean,
  opacity: types.range,
  wireFrame: types.boolean,
  vertexColor: types.color,
};

const Basic = {
  ...Toon,
};

const Depth = {
  ...Toon,
};

const Cube = (props: {
  color: string;
  x: number;
  rotate: { x: number; y: number };
  index: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current && props.index === 0) {
      ref.current.rotation.y = (Math.PI / 2) * props.rotate.x * 4;
      ref.current.rotation.x = (Math.PI / 2) * props.rotate.y * 4;
    }
  });
  return (
    <mesh ref={ref} position={[props.x, 0, 0]}>
      <boxBufferGeometry args={[1, 1, 1]}></boxBufferGeometry>
      <Edges></Edges>
      <meshBasicMaterial color={props.color}></meshBasicMaterial>
    </mesh>
  );
};

export default function DragTest() {
  const cubesArray = [{ color: "red" }, { color: "green" }];
  const [mousePositions, setMousePositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const dragFunction = (e: DragEvent) => {
      const screen = { x: window.screen.width, y: window.screen.height };

      const finalX = e.clientX / screen.x - 0.5;
      const finalY = e.clientY / screen.y - 0.5;
      setMousePositions((prev) => {
        console.log(finalX, finalY);
        return { x: -finalX, y: -finalY };
      });
    };
    addEventListener("dragover", dragFunction);

    return () => removeEventListener("dragover", dragFunction);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div draggable={true} className="a w-full h-screen z-40"></div>
      <Canvas
        style={{ border: "2px red solid" }}
        draggable={true}
        camera={{ position: [0, 0, 3] }}
      >
        {cubesArray.map((item, index) => {
          return (
            <Cube
              index={index}
              rotate={{ x: mousePositions.x, y: mousePositions.y }}
              color={item.color}
              x={index * 2}
              key={index}
            ></Cube>
          );
        })}
      </Canvas>
    </div>
  );
}
