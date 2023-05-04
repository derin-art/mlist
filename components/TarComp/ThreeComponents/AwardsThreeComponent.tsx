import { Suspense, useState, useRef, use, useEffect } from "react";
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

import "../../../node_modules/react-dat-gui/dist/index.css";
import DatGui, { DatNumber, DatBoolean, DatFolder } from "react-dat-gui";

const DatControls = (props: {
  setGroupProps: (newData: any) => void;
  otherData: any;
}) => {
  const [data, setData] = useState({ ...props.otherData });

  const handleUpdates = (newData: any) => {
    setData((prev: any) => {
      props.setGroupProps(newData);
      return { ...prev, ...newData };
    });
  };

  return (
    <DatGui onUpdate={handleUpdates} style={{ zIndex: 9999 }} data={data}>
      <DatFolder
        children={[
          <DatNumber
            path="power"
            label="Power"
            min={9000}
            max={9999}
            step={1}
            key={1}
          />,
          <DatNumber
            path="x"
            max={40}
            min={-40}
            step={0.01}
            label="X-placement"
            key={2}
          ></DatNumber>,
          <DatNumber
            path="y"
            max={40}
            min={-40}
            step={0.01}
            label="Y-placement"
            key={3}
          ></DatNumber>,
          <DatNumber
            path="z"
            max={40}
            min={-40}
            step={0.01}
            label="Z-placement"
            key={4}
          ></DatNumber>,
          <DatNumber
            path="rotateX"
            max={Math.PI}
            min={0}
            step={0.01}
            label="X-rotation"
            key={5}
          ></DatNumber>,
          <DatNumber
            path="rotateY"
            max={Math.PI}
            min={0}
            step={0.01}
            label="Y-rotation"
            key={6}
          ></DatNumber>,
          <DatBoolean key={7} path="beginAnim"></DatBoolean>,
        ]}
        title="CurveGroup"
        closed={false}
      ></DatFolder>
      <DatFolder
        closed={false}
        title="sdsd"
        children={[
          <DatNumber
            path="lightX"
            max={40}
            min={-40}
            step={0.001}
            label="lightX"
            key={1}
          ></DatNumber>,
          <DatNumber
            path="lightY"
            max={40}
            min={-40}
            step={0.001}
            label="lightY"
            key={2}
          ></DatNumber>,
          <DatNumber
            path="lightZ"
            max={40}
            min={-40}
            step={0.001}
            label="lightZ"
            key={3}
          ></DatNumber>,
          <DatNumber
            path="lightRX"
            max={Math.PI}
            min={0}
            step={0.01}
            label="lightRX"
            key={4}
          ></DatNumber>,
          <DatNumber
            path="lightRY"
            max={Math.PI}
            min={0}
            step={0.01}
            label="lightRY"
            key={5}
          ></DatNumber>,
          <DatNumber
            path="lightRZ"
            max={Math.PI}
            min={0}
            step={0.01}
            label="lightRZ"
            key={6}
          ></DatNumber>,
          <DatNumber
            path="lightIntensity"
            max={20}
            min={0}
            step={0.01}
            label="lightIntensity"
            key={7}
          ></DatNumber>,
        ]}
      ></DatFolder>
    </DatGui>
  );
};

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
      transition={{ duration: 0.7, delay: 0.5 }}
      initial={{
        x: 0,
        y: props.firstY,
      }}
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
      <meshPhongMaterial
        transparent={true}
        shininess={3}
        reflectivity={0.4}
        emissive={"black"}
        color={"blue"}
        specular={"blue"}
      ></meshPhongMaterial>
      <sphereBufferGeometry args={[size, 20, 20]}></sphereBufferGeometry>
    </motion.mesh>
  );
};

function SLight(props: {
  animation?: TargetAndTransition;
  position?: [x: number, y: number, z: number];
  color?: string;
  intensity?: number;
  rotation: [x: number, y: number, z: number];
  frameRotationX?: number;
  frameRotationY?: number;
  delay: number;
  speed: number;
  startAnim: boolean;
}) {
  const [startFrame, setStartFrame] = useState(false);
  const light: any = useRef<Object3D>();
  /*   useHelper(light, THREE.SpotLightHelper); */
  let posX = 0;
  let posY = 0;
  const start = () => {
    if (props.startAnim) {
      return light.current && startFrame;
    } else return false;
  };
  useFrame(({ clock }) => {
    if (light.current && startFrame) {
      light.current.position.x = props.frameRotationX
        ? Math.sin(clock.elapsedTime * props.speed) * props.frameRotationX
        : (Math.sin(clock.elapsedTime * props.speed) * Math.PI) / 2;
      light.current.position.y = props.frameRotationY
        ? Math.cos(clock.elapsedTime) * props.frameRotationY
        : (Math.cos(clock.elapsedTime) * Math.PI) / 2;
    }
  });
  setTimeout(() => setStartFrame(true), props.delay);

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
      color={props.color ? props.color : "red"}
      intensity={props.intensity ? props.intensity : 2}
      position={props.position ? props.position : [0, 0, 1]}
      angle={Math.PI / 10}
      penumbra={0.2}
      shadow-mapSize-width={24}
      shadow-mapSize-height={24}
      castShadow
      shadow-bias={-0.001}
    />
  );
}

