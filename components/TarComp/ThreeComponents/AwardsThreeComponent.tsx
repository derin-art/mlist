import { Suspense, useState, useRef, use, useEffect, useMemo } from "react";
import { Object3D } from "three";
import { Canvas, GroupProps, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  OrbitControls,
  useHelper,
  PerformanceMonitor,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { motion as m } from "framer-motion";
import { TargetAndTransition } from "framer-motion";

// r150
THREE.ColorManagement.enabled = true;

const CenterOrb = () => {
  return (
    <mesh position={[0, -16, 0]}>
      <meshBasicMaterial transparent={true} color={"white"}></meshBasicMaterial>
      <sphereBufferGeometry args={[2, 20, 15]}></sphereBufferGeometry>
    </mesh>
  );
};

const Globe = (props: {
  position: [x: number, y: number, z: number];
  size: number;
  anims: TargetAndTransition;
  index: number;
  firstY: number;
  beginAnim: boolean;
  mat: THREE.Material;
}) => {
  const size = 0.6 + props.size * 0.4;
  const animationBegin = () => {
    if (props.beginAnim) {
      return props.index !== 0;
    } else {
      return false;
    }
  };

  return (
    <motion.mesh
      material={props.mat}
      transition={{ duration: 0.7, delay: 0.5 }}
      initial={{
        x: 0,
        y: props.firstY,
      }}
      scale={size}
      animate={
        animationBegin()
          ? {
              x: [0, props.position[0]],
              y: [props.firstY, props.position[1]],
            }
          : { x: 0, y: props.firstY }
      }
      position={props.position}
    >
      {/*      <meshPhongMaterial
        transparent={true}
        shininess={3}
        reflectivity={0.4}
        emissive={"black"}
        color={"blue"}
        specular={"blue"}
      ></meshPhongMaterial> */}
      <sphereBufferGeometry args={[0.7, 20, 20]}></sphereBufferGeometry>
    </motion.mesh>
  );
};

function SLight(props: {
  animation?: TargetAndTransition;
  position?: [x: number, y: number, z: number];
  color?: string;
  rotation: [x: number, y: number, z: number];
  frameRotationX?: number;
  frameRotationY?: number;
  delay: number;
  speed: number;
  startAnim: boolean;
}) {
  const light: any = useRef<Object3D>();
  /*   useHelper(light, THREE.SpotLightHelper); */
  let posX = 0;
  let posY = 0;

  useFrame(({ clock }) => {
    if (light.current) {
      light.current.position.x = props.frameRotationX
        ? Math.sin(clock.elapsedTime * props.speed) * props.frameRotationX
        : (Math.sin(clock.elapsedTime * props.speed) * Math.PI) / 2;
      light.current.position.y = props.frameRotationY
        ? Math.cos(clock.elapsedTime) * props.frameRotationY
        : (Math.cos(clock.elapsedTime) * Math.PI) / 2;
    }
  });

  useEffect(() => {
    if (light.current) {
      posX = light.current.position.x;
      posY = light.current.position.y;
    }
  }, []);

  return (
    <motion.spotLight
      rotation={[props.rotation[0], props.rotation[1], props.rotation[2]]}
      ref={light}
      intensity={2.5}
      position={[0, 0, 27.5]}
      angle={Math.PI / 10}
      penumbra={0.2}
      /*  shadow-mapSize-width={24}
      shadow-mapSize-height={24} */
      castShadow
      shadow-bias={-0.001}
    />
  );
}

const Curve = (props: {
  rotate?: boolean;
  beginAnim: boolean;
  mat: THREE.Material;
  curve1: THREE.EllipseCurve;
}) => {
  const positions: THREE.Vec2[] = [];
  for (let i = 0; i < 10; i++) {
    positions.push(props.curve1.getPoint(i / 10));
  }
  const animations: TargetAndTransition[] = [];
  positions.forEach((item: any, index) => {
    const offset = 8;
    const otherOff = 6;
    animations.push({
      x: [
        Math.abs(item.x - offset),
        Math.abs(item.x - otherOff),
        item.x,
        Math.abs(item.x - otherOff),
        Math.abs(item.x - offset),
      ],
      y: [
        item.y - 3 * index * 0.5,
        item.y,
        item.y,
        item.y,
        item.y - 3 * index * 0.5,
      ],
    });
  });

  return (
    <motion.group
      initial={
        props.rotate
          ? {
              rotateY: (Math.PI / 180) * 180,
              x: -7,
              rotateZ: (Math.PI / 180) * -60,
            }
          : { x: 7, rotateZ: (Math.PI / 180) * -60 }
      }
      transition={{ duration: 0.6, delay: 0.5 }}
      animate={
        props.beginAnim
          ? { rotateZ: [(Math.PI / 180) * -60, 0] }
          : { rotateZ: (Math.PI / 180) * -60 }
      }
    >
      {positions.map((item, index) => {
        return (
          <Globe
            mat={props.mat}
            firstY={positions[0].y}
            index={index}
            beginAnim={props.beginAnim}
            anims={animations[index]}
            size={Math.abs(index - 10)}
            key={index}
            position={[item.x, item.y, 0]}
          ></Globe>
        );
      })}
    </motion.group>
  );
};

const AwardsObjectGroup = (props: { groupProp: any; mat: THREE.Material }) => {
  const ref: any = useRef<GroupProps>(null);
  const curve1 = useMemo(
    () =>
      new THREE.EllipseCurve(
        0,
        0, // ax, aY
        14,
        16, // xRadius, yRadius
        (Math.PI / 180) * 270,
        (Math.PI / 180) * 70, // aStartAngle, aEndAngle
        false, // aClockwise
        0 // aRotation
      ),
    []
  );

  return (
    <motion.group
      ref={ref}
      transition={{ duration: 1.5 }}
      animate={
        props.groupProp.beginAnim
          ? { rotateY: [0, Math.PI * 4] }
          : { rotateY: 0 }
      }
      rotation={[0, 0, 0]}
      position={[0, 3.07, -25.88]}
    >
      <Curve
        curve1={curve1}
        mat={props.mat}
        beginAnim={props.groupProp.beginAnim}
      ></Curve>
      <CenterOrb></CenterOrb>
      <ambientLight position={[0, -4, 0]} intensity={0.1}></ambientLight>

      <Curve
        curve1={curve1}
        mat={props.mat}
        beginAnim={props.groupProp.beginAnim}
        rotate={true}
      ></Curve>
    </motion.group>
  );
};

type AwardsThreeComponentProps = {
  startAnim: boolean;
};

export default function AwardsThreeComponent(props: AwardsThreeComponentProps) {
  const [groupProp, setGroupProp] = useState({
    beginAnim: false,

    lightZ: 20.6,

    lightIntensity: 2.5,
  });

  const [dpr, setDpr] = useState(1);

  const globeMat = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        shininess: 3,
        emissive: "black",

        emissiveIntensity: 1,
        specular: "blue",

        color: "blue",
      }),
    []
  );

  /*  <meshPhongMaterial
      transparent={true}
      shininess={3}
      reflectivity={0.4}
      emissive={"black"}
      color={"blue"}
      specular={"blue"}
    ></meshPhongMaterial>; */

  return (
    <>
      <m.div
        onViewportEnter={() => {
          setGroupProp((prev) => {
            return { ...prev, beginAnim: true };
          });
        }}
        className="w-1/2  h-[40vw] bg-black z-0 overflow-hidden "
      >
        <Canvas dpr={dpr}>
          <Suspense fallback={null}>
            <PerformanceMonitor
              onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor))}
              onIncline={() => setDpr(1.5)}
              onDecline={() => setDpr(0.3)}
            ></PerformanceMonitor>
            <group position={[0, 0, -2]}>
              {" "}
              <ambientLight></ambientLight>
              <SLight
                startAnim={props.startAnim}
                speed={-0.7}
                delay={640}
                frameRotationX={3.142 * 3.5}
                frameRotationY={3.142 * 0.5}
                rotation={[0, 0, 0]}
                position={[0, 0, groupProp.lightZ]}
                color="white"
              ></SLight>
              <SLight
                startAnim={props.startAnim}
                speed={1.7}
                delay={0}
                frameRotationX={3.142 * 6}
                frameRotationY={3.142 * 2.5}
                rotation={[0, 0, 0]}
                position={[40, -100, groupProp.lightZ]}
                color="white"
              ></SLight>
              <SLight
                startAnim={props.startAnim}
                speed={1.2}
                delay={1000}
                frameRotationX={3.142 * 3}
                frameRotationY={3.142 * 2.5}
                rotation={[0, 0, 0]}
                position={[40, 100, groupProp.lightZ]}
                color="white"
              ></SLight>
              <AwardsObjectGroup
                mat={globeMat}
                groupProp={groupProp}
              ></AwardsObjectGroup>
            </group>
          </Suspense>
        </Canvas>
      </m.div>
    </>
  );
}

/*  animate={
        props.animation
          ? props.animation
          : {
              x: [-4, 5, -4],
              transition: { duration: 10, repeat: Infinity, delay: 4 },
            }
      } */
