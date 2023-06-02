import dynamic from "next/dynamic";

import Tar11 from "../public/Data/Tar/Images/Tar11.jpg";

import Tar1 from "../public/Data/Tar/Images/Title19.jpg";
import Compose from "../public/Data/Tar/Images/Compose.jpg";
import Compose1 from "../public/Data/Tar/Images/Compose1.jpg";
import Hero from "./TarComp/Hero/Hero";
import TarTrailer from "./TarComp/TarTrailer";
import SynopsisCta from "./TarComp/SynopisCTA/SynopsisCta";
import CateBlanchettCta from "./TarComp/CateBlanchettCTA/CateBlanchett";
import LocationCta from "./TarComp/LocationCTA/LocationCta";
import SocialProof from "./TarComp/SocialProof/SocialProof";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

import Lenis from "@studio-freight/lenis";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useEffect, useLayoutEffect, useRef } from "react";

/* import ThreeSpring from "./ThreeSpring"; */

const TarCastList = dynamic(() => import("./TarComp/TarCastList/TarCastList"));

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

  /*  let lenis;
  const runLenis = () => {
    lenis = new Lenis({
      orientation: "vertical",
      easing: (t) => Math.min(1, 2.001 - Math.pow(2, -10 * t)),
      smooth: true,
      lerp: 0.7,
      duration: 1.2,
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
  }; */
  /* 
  typeof window !== "undefined" && runLenis(); */
  let refS;
  /*   useEffect(() => {
    refS = useRef < HTMLDivElement > null;
    let parent = document.querySelector(".sticky-element").parentElement;

    while (parent) {
      const hasOverflow = getComputedStyle(parent).overflow;
      if (hasOverflow !== "visible") {
        console.log(hasOverflow, parent);
      }
      parent = parent.parentElement;
    }
  }, []); */

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
        <CateBlanchettCta></CateBlanchettCta>
        <div className="w-full h-screen  r flex items-center justify-start px-[5.7vw] py-[5.9vw] gap-x-[1.38vw]">
          <div
            style={{ overflow: "hidden", display: "inline-block" }}
            className="w-[31.7vw] h-[35.5vw] "
          >
            <motion.img
              initial={{ scale: 1.2, x: "50%" }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
              src={Compose1.src}
            ></motion.img>
          </div>
          <div
            style={{ overflow: "hidden", display: "inline-block" }}
            className="w-[31.7vw] h-[35.5vw]"
          >
            <motion.img
              initial={{ scale: 1.2, x: "60%" }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
              src={Compose.src}
            ></motion.img>
          </div>
          <div className="text-[1.57vw] a text-white right-[4vw] w-[23vw] font-Neue uppercase top-[5.1vw]">
            <span className="font-Climate">"</span>
            you must service the composer. You gotta sublimate yourself, your{" "}
            <span className=" ">ego</span>, and, yes, your identity
            <span className="font-Climate">"</span>
            <div className="text-[1.05vw] mt-[2.1vw]">LYDIA TAR</div>
          </div>
        </div>

        <LocationCta></LocationCta>
        <TarCastList></TarCastList>
        <SocialProof></SocialProof>
      </div>
    </div>
  );
}
