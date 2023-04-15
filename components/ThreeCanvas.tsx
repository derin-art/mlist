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

interface ObjectProps {
  isHovered: boolean;
  ExploreSynopisis?: boolean;
  ExploreAwards?: boolean;
  textProps: {
    no: number;
    wrd1Length: number;
    wrd2Length: number;
  };
}

const PillPlane = (props: {
  pillRef: any;
  width?: number;
  ExploreAwards?: boolean;
  ExploreSynopsis?: boolean;
  wrd2: number;
}) => {
  let x = 1;
  let y = 1;
  const dis = props.wrd2 - 5;
  /* let width = props.width ? props.width * 0.76 : 12.4; */
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

  return (
    <motion.mesh
      geometry={geometry}
      position={[-7.9, -2.12, 0]}
      ref={props.pillRef}
    >
      <meshPhongMaterial reflectivity={1} color={"#1d4ed8"}></meshPhongMaterial>
    </motion.mesh>
  );
};

const Globe = (props: {
  position: [x: number, y: number, z: number];
  size: number;
  Animation?: TargetAndTransition;
}) => {
  const [isRendered, setIsRendered] = useState(true);
  const [current, setCurrent] = useState({
    x: 0,
    y: 0,
  });
  let currentX: number = 0;
  let currentY: number = 0;
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.03;
      setCurrent((prev) => {
        return { x: ref.current.position.x, y: ref.current.position.y };
      });
      const accesion =
        Math.abs(props.position[1]) - Math.abs(ref.current.position.y);
      props.Animation && console.log(accesion);
      if (Math.abs(accesion) > 0.6) {
        console.log("sdms");
        setIsRendered(false);
      }
    }
  });

  const anim: TargetAndTransition | undefined = isRendered
    ? props.Animation
    : {
        scale: [1.1, 1, 0.8, 0],
        opacity: [1, 0],
        x: [current.x, current.x - 0.1, current.x + 0.1],
        y: [current.y, current.y + 0.2],
        transition: {
          duration: 3,

          type: "spring",
        },
      };
  return (
    <>
      {" "}
      <motion.mesh ref={ref} animate={anim} position={props.position}>
        <sphereBufferGeometry
          args={[props.size ? props.size : 0.5, 15, 15]}
        ></sphereBufferGeometry>
        <meshPhongMaterial
          transparent={true}
          shininess={100}
          emissive={"blue"}
          color={"blue"}
        ></meshPhongMaterial>
      </motion.mesh>
    </>
  );
};

const globePositions: {
  pos: [x: number, y: number, z: number];
  siz: number;
  Animation?: TargetAndTransition;
}[] = [
  {
    pos: [4, 1.6, 0],
    siz: 0.8,
    Animation: {
      scale: [1, 0.95, 0.9, 1],
      opacity: [1, 0],
      x: [4, 4.1, 3.9, 4],
      y: [1.6, 1.4, 1.6],
      rotateY: [0, 360, 0],
      transition: { duration: 5, repeat: Infinity },
    },
  },
  {
    pos: [6, 1, 0],
    siz: 0.3,
    Animation: {
      scale: [1, 0.95, 0.9, 1],
      rotateX: [0, 360, 0],
      x: [6, 6.1, 6.2, 6.1, 6, 5.9, 6],
      transition: { duration: 2, repeat: Infinity },
    },
  },
  {
    pos: [4, -1.6, 0],
    siz: 0.4,
    Animation: {
      scale: [1, 0.8, 0.9, 1],
      rotateX: [0, 360, 0],
      x: [4, 3.9, 3.8, 4.1, 4, 3.9, 4],
      y: [-1.6, -1.7, -1.6],
      transition: { duration: 2, repeat: Infinity },
    },
  },
  {
    pos: [6, -0.6, 0],
    siz: 1,
    Animation: {
      scale: [1, 0.8, 0.9, 1],
      rotateX: [0, 360, 0],
      x: [6, 6.2, 6.1, 5.9, 5.8, 6],

      transition: { duration: 1.5, repeat: Infinity },
    },
  },
  {
    pos: [2, -1.6, 0],
    siz: 0.6,
    Animation: {
      scale: [1, 0.8, 0.9, 1],
      rotateX: [0, 360, 0],
      x: [2, 2.1, 1.9, 2.1, 1.8, 2],

      transition: { duration: 1.3, repeat: Infinity },
    },
  },
  {
    pos: [-2, -0.8, 0],
    siz: 0.6,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [-2, -2.2, -2.1, -2, -1.8, -2],
      y: [-0.8, -1.2, -0.8],
      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    pos: [-4, -1.8, 0],
    siz: 0.8,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [-4, -4.2, -4.1, -4, -3.8, -4],
      y: [-1.8, -1.6, -1.8],
      transition: { duration: 3, repeat: Infinity, repeatDelay: 0.4 },
    },
  },
  {
    pos: [-1, 0.5, 0],
    siz: 0.4,
    Animation: {
      scale: [1, 0.6, 0.9, 0.8, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [-1, -1.2, -0.9, -1, -1.2, -1],
      y: [0.5, 0.6, 0.5],
      transition: { duration: 2.5, repeat: Infinity },
    },
  },
  {
    pos: [-4, 0.7, 0],
    siz: 0.5,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [-4, -4.2, -4.1, -4, -3.8, -4],
      y: [0.7, 0.6, 0.8, 0.7],
      transition: { duration: 3, repeat: Infinity },
    },
  },
  {
    pos: [-3, 1.2, 0],
    siz: 1,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [-3, -3.3, -3.1, -3, -2.8, -3],
      y: [1.2, 1.3, 0.9, 1, 1.2],
      transition: { duration: 4, repeat: Infinity },
    },
  },
];

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
      intensity={props.intensity ? props.intensity : 8}
      position={props.position ? props.position : [0, 0, 1]}
      shadow-mapSize-width={64}
      shadow-mapSize-height={64}
      castShadow
      shadow-bias={-0.001}
    />
  );
}

