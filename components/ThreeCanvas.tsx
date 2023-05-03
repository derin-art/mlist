import * as THREE from "three";
import dynamic from "next/dynamic";
import {
  Canvas,
  GroupProps,
  MeshProps,
  useFrame,
  useThree,
} from "@react-three/fiber";
import PlayButtonHoverObject from "./TarComp/ThreeComponents/PlayButtonHoverObjects";

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

//Config
THREE.ColorManagement.enabled = true;

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
      <meshPhongMaterial
        reflectivity={0.3}
        color={"black"}
        shininess={30}
      ></meshPhongMaterial>
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
  const ref: any = useRef<MeshProps>(null!);
  useFrame(() => {
    if (ref.current) {
      setCurrent((prev) => {
        return { x: ref.current.position.x, y: ref.current.position.y };
      });
      const accesion =
        Math.abs(props.position[1]) - Math.abs(ref.current.position.y);

      if (Math.abs(accesion) > 0.6) {
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
          args={[props.size, 14, 14]}
        ></sphereBufferGeometry>

        <meshPhongMaterial
          transparent={true}
          shininess={15}
          specular={"white"}
          reflectivity={1}
          emissive={"black"}
          color={"black"}
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
    pos: [4, 1, 0],
    siz: 0.3,
    Animation: {
      scale: [1, 0.95, 0.9, 1],
      rotateX: [0, 360, 0],
      x: [4, 4.1, 4.2, 4.1, 4, 3.9, 4],
      transition: { duration: 2, repeat: Infinity },
    },
  },
  {
    pos: [4, -1.6, 0],
    siz: 0.4,
    Animation: {
      scale: [1, 0.7, 0.9, 1],
      rotateX: [0, 360, 0],
      x: [4, 3.9, 3.8, 4.1, 4, 3.9, 4],
      y: [-1.6, -1.7, -1.6],
      transition: { duration: 2, repeat: Infinity },
    },
  },
  {
    pos: [4, -0.6, 0],
    siz: 1,
    Animation: {
      scale: [1, 0.7, 0.9, 1],
      rotateX: [0, 360, 0],
      x: [4, 4.2, 4.1, 3.9, 3.8, 4],

      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    pos: [2, -1.6, 0],
    siz: 0.6,
    Animation: {
      scale: [1, 0.8, 0.9, 1],
      rotateX: [0, 360, 0],
      x: [2, 2.1, 1.9, 2.1, 1.8, 2],

      transition: { duration: 3, repeat: Infinity },
    },
  },
  {
    pos: [-2, -0.8, 0],
    siz: 0.6,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.3, 1],
      rotateX: [0, 360, 0],
      x: [-2, -2.2, -2.1, -2, -1.8, -2],
      y: [-0.8, -1.2, -0.8],
      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    pos: [-2.2, -1, 0],
    siz: 0.7,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.3, 1],
      rotateX: [0, 360, 0],
      x: [-2.2, -2.3, -2.1, -2, -1.8, -2.2],
      y: [-1, -1.2, -1],
      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    pos: [-4, -1.8, 0],
    siz: 0.8,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.2, 1],
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
      scale: [1, 0.6, 0.9, 0.8, 1.2, 1],
      rotateX: [0, 360, 0],
      x: [-1, -1.2, -0.9, -1, -1.2, -1],
      y: [0.5, 0.6, 0.5],
      transition: { duration: 3, repeat: Infinity },
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
      transition: { duration: 4, repeat: Infinity },
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
  {
    pos: [-3.1, 1.3, 0],
    siz: 0.5,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [-3.1, -3.3, -3.1, -3, -2.8, -3],
      y: [1.3, 1.4, 1, 0.9, 1.2],
      transition: { duration: 5, repeat: Infinity },
    },
  },
  {
    pos: [2, 1.2, 0],
    siz: 0.7,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [2, 2.3, 2.1, 2, 2.3, 2],
      y: [1.2, 1.3, 0.9, 1, 1.2],
      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    pos: [2.2, 1.2, 0],
    siz: 1,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [2.2, 2.3, 2.1, 2, 2.3, 2.2],
      y: [1.2, 1.3, 0.9, 1, 1.2],
      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    pos: [2.2, 1.2, 0],
    siz: 1,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [2.2, 2.3, 2.1, 2, 2.3, 2.2],
      y: [1.2, 1.3, 0.9, 1, 1.2],
      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    pos: [2.3, 1.6, 0],
    siz: 0.5,
    Animation: {
      scale: [1, 0.7, 0.9, 1, 1.1, 1],
      rotateX: [0, 360, 0],
      x: [2.3, 2.3, 2.1, 2, 2.3],
      y: [1.6, 1.3, 0.9, 1, 1.2, 1.6],
      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    pos: [-2, 1.6, 0],
    siz: 0.5,
  },
  {
    pos: [-1, -0.6, 0],
    siz: 0.6,
  },
  {
    pos: [1, -0.6, 0],
    siz: 0.7,
  },
];

function DLights(props: {
  animation?: TargetAndTransition;
  position?: [x: number, y: number, z: number];
  color?: string;
  intensity?: number;
}) {
  const light: any = useRef();
  /*   useHelper(light, THREE.DirectionalLightHelper); */
  return (
    <motion.directionalLight
      ref={light}
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

const CameraComp = (props: { x: number; y: number }) => {
  const { camera } = useThree();
  /* 
  useFrame(({ clock }) => {
    camera.updateProjectionMatrix();
  }); */

  return <OrbitControls></OrbitControls>;
};

const BubblesGroup = (props: { x: number; y: number }) => {
  const bubbleRef: any = useRef<GroupProps>(null);

  useFrame(() => {
    if (bubbleRef.current) {
      if (bubbleRef.current.position) {
        bubbleRef.current.position.x = props.x * -2;
        bubbleRef.current.position.y = props.y * -1;
      }
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
      <m.div
        key={props.isHovered.toString()}
        className="w-full flex items-center justify-center a"
      >
        <div
          className={` z-20 h-[200px] a w-[130%] r bg-transparent flex items-center justify-center `}
        >
          <Canvas key={"1stCanvas"} camera={{ fov: 100, position: [0, 0, 5] }}>
            <ambientLight></ambientLight>

            <CameraComp x={mousePos.x} y={mousePos.y}></CameraComp>

            <Suspense fallback={null}>
              <motion.group initial={{ display: "none" }}>
                <DLights
                  intensity={3.7}
                  position={[-2, 0, 2]}
                  animation={{
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                    },
                  }}
                  color="blue"
                ></DLights>
                {/*     <DLights
                  animation={{
                    x: [-5, 0, 4, -4],
                    y: [-2, 0, 2, -2],

                    transition: { duration: 6, repeat: Infinity },
                  }}
                  intensity={6}
                  position={[-5, -2, 1]}
                  color={"#F88DAD"}
                ></DLights>
                <DLights
                  intensity={5}
                  animation={{
                    y: [1.5, 0, -1.5, 1.5],
                    x: [-2.5, 0, 2, -2.5],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                    },
                  }}
                  color="red"
                  position={[-2.5, 1.5, 1]}
                ></DLights> */}
              </motion.group>
              {props.isHovered && (
                <BubblesGroup x={mousePos.x} y={mousePos.y}></BubblesGroup>
              )}
              {/*       <PillPlane
                width={props.textProps.wrd1Length + props.textProps.wrd2Length}
                wrd2={props.textProps.wrd2Length}
                ExploreAwards={props.ExploreAwards}
                ExploreSynopsis={props.ExploreSynopisis}
                pillRef={pillRef}
              ></PillPlane> */}
            </Suspense>
          </Canvas>
        </div>
      </m.div>
    </>
  );
}

/* <mesh receiveShadow position={[0, 0, 0]}>
            <meshPhysicalMaterial color={"#1d4ed8"}></meshPhysicalMaterial>
            <planeBufferGeometry args={[7.5, 1.3, 1]}></planeBufferGeometry>
          </mesh> */
