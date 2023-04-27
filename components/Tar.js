import dynamic from "next/dynamic";
const ThreeCurve = dynamic(() => import("../components/ThreeCurve/ThreeCurve"));
import Hero from "./TarComp/Hero/Hero";
import TarTrailer from "./TarComp/TarTrailer";
import SynopsisCta from "./TarComp/SynopisCTA/SynopsisCta";
import CateBlanchettCta from "./TarComp/CateBlanchettCTA/CateBlanchett";
import LocationCta from "./TarComp/LocationCTA/LocationCta";
import SocialProof from "./TarComp/SocialProof/SocialProof";
import VideoCta from "./TarComp/VideoCTA/VideoCta";
import TestCanvas from "./TarComp/ThreeComponents/TestCanvas";
import Lenis from "@studio-freight/lenis";

import { Canvas } from "@react-three/fiber";
import ThreeSpring from "./ThreeSpring";

const TarCarList = dynamic(() => import("./TarComp/TarCastList/TarCastList"));

import React from "react";

export default function Tar() {
  const lenis = new Lenis({
    orientation: "vertical",
    easing: (t) => Math.min(1, 2.001 - Math.pow(2, -10 * t)),
    smooth: true,
    lerp: 0.7,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    console;
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div className="">
      <div className="w-full  h-fit bg-black r lenis">
        <Hero></Hero>
        <TarTrailer></TarTrailer>
        <SynopsisCta></SynopsisCta>
        <CateBlanchettCta></CateBlanchettCta>
        <LocationCta></LocationCta>
        <VideoCta></VideoCta>

        <TarCarList></TarCarList>
        <SocialProof></SocialProof>

        {/*   <div className="w-full h-screen r flex items-center justify-center bg-black">
          <ThreeButton text="Explore Something"></ThreeButton>
        </div>
        <ThreeCurve></ThreeCurve> */}
        <div className="r flex items-center justify-center hidden">
          {" "}
          <button className="a z-50 btn">Play</button>
          <TestCanvas></TestCanvas>
        </div>
        <div className="h-screen w-full">
          <Canvas camera={[0, 0, -3]} className="border">
            <ThreeSpring></ThreeSpring>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
