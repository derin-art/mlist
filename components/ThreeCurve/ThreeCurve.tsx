import * as THREE from "three";
import ThreeSpring from "../ThreeSpring";

import { Canvas, MeshProps, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

interface ThreeCurveProps {
  beginAnimation: boolean;
}

const Controls = () => {
  const { camera } = useThree();
  useFrame(() => {
    camera.rotation.reorder("YXZ");
    camera.rotation.set((Math.PI / 180) * 10, 0, 0);
  });
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
  const ref: any = useRef<MeshProps>(null!);
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
      transition={{
        duration: 1.4,
        delay: props.delay,
        ease: [0.58, 0.28, 0.64, 0.75],
        repeat: Infinity,
      }}
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
      <meshPhysicalMaterial
        metalness={1}
        clearcoat={1}
        roughness={0.4}
        color={"white"}
      ></meshPhysicalMaterial>
      <sphereBufferGeometry args={[4, 30, 30]}></sphereBufferGeometry>
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

const SpinningEllipseGroup = (props: {
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
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01;
    }
  });
  return (
    <group ref={ref}>
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

          <SpinningEllipseGroup
            startAnimation={props.beginAnimation}
            radius={10}
          ></SpinningEllipseGroup>
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
