import dynamic from "next/dynamic";
const ThreeCurve = dynamic(() => import("../components/ThreeCurve/ThreeCurve"));
import Hero from "./TarComp/Hero/Hero";
import TarTrailer from "./TarComp/TarTrailer";
import SynopsisCta from "./TarComp/SynopisCTA/SynopsisCta";
import CateBlanchettCta from "./TarComp/CateBlanchettCTA/CateBlanchett";
import LocationCta from "./TarComp/LocationCTA/LocationCta";
import SocialProof from "./TarComp/SocialProof/SocialProof";
import VideoCta from "./TarComp/VideoCTA/VideoCta";

import Lenis from "@studio-freight/lenis";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useLayoutEffect, useRef } from "react";

const DropAnimationComponent = dynamic(() =>
  import("./TarComp/ThreeComponents/DropAnimationComponent")
);
import { Canvas } from "@react-three/fiber";
/* import ThreeSpring from "./ThreeSpring"; */

const TarCarList = dynamic(() => import("./TarComp/TarCastList/TarCastList"));

import React from "react";
import TarCastList from "./TarComp/TarCastList/TarCastList";

export default function Tar() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /*   useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: false,

      // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  }, []); */

  let lenis;
  const runLenis = () => {
    lenis = new Lenis({
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
  };

  typeof window !== "undefined" && runLenis();
  return (
    <div /* id="smooth-wrapper" */>
      <div /* id="smooth-content"  */ className="w-full row bg-black r lenis">
        <Hero></Hero>
        <TarTrailer></TarTrailer>

        <SynopsisCta></SynopsisCta>
        <CateBlanchettCta></CateBlanchettCta>

        <LocationCta></LocationCta>
        <VideoCta></VideoCta>
        <TarCastList></TarCastList>
        <SocialProof></SocialProof>

        {/*   <div className="w-full h-screen r flex items-center justify-center bg-black">
          <ThreeButton text="Explore Something"></ThreeButton>
        </div>
        <ThreeCurve></ThreeCurve> */}
        {/*  <div className="r flex items-center justify-center hidden">
          {" "}
          <button className="a z-50 btn">Play</button>
          <TestCanvas></TestCanvas>
        </div> */}
      </div>
    </div>
  );
}