function DLights(props: {
  animation?: TargetAndTransition;
  position?: [x: number, y: number, z: number];
  color?: string;
  intensity?: number;
  rotation: [x: number, y: number, z: number];
}) {
  const light: any = useRef<Object3D>();
  useHelper(light, THREE.DirectionalLightHelper);
  return (
    <motion.directionalLight
      rotation={[props.rotation[0], props.rotation[1], props.rotation[2]]}
      ref={light}
      color={props.color ? props.color : "red"}
      intensity={props.intensity ? props.intensity : 2}
      position={props.position ? props.position : [0, 0, 1]}
      shadow-mapSize-width={64}
      shadow-mapSize-height={64}
      castShadow
      shadow-bias={-0.001}
    />
  );
}

const Curve = (props: { rotate?: boolean; beginAnim: boolean }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
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
  const positions: THREE.Vec2[] = [];
  for (let i = 0; i < 10; i++) {
    positions.push(curve1.getPoint(i / 10));
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
      onClick={() => {
        setIsMouseOver((prev) => !prev);
      }}
      animate={
        props.beginAnim
          ? { rotateZ: [(Math.PI / 180) * -60, 0] }
          : { rotateZ: (Math.PI / 180) * -60 }
      }
    >
      {positions.map((item, index) => {
        return (
          <Globe
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

const AwardsObjectGroup = (props: { groupProp: any }) => {
  const [beginInfiniteAnim, setBeginInfiniteAnim] = useState(false);
  const ref: any = useRef<GroupProps>(null);

  /*   useFrame(({ clock }) => {
    if (ref.current && beginInfiniteAnim) {
      ref.current.rotation.y = clock.elapsedTime * 2;
    }
  }); */

  return (
    <motion.group
      ref={ref}
      transition={{ duration: 1.5 }}
      animate={
        props.groupProp.beginAnim
          ? { rotateY: [0, Math.PI * 4] }
          : { rotateY: 0 }
      }
      onAnimationComplete={() => {
        setBeginInfiniteAnim(true);
        console.log("completed");
      }}
      rotation={[props.groupProp.rotateX, props.groupProp.rotateY, 0]}
      position={[props.groupProp.x, 3.07, -25.88]}
    >
      <Curve beginAnim={props.groupProp.beginAnim}></Curve>
      <CenterOrb></CenterOrb>
      <ambientLight position={[0, -4, 0]} intensity={0.1}></ambientLight>
      <OrbitControls></OrbitControls>
      <Curve beginAnim={props.groupProp.beginAnim} rotate={true}></Curve>
    </motion.group>
  );
};

type AwardsThreeComponentProps = {
  startAnim: boolean;
};

export default function AwardsThreeComponent(props: AwardsThreeComponentProps) {
  const [groupProp, setGroupProp] = useState({
    x: 0,
    y: 0,
    z: 0,
    power: 0,
    rotateX: 0,
    rotateY: 0,
    beginAnim: false,
    lightX: 0,
    lightY: 0,
    lightZ: 20.6,
    lightRX: 0,
    lightRY: 0,
    lightRZ: 0,
    lightIntensity: 3,
  });

  const [dpr, setDpr] = useState(1.5);

  const {
    power,
    rotateX,
    rotateY,
    beginAnim,
    lightX,
    lightY,
    lightZ,
    lightRX,
    lightRY,
    lightRZ,
    lightIntensity,
  } = groupProp;

  const handleOnChange = (newData: any) => {
    setGroupProp((prev) => {
      return { ...prev, ...newData };
    });
  };

  return (
    <>
      <DatControls
        setGroupProps={handleOnChange}
        otherData={setGroupProp}
      ></DatControls>
      <m.div
        onViewportEnter={() => {
          setGroupProp((prev) => {
            return { ...prev, beginAnim: true };
          });
        }}
        className="w-[40vw] h-[30vw] gridBg rounded-3xl bg-black z-0 overflow-hidden border-2"
      >
        <Canvas dpr={dpr}>
          <Suspense fallback={null}>
            <PerformanceMonitor
              onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor))}
              onIncline={() => setDpr(2)}
              onDecline={() => setDpr(0.8)}
            ></PerformanceMonitor>
            <ambientLight></ambientLight>
            {/*   <directionalLight
              position={[0, 0, 4]}
              intensity={3}
            ></directionalLight> */}
            <mesh position={[0, 0, -48]}>
              <planeBufferGeometry args={[130, 130]}></planeBufferGeometry>
              <meshPhysicalMaterial color={"black"}></meshPhysicalMaterial>
            </mesh>
            {/*   <DLights
              intensity={groupProp.lightIntensity}
              rotation={[lightRX, lightRY, lightRZ]}
              position={[lightX, lightY, lightZ]}
            ></DLights> */}
            <SLight
              startAnim={props.startAnim}
              speed={-0.7}
              delay={640}
              frameRotationX={Math.PI * 15}
              frameRotationY={Math.PI * 2}
              intensity={groupProp.lightIntensity}
              rotation={[lightRX, lightRY, lightRZ]}
              position={[lightX, lightY, lightZ]}
              color="white"
            ></SLight>
            <SLight
              startAnim={props.startAnim}
              speed={1.7}
              delay={0}
              frameRotationX={Math.PI * 25}
              frameRotationY={Math.PI * 10}
              intensity={groupProp.lightIntensity}
              rotation={[lightRX, lightRY, lightRZ]}
              position={[40, -100, lightZ]}
              color="white"
            ></SLight>
            <SLight
              startAnim={props.startAnim}
              speed={1.2}
              delay={1000}
              frameRotationX={Math.PI * 12}
              frameRotationY={Math.PI * 20}
              intensity={groupProp.lightIntensity}
              rotation={[lightRX, lightRY, lightRZ]}
              position={[40, 100, lightZ]}
              color="white"
            ></SLight>
            <AwardsObjectGroup groupProp={groupProp}></AwardsObjectGroup>
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