const CameraComp = (props: { x: number; y: number }) => {
  const { camera } = useThree();
  /* 
  useFrame(({ clock }) => {
    camera.updateProjectionMatrix();
  }); */

  return <OrbitControls></OrbitControls>;
};

const BubblesGroup = (props: { x: number; y: number }) => {
  const bubbleRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (bubbleRef.current) {
      bubbleRef.current.position.x = props.x * -2;
      bubbleRef.current.position.y = props.y * -1;
    }
  });

  return (
    <>
      <motion.group ref={bubbleRef}>
        {globePositions.map((item, index) => {
          return (
            <Globe
              Animation={item.Animation}
              key={index}
              position={item.pos}
              size={item.siz}
            ></Globe>
          );
        })}
      </motion.group>
    </>
  );
};

export default function ThreeCanvas(props: ObjectProps) {
  const ref = useRef();
  const pillRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const xCalculation = e.clientX / window.innerWidth - 0.5;
      const yCalculation = e.clientY / window.innerHeight - 0.5;
      setMousePos((prev) => {
        console.log(xCalculation, yCalculation);
        return { x: xCalculation * -1, y: yCalculation };
      });
    });
    return window.removeEventListener("mousemove", () => {});
  }, []);

  /*   props.isHovered &&
    useFrame(({ camera }) => {
      camera.position.x = mousePos.x;
      camera.position.y = mousePos.y;
    }); */

  return (
    <>
      <AnimatePresence>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
          key={props.isHovered.toString()}
          exit={{ opacity: 0 }}
          className="w-full flex items-center justify-center a"
        >
          {props.isHovered && (
            <div
              className={` z-20 h-[200px] a w-[130%] r bg-transparent flex items-center justify-center `}
            >
              <Canvas camera={{ fov: 100, position: [0, 0, 5] }}>
                <ambientLight></ambientLight>

                <CameraComp x={mousePos.x} y={mousePos.y}></CameraComp>

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
                      intensity={6}
                      position={[-5, -2, 1]}
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
                  {props.isHovered && (
                    <BubblesGroup x={mousePos.x} y={mousePos.y}></BubblesGroup>
                  )}
                  <PillPlane
                    width={
                      props.textProps.wrd1Length + props.textProps.wrd2Length
                    }
                    wrd2={props.textProps.wrd2Length}
                    ExploreAwards={props.ExploreAwards}
                    ExploreSynopsis={props.ExploreSynopisis}
                    pillRef={pillRef}
                  ></PillPlane>
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
