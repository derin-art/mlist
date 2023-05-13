import * as THREE from "three";

import matcap1 from "../../public/matcaps/1.png";
import {
  Canvas,
  MeshProps,
  useFrame,
  useThree,
  useLoader,
} from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { OrbitControls, PerformanceMonitor } from "@react-three/drei";
import { motion } from "framer-motion-3d";

import {
  MeshMatcapMaterial,
  MeshPhongMaterial,
  SphereGeometry,
  TextureLoader,
} from "three";

// r150
THREE.ColorManagement.enabled = true;

interface ThreeCurveProps {
  beginAnimation: boolean;
}

const Controls = () => {
  const { camera } = useThree();
  useFrame(() => {
    camera.rotation.reorder("YXZ");
    camera.rotation.set((Math.PI / 180) * 10, 0, 0);
  });
  return <OrbitControls enabled={false}></OrbitControls>;
};

const Globe = (props: {
  position: [x: number, y: number, z: number];
  delay?: number;
  startAnimation: boolean;
  geom: any;
  mat: any;
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
      material={props.mat}
      geometry={props.geom}
      ref={ref}
      transition={{
        duration: 1.4,
        delay: props.delay,
        ease: [0.58, 0.28, 0.64, 0.75],
        repeat: Infinity,
      }}
      animate={
        props.startAnimation
          ? {
              x: [current.x, current.x * 0.8, current.x * 1.2, current.x],
              y: [current.y, current.y * 0.8, current.y * 1.2, current.y],
            }
          : { x: current.x, y: current.y }
      }
      position={props.position}
    >
      {/*    <sphereBufferGeometry args={[1, 20, 15]}></sphereBufferGeometry>
      <meshPhongMaterial
        transparent={true}
        shininess={100}
        emissive={"blue"}
        color={"blue"}
      ></meshPhongMaterial> */}
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
  geom: any;
  mat: any;
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
            geom={props.geom}
            mat={props.mat}
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
  geom: any;
  mat: any;
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
      props.startAnimation ? (ref.current.rotation.z += 0.01) : null;
    }
  });
  return (
    <group ref={ref}>
      {positions.map((item, index) => {
        return (
          <Globe
            geom={props.geom}
            mat={props.mat}
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
  const textureLoader = new THREE.TextureLoader();
  let Texture: THREE.Texture;
  textureLoader.load(matcap1.src, (texture) => {
    Texture = texture;
  });
  const [dpr, setDpr] = useState(1.5);
  /*  new MeshPhongMaterial({
        shininess: 25,
        emissive: "#1d4ed8",
        emissiveIntensity: 1,
        color: "#7e22ce",
      }), */

  const matCap = useLoader(TextureLoader, matcap1.src);

  matCap.minFilter = THREE.NearestFilter;
  matCap.magFilter = THREE.NearestFilter;
  matCap.generateMipmaps = false;

  const globeGeom = useMemo(() => new SphereGeometry(1.3, 17, 15), []);
  const globeMat = useMemo(
    () =>
      new MeshMatcapMaterial({
        matcap: matCap,
      }),
    []
  );
  return (
    <div className="w-full h-full bg-white   ">
      <Canvas
        camera={{
          position: [0, -3, 17],
        }}
        dpr={dpr}
      >
        <PerformanceMonitor
          onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor))}
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(0.8)}
        ></PerformanceMonitor>
        <Suspense fallback={null}>
          <Controls></Controls>

          <SpinningEllipseGroup
            geom={globeGeom}
            mat={globeMat}
            startAnimation={props.beginAnimation}
            radius={10}
          ></SpinningEllipseGroup>
          <DistortOrb></DistortOrb>
          <EllipseGroup
            geom={globeGeom}
            mat={globeMat}
            startAnimation={props.beginAnimation}
            delay={0.2}
            radius={12}
          ></EllipseGroup>

          <EllipseGroup
            geom={globeGeom}
            mat={globeMat}
            startAnimation={props.beginAnimation}
            delay={0.4}
            radius={14}
          ></EllipseGroup>

          <EllipseGroup
            geom={globeGeom}
            mat={globeMat}
            startAnimation={props.beginAnimation}
            delay={0.6}
            radius={16}
          ></EllipseGroup>
        </Suspense>
      </Canvas>
    </div>
  );
}
