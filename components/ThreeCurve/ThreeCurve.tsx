import * as THREE from "three";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

interface ThreeCurveProps {
  beginAnimation: boolean;
}

const Controls = () => {
  const { camera } = useThree();
  camera.rotation.set(0, 0, (Math.PI / 180) * 90);
  return <OrbitControls></OrbitControls>;
};

const Globe = (props: {
  position: [x: number, y: number, z: number];
  delay?: number;
  startAnimation: boolean;
}) => {
  const [current, setCurrent] = useState({ x: 0, y: 0 });

  let currentX: number = 0;
  let currentY: number = 0;
  const ref = useRef<THREE.Mesh>(null!);
  useEffect(() => {
    if (ref.current) {
      setCurrent((prev) => ({
        x: ref.current.position.x,
        y: ref.current.position.y,
      }));
    }
  }, []);
  if (ref.current) {
    currentX = ref.current.position.x;
    currentY = ref.current.position.y;
  }
  return (
    <motion.mesh
      ref={ref}
      transition={{ duration: 1.3, repeat: Infinity, delay: props.delay }}
      animate={
        props.startAnimation && {
          x: [current.x, current.x * 0.8, current.x * 1.2, current.x],
          y: [current.y, current.y * 0.8, current.y * 1.2, current.y],
        }
      }
      position={props.position}
    >
      <sphereBufferGeometry args={[1, 20, 15]}></sphereBufferGeometry>
      <meshPhongMaterial
        transparent={true}
        shininess={100}
        emissive={"blue"}
        color={"blue"}
      ></meshPhongMaterial>
    </motion.mesh>
  );
};

const DistortOrb = () => {
  return (
    <mesh>
      <meshPhongMaterial
        transparent={true}
        shininess={100}
        color={"white"}
      ></meshPhongMaterial>
      <sphereBufferGeometry args={[4, 20, 15]}></sphereBufferGeometry>
    </mesh>
  );
};

const EllipseGroup = (props: {
  radius: number;
  delay?: number;
  startAnimation: boolean;
}) => {
  const positions = [];
  const curveEllispe = new THREE.EllipseCurve(
    0,
    0, // ax, aY
    props.radius,
    props.radius, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );

  for (let i = 0; i < 10; i++) {
    positions.push(curveEllispe.getPoint(i / 10));
  }

  return (
    <group>
      {positions.map((item, index) => {
        return (
          <Globe
            startAnimation={props.startAnimation}
            delay={props.delay}
            key={index}
            position={[item.x, item.y, 0]}
          ></Globe>
        );
      })}
    </group>
  );
};

export default function ThreeCurve(props: ThreeCurveProps) {
  return (
    <div className="w-full h-full bg-white   ">
      <Canvas
        camera={{
          position: [0, -3, 17],
        }}
      >
        <Suspense fallback={null}>
          <Controls></Controls>
          <pointLight position={[0, 0, 15]} intensity={1}></pointLight>
          <ambientLight intensity={0.4}></ambientLight>
          <EllipseGroup
            startAnimation={props.beginAnimation}
            radius={10}
          ></EllipseGroup>
          <DistortOrb></DistortOrb>
          <EllipseGroup
            startAnimation={props.beginAnimation}
            delay={0.2}
            radius={14}
          ></EllipseGroup>

          <EllipseGroup
            startAnimation={props.beginAnimation}
            delay={0.4}
            radius={16}
          ></EllipseGroup>

          <EllipseGroup
            startAnimation={props.beginAnimation}
            delay={0.6}
            radius={18}
          ></EllipseGroup>
        </Suspense>
      </Canvas>
    </div>
  );
}
