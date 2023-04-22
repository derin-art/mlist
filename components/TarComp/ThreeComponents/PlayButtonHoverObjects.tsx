import * as THREE from "three";
import dynamic from "next/dynamic";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

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
  size: number;
  position?: [x: number, y: number, z: number];
}) => {
  let x = props.size * 0.06;
  let y = x;

  /* let width = props.width ? props.width * 0.76 : 12.4; */
  let width = props.size / 2.3;
  let height = props.size;
  let radius = props.size * 0.1;

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

  const extrudeSettings = {
    steps: 0.5,
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.3,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 10,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  return (
    <motion.mesh
      geometry={geometry}
      position={props.position ? props.position : [0, 0, 1]}
    >
      <meshPhysicalMaterial
        transmission={1}
        thickness={1.5}
        roughness={0.1}
        envMapIntensity={1.5}
      ></meshPhysicalMaterial>
    </motion.mesh>
  );
};

const PauseHoverGroup = (props: {
  size: number;
  position?: [x: number, y: number, z: number];
}) => {
  const position: [x: number, y: number, z: number] = props.position
    ? props.position
    : [0, 0, 1];
  const objectDisplacement = props.size / 2;
  return (
    <motion.group position={position}>
      <PillPlane
        position={[position[0] - objectDisplacement, position[1], position[2]]}
        size={props.size}
      ></PillPlane>
      <PillPlane
        position={[position[0] + objectDisplacement, position[1], position[2]]}
        size={props.size}
      ></PillPlane>
    </motion.group>
  );
};

export default function PlayButtonHoverObject() {
  return (
    <mesh>
      <OrbitControls></OrbitControls>
      <PauseHoverGroup size={0.8}></PauseHoverGroup>

      <PauseHoverGroup position={[2, 0, 0.5]} size={0.6}></PauseHoverGroup>
    </mesh>
  );
}
