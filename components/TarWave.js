import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import React, { useRef, Suspense, useState } from "react";
import glsl from "babel-plugin-glsl/macro";
import Tar from "../public/Data/Tar/Images/TarPiano.jpg";

import * as THREE from "three";
import { motion } from "framer-motion";

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader();

THREE.ColorManagement.legacyMode = false;

const WaveShaderMateria = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;
 
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 0.4;
      float noiseAmp = 0.1;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;
    

    void main() {
  
      float gamma = 2.0;
      float wave = vWave * 0.2;
      vec4 textureColor = texture2D(uTexture, vUv);
  
     
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      texture = pow(texture, vec3(1.0 / gamma));
      gl_FragColor = vec4(texture, 1.0); 
    }
   
  `
);

extend({ WaveShaderMateria });

const Plane = ({ image, startClock }) => {
  let tarTexture;
  image.encoding = THREE.sRGBEncoding;
  const ref22 = useRef();
  useFrame(({ clock }) => {
    if (startClock) {
      ref22.current.uTime = 0.7 * clock.getElapsedTime();
    }
  });
  textureLoader.load(Tar.src, (texture) => {
    texture.encoding = THREE.sRGBEncoding;
    tarTexture = texture;
  });

  return (
    <mesh position={[0, 0, 1.3]}>
      <planeBufferGeometry args={[3.5, 3.5, 10, 10]} />
      {image ? (
        <waveShaderMateria
          toneMapped={false}
          uTexture={image}
          ref={ref22}
          uColor={"white"}
        />
      ) : (
        <></>
      )}
    </mesh>
  );
};

const Scene = () => {
  const [image] = useLoader(THREE.TextureLoader, [Tar.src], (loader) => {
    /* loader.manager.onStart = (a, b, c) => {
      console.log(a, b, c);
    }; */
  });
  const [startClock, setStartClock] = useState(false);

  return (
    <motion.div
      onViewportLeave={() => {
        setStartClock(false);
      }}
      onViewportEnter={() => {
        setStartClock(true);
      }}
      className="w-full h-full "
    >
      <Canvas
        dpr={startClock ? 2 : 0.1}
        camera={{ fov: 40, position: [0, 0, 6] }}
      >
        <OrbitControls></OrbitControls>
        <Suspense fallback={null}>
          <Plane startClock={startClock} image={image} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Scene;
