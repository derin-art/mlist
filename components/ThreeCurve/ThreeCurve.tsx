import * as THREE from "three";
import dynamic from "next/dynamic";
import {
  Canvas,
  PointLightProps,
  SpotLightProps,
  useFrame,
} from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import {
  Edges,
  Line,
  OrbitControls,
  SpotLight,
  useHelper,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { SpotLightHelper } from "three";
import {
  TargetAndTransition,
  motion as m,
  AnimatePresence,
} from "framer-motion";

const Globe = (props: { position: [x: number, y: number, z: number] }) => {
  let currentX: number = 0;
  let currentY: number = 0;
  const ref = useRef<THREE.Mesh>(null!);
  if (ref.current) {
    currentX = ref.current.position.x;
    currentY = ref.current.position.y;
  }
  return (
    <motion.mesh
      animate={{
        x: [currentX, currentX * 1.3, currentX],
        y: [currentY, currentY * 1.3, currentY],
        transition: { repeat: Infinity, duration: 1 },
      }}
      ref={ref}
      position={props.position}
    >
      <sphereBufferGeometry args={[1, 20, 15]}></sphereBufferGeometry>
      <meshBasicMaterial color={"red"}></meshBasicMaterial>
    </motion.mesh>
  );
};

const PloygonShape = () => {
  const shape = new THREE.Shape();
  /*   shape.moveTo(0.5, 0.15);
  shape.lineTo(1, 0.3);
  shape.lineTo(1, 0.7);
  shape.lineTo(0, 1);
  shape.lineTo(-1, 0.7);
  shape.lineTo(-1, 0.3);
  shape.lineTo(0, 0);
  shape.lineTo(1, -0.3);
  shape.lineTo(1, -0.7);
  shape.lineTo(0, -1);
  shape.lineTo(-1, -0.7);
  shape.lineTo(-1, -0.3);
  shape.lineTo(-0.5, -0.15); */

  const mainPoints = [
    [0.5, 0.15],
    [1, 0.3],
    [1, 0.7],
    [0, 1],
    [-1, 0.7],
    [-1, 0.3],
    [0, 0],
    [1, -0.3],
    [1, -0.7],
    [0, -1],
    [-1, -0.7],
    [-1, -0.3],
    [-0.5, -0.15],
  ];

  const pPoints = mainPoints.map((item) => {
    const displacement = 0.3;
    if (item[0] && item[1]) {
      return [item[0] + displacement, item[1]];
    } else if (item[0] === 0 && item[1]) {
      return [item[0], item[1] + displacement];
    } else if (item[0] < 0 && item[1]) {
      console.log("hhsd");
      return [item[0] - displacement, item[1]];
    } else if (item[0] === 0 && item[0] === 0) {
      return [item[0], item[1] + displacement];
    } else if (!item[0] && !item[1]) {
      return [item[0] - displacement, item[1]];
    } else if (item[0] === 0 && !item[1]) {
      return [item[0], item[1] + displacement];
    } else if (!item[0] && !item[1]) {
      return [item[0] + displacement, item[1]];
    }
  });

  mainPoints.forEach((item, index) => {
    if (index === 0) {
      shape.moveTo(item[0], item[1]);
    } else {
      shape.lineTo(item[0], item[1]);
    }
  });

  const dis = 0.3;
  shape.moveTo(mainPoints[0][0], mainPoints[0][1]);
  shape.lineTo(mainPoints[0][0] + dis, mainPoints[0][1]);
  shape.lineTo(mainPoints[1][0] + dis, mainPoints[1][1]);
  shape.lineTo(mainPoints[2][0] + dis, mainPoints[2][1]);
  shape.lineTo(mainPoints[3][0], mainPoints[3][1] + dis);
  shape.lineTo(mainPoints[4][0] - dis, mainPoints[4][1]);
  shape.lineTo(mainPoints[5][0] - dis, mainPoints[5][1]);
  shape.lineTo(mainPoints[6][0] - dis, mainPoints[6][1]);
  shape.lineTo(mainPoints[7][0] - dis, mainPoints[7][1]);
  shape.lineTo(mainPoints[8][0] - dis, mainPoints[8][1]);
  shape.lineTo(mainPoints[9][0], mainPoints[9][1] + dis - 0.1);
  shape.lineTo(mainPoints[10][0] + dis, mainPoints[10][1]);
  shape.lineTo(mainPoints[11][0] + dis, mainPoints[11][1]);
  shape.lineTo(mainPoints[12][0] + dis, mainPoints[12][1]);
  shape.lineTo(-0.5, -0.15);
  const extrudeSettings = {
    depth: 0,
    bevelEnabled: false,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1,
  };

  const prob = new THREE.Shape(); 

  const equalLengt = 0;
  const thicks = 0.4;

  prob.moveTo(0.5, 0.15);

  prob.lineTo(1.5, 0.15);

  prob.lineTo(2, 0.5);

  prob.lineTo(1 + equalLengt, 0.5);

  prob.lineTo(0.5, 0.15);

  prob.moveTo(2, 0.5);

  prob.lineTo(2, 1.5 + thicks);
  prob.lineTo(1, 0.5);
  prob.lineTo(1 + equalLengt, 1.2 + thicks);

  prob.lineTo(2, 1.5 + thicks);
  prob.lineTo(1 + equalLengt, 1.2 + thicks);
  prob.lineTo(1 + equalLengt, 0.5);

  prob.moveTo(1, 1.6);
  prob.lineTo(0, 2.4);
  prob.lineTo(0, 3.4);
  prob.lineTo(2, 1.9);

  const geometry = new THREE.ExtrudeGeometry(prob, extrudeSettings);

  const sdsda: number[] = [];
  mainPoints.forEach((item) => {
    sdsda.push(item[0]);
    sdsda.push(item[1]);
  });

  pPoints.forEach((item) => {
    if (item) {
      sdsda.push(item[0]);
      sdsda.push(item[1]);
    }
  });
  const newFloat = new Float32Array(sdsda);

  const geometry1 = new THREE.BufferGeometry();
  geometry1.setAttribute("position", new THREE.BufferAttribute(newFloat, 3));

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial wireframe={true} color={"red"}></meshBasicMaterial>
    </mesh>
  );
};

