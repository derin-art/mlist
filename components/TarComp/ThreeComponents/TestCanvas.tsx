import * as THREE from "three";
import dynamic from "next/dynamic";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import PlayButtonHoverObject from "./PlayButtonHoverObjects";
import { Suspense, useEffect, useRef, useState } from "react";
import { Edges, OrbitControls, useHelper } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { SpotLightHelper } from "three";
import {
  TargetAndTransition,
  motion as m,
  AnimatePresence,
} from "framer-motion";

const PillPlane = (props: {
  width?: number;
  ExploreAwards?: boolean;
  ExploreSynopsis?: boolean;
}) => {
  let x = 1;
  let y = 1;
  /* let width = props.width ? props.width * 0.76 : 12.4; */
  let width = 5.6;
  let height = 3.6;
  let radius = 1.9;

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

  return (
    <motion.mesh geometry={geometry} position={[-3.7, -2.8, 0]}>
      <meshPhongMaterial reflectivity={1} color={"#1d4ed8"}></meshPhongMaterial>
    </motion.mesh>
  );
};

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

export default function TestCanvas() {
  return (
    <Canvas camera={{ fov: 100, position: [0, 0, 5] }}>
      <PillPlane></PillPlane>
      <motion.group>
        <DLights
          intensity={3}
          position={[-3, 0, 1]}
          animation={{
            x: [-3, 0, 3, -3],
            transition: {
              duration: 10,
              repeat: Infinity,
            },
          }}
        ></DLights>
        <DLights
          animation={{
            x: [-2.5, 0, 2, -2],
            y: [-1, 0, 1, -1],

            transition: { duration: 7, repeat: Infinity },
          }}
          intensity={6}
          position={[-2.5, -1, 0.5]}
          color={"#F88DAD"}
        ></DLights>
        <DLights
          intensity={2}
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
      <ambientLight></ambientLight>
      <PlayButtonHoverObject></PlayButtonHoverObject>
    </Canvas>
  );
}
