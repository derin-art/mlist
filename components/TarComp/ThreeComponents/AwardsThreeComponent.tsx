import { Suspense } from "react";
import { Scene } from "three";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Edges, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const CenterOrb = () => {
  return (
    <mesh position={[0, -16, 0]}>
      <meshPhongMaterial
        transparent={true}
        shininess={100}
        color={"white"}
      ></meshPhongMaterial>
      <sphereBufferGeometry args={[2, 20, 15]}></sphereBufferGeometry>
    </mesh>
  );
};

const Globe = (props: {
  position: [x: number, y: number, z: number];
  size: number;
}) => {
  const size = 0.6 + props.size * 0.29;
  return (
    <motion.mesh
      transition={{ duration: 3, repeat: Infinity }}
      animate={{
        x: [0, props.position[0], 0],
        y: [0, props.position[1], 0],
      }}
      position={props.position}
    >
      <meshPhongMaterial
        transparent={true}
        shininess={100}
        emissive={"blue"}
        color={"blue"}
      ></meshPhongMaterial>
      <sphereBufferGeometry args={[size, 16, 16]}></sphereBufferGeometry>
    </motion.mesh>
  );
};

const Curve = (props: { rotate?: boolean }) => {
  const point1 = new THREE.Vector2(0, 0);
  const point2 = new THREE.Vector2(0.95, 0.14);
  const point3 = new THREE.Vector2(0.91, 0.44);
  const point4 = new THREE.Vector2(1, 0.51);
  const curve1 = new THREE.EllipseCurve(
    0,
    0, // ax, aY
    14,
    16, // xRadius, yRadius
    (Math.PI / 180) * 270,
    (Math.PI / 180) * 70, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );
  const curve = new THREE.CubicBezierCurve(point1, point2, point3, point4);
  const lineCurve = new THREE.LineCurve(
    new THREE.Vector2(-0.7, 1),
    new THREE.Vector2(1.3, -0.5)
  );
  const positions = [];
  for (let i = 0; i < 10; i++) {
    positions.push(curve1.getPoint(i / 10));
  }
  return (
    <motion.group
      animate={
        props.rotate ? { rotateY: (Math.PI / 180) * 180, x: -6 } : { x: 6 }
      }
    >
      {positions.map((item, index) => {
        return (
          <Globe
            size={Math.abs(index - 10)}
            key={index}
            position={[item.x, item.y, 0]}
          ></Globe>
        );
      })}
    </motion.group>
  );
};

export default function AwardsThreeComponent() {
  return (
    <div className="w-full h-screen bg-white">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls></OrbitControls>
          <directionalLight></directionalLight>
          <Curve></Curve>
          <CenterOrb></CenterOrb>
          <Curve rotate={true}></Curve>
        </Suspense>
      </Canvas>
    </div>
  );
}
