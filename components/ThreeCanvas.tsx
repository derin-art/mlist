import * as THREE from "three";
import dynamic from "next/dynamic";
import {
  Canvas,
  PointLightProps,
  SpotLightProps,
  useFrame,
} from "@react-three/fiber";
const ThreeSpring = dynamic(() => import("./ThreeSpring"));
import { Suspense, useEffect, useRef } from "react";
import { Edges, OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { SpotLightHelper } from "three";
import {
  TargetAndTransition,
  motion as m,
  AnimatePresence,
} from "framer-motion";

interface ObjectProps {
  isHovered: boolean;
}

const FirstCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  cubeRef.current && cubeRef.current.rotation.reorder("YXZ");
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.015;
      cubeRef.current.rotation.x += 0.03;
    }
  });

  const material1 = new THREE.MeshPhysicalMaterial({
    roughness: 0.1,
    clearcoat: 0.2,
    color: "#0000ff",
    transmission: 0.1,
    thickness: 4,
  });
  return (
    <mesh material={material1} ref={cubeRef} position={[3, 3, 0]}>
      <Edges></Edges>
      {/* 
      <meshBasicMaterial color={"#0000ff"}></meshBasicMaterial> */}
      <boxBufferGeometry args={[0.8, 1.2, 1]}></boxBufferGeometry>
    </mesh>
  );
};

const SecondCube = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.03;
      ref.current.rotation.z += 0.02;
    }
  });

  const material1 = new THREE.MeshPhysicalMaterial({
    roughness: 0.1,
    clearcoat: 0.6,
    color: "white",
    transmission: 0.5,
    thickness: 4,
  });

  return (
    <mesh position={[0, -2, 0]} ref={ref}>
      <Edges></Edges>

      <meshBasicMaterial color={"#00ff00"}></meshBasicMaterial>
      <coneBufferGeometry args={[0.5, 1, 10]}></coneBufferGeometry>
    </mesh>
  );
};

const Torus = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.04;
      torusRef.current.rotation.y += 0.02;
    }
  });

  const material1 = new THREE.MeshPhysicalMaterial({
    roughness: 0.1,
    clearcoat: 0.6,
    color: "white",
    transmission: 0.5,
    thickness: 4,
  });
  return (
    <motion.mesh
      animate={{ x: [-2, 3, -2], y: 3 }}
      transition={{ duration: 10, delay: 1 }}
      initial={{ scale: 1, x: -2, y: 4, z: 0 }}
      material={material1}
      ref={torusRef}
      position={[-2, 4, 0]}
    >
      <torusBufferGeometry args={[0.7, 0.4, 20]}></torusBufferGeometry>
    </motion.mesh>
  );
};

const PillPlane = (props: { pillRef: any }) => {
  let x = 1;
  let y = 1;
  let width = 12.4;
  let height = 2.3;
  let radius = 1.3;

  let shape = new THREE.Shape();
  shape.moveTo(x, y + radius);
  shape.lineTo(x, y + height - radius);
  shape.quadraticCurveTo(x, y + height, x + radius, y + height);
  shape.lineTo(x + width - radius, y + height);
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  shape.lineTo(x + width, y + radius);
  shape.quadraticCurveTo(x + width, y, x + width - radius, y);
  shape.lineTo(x + radius, y);
  shape.quadraticCurveTo(x, y, x, y + radius);

  let geometry = new THREE.ShapeGeometry(shape);

  const material1 = new THREE.MeshPhysicalMaterial({
    roughness: 0.1,
    clearcoat: 0.5,
    color: "#1d4ed8",
    transmission: 0.1,
    thickness: 4,
  });

  return (
    <mesh geometry={geometry} position={[-7.2, -2.12, 0]} ref={props.pillRef}>
      <meshPhongMaterial reflectivity={1} color={"#1d4ed8"}></meshPhongMaterial>
    </mesh>
  );
};

