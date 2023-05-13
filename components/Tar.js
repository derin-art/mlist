import dynamic from "next/dynamic";

import Hero from "./TarComp/Hero/Hero";
import TarTrailer from "./TarComp/TarTrailer";
import SynopsisCta from "./TarComp/SynopisCTA/SynopsisCta";
import CateBlanchettCta from "./TarComp/CateBlanchettCTA/CateBlanchett";
import LocationCta from "./TarComp/LocationCTA/LocationCta";
import SocialProof from "./TarComp/SocialProof/SocialProof";
import VideoCta from "./TarComp/VideoCTA/VideoCta";
import { useLenis } from "@studio-freight/react-lenis";
import { Kinesis } from "@studio-freight/compono";

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

  const boxBasic = useRef();
  const boxCont = useRef();
  const circle = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(circle.current, {
          rotate: 360,
          duration: 0.7,
        })
        .to(boxBasic.current, {
          x: -100,
          duration: 0.5,
        });

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

  return (
    <div ref={el} className="h-auto " /* id="smooth-wrapper" */>
      <div
        /* id="smooth-content" */ className="w-full row bg-black r h-auto lenis"
      >
        <div
          ref={boxCont}
          className="w-full h-screen flex items-center justify-center gap-x-[100px] hidden"
        >
          <div
            data-animate="rotate"
            ref={boxBasic}
            className="w-40 h-40 bg-red-500 yet-another"
          ></div>
          <div
            data-animate="rotate"
            ref={circle}
            className="w-40 h-40 bg-green-500 rounded-2xl yet-another"
          ></div>
          <Kinesis>
            <div className="w-40 h-40 bg-yellow-500"></div>
          </Kinesis>
        </div>
        <Hero></Hero>
        <TarTrailer></TarTrailer>

        <SynopsisCta></SynopsisCta>
        <CateBlanchettCta></CateBlanchettCta>

        <div ref={refS} className="hidden">
          <div></div>
        </div>
        <LocationCta></LocationCta>
        <TarCastList></TarCastList>
        <SocialProof></SocialProof>

        <div className=""></div>
      </div>
    </div>
  );
}
