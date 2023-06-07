import dynamic from "next/dynamic";

import Hero from "./PageComponents/Hero";
import TarTrailer from "./PageComponents/TarTrailer";
import SynopsisCta from "./PageComponents/SynopsisCta";
import Crew from "./PageComponents/Crew";
import LocationCta from "./PageComponents/LocationCta";
import SocialProof from "./PageComponents/SocialProof";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

import Lenis from "@studio-freight/lenis";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useEffect, useLayoutEffect, useRef } from "react";

/* import ThreeSpring from "./ThreeSpring"; */

const TarCastList = dynamic(() => import("./PageComponents/TarCastList"));

import React from "react";
import { animate, animations } from "framer-motion";

export default function Tar() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const lenis = useLenis(ScrollTrigger.update);
  useEffect(ScrollTrigger.refresh, [lenis]);

  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: false,

      // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  }, []);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rollAnim = gsap.to(".roll", {
        y: "-100%",
        duration: 0.6,
      });
      ScrollTrigger.create({
        trigger: q(".roll"),
        animation: rollAnim,
        start: "top center",
        end: "top 50px",
        scrub: true,

        toggleClass: "active",
      });
    });

    return () => ctx.revert();
  }, []);

  typeof window !== "undefined" &&
    console.log(window.screen.width, window.screen.height);

  return (
    <div ref={el} className="h-auto " id="smooth-wrapper">
      <div id="smooth-content" className="w-full  bg-black  h-auto lenis">
        <Hero></Hero>
        <TarTrailer></TarTrailer>

        <SynopsisCta></SynopsisCta>
        <Crew></Crew>

        <LocationCta></LocationCta>
        <TarCastList></TarCastList>
        <SocialProof></SocialProof>
      </div>
    </div>
  );
}