const SpinningLight = () => {
  const ref = useRef(null);

  return (
    <motion.pointLight
      position={[0, 0, 2]}
      initial={{ x: -7 }}
      animate={{ x: [-7, 6, -7] }}
      transition={{ duration: 3, repeat: Infinity, type: "spring" }}
      intensity={5}
      color={"red"}
    ></motion.pointLight>
  );
};

const SpinningLightRed = () => {
  const ref = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.z = Math.sin(clock.elapsedTime) * 4;

      ref.current.position.y = Math.sin(clock.elapsedTime) * 4;
    }
  });
  return (
    <motion.pointLight
      position={[0, 0, 2]}
      intensity={1}
      color={"red"}
    ></motion.pointLight>
  );
};

function Lights() {
  const light = useRef();
  useHelper(light, THREE.SpotLightHelper, "cyan");
  return (
    <motion.spotLight
      animate={{ x: [-4, 5, -4] }}
      transition={{ duration: 2, repeat: Infinity }}
      ref={light}
      intensity={0.2}
      position={[0, 0, 5]}
      shadow-mapSize-width={64}
      shadow-mapSize-height={64}
      angle={0.3}
      penumbra={0.4}
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
}) {
  const light = useRef();
  /*  useHelper(light, THREE.DirectionalLightHelper); */
  return (
    <motion.directionalLight
      animate={
        props.animation
          ? props.animation
          : {
              x: [-4, 5, -4],
              transition: { duration: 10, repeat: Infinity, delay: 4 },
            }
      }
      ref={light}
      color={props.color ? props.color : "red"}
      intensity={props.intensity ? props.intensity : 8}
      position={props.position ? props.position : [0, 0, 1]}
      shadow-mapSize-width={64}
      shadow-mapSize-height={64}
      angle={0.4}
      penumbra={0.2}
      castShadow
      shadow-bias={-0.001}
    />
  );
}

export default function ThreeCanvas(props: ObjectProps) {
  const ref = useRef();
  const pillRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <AnimatePresence>
        <m.div
          key={props.isHovered.toString()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="w-full flex items-center justify-center a"
        >
          {props.isHovered && (
            <div className={` z-20 h-[200px] a w-full r bg-black `}>
              <Canvas camera={{ position: [0, 0, 5], fov: 100 }}>
                <ambientLight></ambientLight>

                <OrbitControls></OrbitControls>

                <Suspense fallback={null}>
                  <motion.group initial={{ display: "none" }}>
                    <DLights
                      intensity={3}
                      position={[-6, 0, 2]}
                      animation={{
                        x: [-6, 0, 6, -6],
                        transition: {
                          duration: 10,
                          repeat: Infinity,
                        },
                      }}
                    ></DLights>
                    <DLights
                      animation={{
                        x: [-5, 0, 4, -4],
                        y: [-2, 0, 2, -2],

                        transition: { duration: 7, repeat: Infinity },
                      }}
                      intensity={7}
                      position={[-5, -2, 1]}
                      color={"#F88DAD"}
                    ></DLights>
                    <DLights
                      intensity={3}
                      animation={{
                        y: [2, 0, -2, 2],
                        x: [-2, 0, 2, -2],
                        transition: {
                          duration: 10,
                          repeat: Infinity,
                        },
                      }}
                      position={[-2, 2, 1]}
                    ></DLights>
                  </motion.group>
                  <SecondCube></SecondCube>
                  <FirstCube></FirstCube>
                  <Torus></Torus>
                  <PillPlane pillRef={pillRef}></PillPlane>
                </Suspense>
              </Canvas>
            </div>
          )}
        </m.div>
      </AnimatePresence>
    </>
  );
}

/* <mesh receiveShadow position={[0, 0, 0]}>
            <meshPhysicalMaterial color={"#1d4ed8"}></meshPhysicalMaterial>
            <planeBufferGeometry args={[7.5, 1.3, 1]}></planeBufferGeometry>
          </mesh> */