const PolLine = () => {
  const points = [
    new THREE.Vector3(0.5, 0.15),
    new THREE.Vector3(1, 0.3, 0),
    new THREE.Vector3(1, 0.7, 0),
    new THREE.Vector3(0, 1),
    new THREE.Vector3(-1, 0.7),
    new THREE.Vector3(-1, 0.3),

    new THREE.Vector3(0, 0),
    new THREE.Vector3(1, -0.3),
    new THREE.Vector3(1, -0.7),
    new THREE.Vector3(0, -1),
    new THREE.Vector3(-1, -0.7),
    new THREE.Vector3(-1, -0.3),
    new THREE.Vector3(-0.5, -0.15),
  ];
  const mainPoints = [
    [0.5, 0.15],
    [1, 0.3],
    [1, 0.7],
    [0, 1],
    [-1, 0.7],
    [-1, 0.3],
    [0, 0],
    [1, -0.3],
    [1, -0.7],
    [0, -1],
    [-1, -0.7],
    [-1, -0.3],
    [-0.5, -0.15],
  ];
  const pPoints = mainPoints.map((item) => {
    return [item[0] * 1.3, item[1] * 1.3];
  });
  const allPoints = mainPoints.map((item) => {
    return new THREE.Vector3(item[0], item[1]);
  });
  const twoPoints = pPoints.map((item) => {
    return new THREE.Vector3(item[0], item[1]);
  });

  return (
    <Line points={[...twoPoints, ...allPoints]}>
      <lineBasicMaterial
        side={THREE.DoubleSide}
        color={"red"}
      ></lineBasicMaterial>
    </Line>
  );
};

const Ings = (props: {
  positions?: [x: number, y: number, z: number];
  rotation?: [x: number, y: number, z: number];
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  if (ref.current) {
    console.log("sdsd");
    if (props.rotation) {
      ref.current.rotation.set(
        props.rotation[0],
        props.rotation[1],
        props.rotation[2]
      );
    }
  }
  useFrame(() => {
    if (ref.current) {
      if (props.rotation) {
        ref.current.rotation.set(
          props.rotation[0],
          props.rotation[1],
          props.rotation[2]
        );
      }
    }
  });

  const extrudeSettings = {
    depth: 0,
    bevelEnabled: false,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1,
  };

  const gee = new THREE.ExtrudeGeometry();
  const te = useRef<THREE.BufferGeometry>(null!);

  if (te.current) {
    console.log(te.current.boundingBox);
  }

  return (
    <mesh ref={ref} position={props.positions ? props.positions : [0, 0, 0]}>
      <meshBasicMaterial color={"red"}></meshBasicMaterial>
      <ringBufferGeometry
        ref={te}
        args={[1, 2, 6, 1, Math.PI * 2 - Math.PI / 2]}
      ></ringBufferGeometry>
    </mesh>
  );
};

const TorusR = (props: { position: [x: number, y: number, z: number] }) => {
  const geometry = new THREE.TorusGeometry(10, 3, 8, 6);
  const material = new THREE.MeshBasicMaterial({ color: "purple" });
  return (
    <mesh
      position={[...props.position]}
      geometry={geometry}
      material={material}
    ></mesh>
  );
};

export default function ThreeCurve() {
  let positions = [];
  const positionsT = [];
  const positionsB = [];
  const curve = new THREE.QuadraticBezierCurve(
    new THREE.Vector2(-10, 0),
    new THREE.Vector2(20, 15),
    new THREE.Vector2(10, 0)
  );

  const curveEllispe = new THREE.EllipseCurve(
    0,
    0, // ax, aY
    12,
    12, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );

  const curveEllispe1 = new THREE.EllipseCurve(
    0,
    0, // ax, aY
    10,
    10, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );

  const curveEllispe2 = new THREE.EllipseCurve(
    0,
    0, // ax, aY
    14,
    14, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );

  for (let i = 0; i < 10; i++) {
    positions.push(curveEllispe.getPoint(i / 10));
  }
  for (let i = 0; i < 10; i++) {
    positionsT.push(curveEllispe1.getPoint(i / 10));
  }
  for (let i = 0; i < 10; i++) {
    positionsB.push(curveEllispe2.getPoint(i / 10));
  }
  console.log(positions);

  const ref = useRef<THREE.Group>(null!);

  ref.current && ref.current.rotation.set(0, 0, 0);

  return (
    <div className="w-full h-screen bg-white r">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <group>
          {positions.map((item, index) => {
            return <Globe key={index} position={[item.x, item.y, 0]}></Globe>;
          })}
        </group>
        <group>
          {positionsT.map((item, index) => {
            return <Globe key={index} position={[item.x, item.y, 0]}></Globe>;
          })}
        </group>
        <group>
          {positionsB.map((item, index) => {
            return <Globe key={index} position={[item.x, item.y, 0]}></Globe>;
          })}
        </group>
        <OrbitControls></OrbitControls>
      </Canvas>
    </div>
  );
}
