import dynamic from "next/dynamic";

import Hero from "./TarComp/Hero/Hero";
import TarTrailer from "./TarComp/TarTrailer";
import SynopsisCta from "./TarComp/SynopisCTA/SynopsisCta";
import CateBlanchettCta from "./TarComp/CateBlanchettCTA/CateBlanchett";
import LocationCta from "./TarComp/LocationCTA/LocationCta";
import SocialProof from "./TarComp/SocialProof/SocialProof";
import VideoCta from "./TarComp/VideoCTA/VideoCta";

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

import Lenis from "@studio-freight/lenis";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useEffect, useLayoutEffect, useRef } from "react";

/* import ThreeSpring from "./ThreeSpring"; */

const TarCastList = dynamic(() => import("./TarComp/TarCastList/TarCastList"));

import React from "react";

export default function Tar() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  /* 
  useLayoutEffect(() => {
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
  useEffect(() => {
    refS = useRef < HTMLDivElement > null;
    let parent = document.querySelector(".sticky-element").parentElement;

    while (parent) {
      const hasOverflow = getComputedStyle(parent).overflow;
      if (hasOverflow !== "visible") {
        console.log(hasOverflow, parent);
      }
      parent = parent.parentElement;
    }
  }, []);

  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {
    const anim = gsap.to(q(".gsap-box"), {
      x: 400,
      rotation: 360,
      duration: 3,
    });
    const rollAnim = gsap.to(q(".roll"), {
      y: "-100%",
      duration: 0.6,
    });
    ScrollTrigger.create({
      trigger: q(".gsap-box"),
      animation: anim,
      // Uncomment these to see how they affect the ScrollTrigger

      start: "top center",
      end: "top 50px",
      toggleClass: "active",

      scrub: 1,
      onUpdate: (self) => {
        //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
        // }
      },
    });
    ScrollTrigger.create({
      trigger: q(".roll"),
      animation: rollAnim,
      // Uncomment these to see how they affect the ScrollTrigger

      start: "top center",
      end: "top 50px",
      toggleClass: "active",

      scrub: 1,
    });

    /* gsap.to(q(".gsap-box"), {
      x: 400,
      scale: 2,

      rotation: 360,
      scrollTrigger: {
        trigger: q(".gsap-box"),
        start: "top center",
        end: "top 100px",
        scrub: true,
        markers: true,
        id: "scrub",
      },
    }); */
  }, []);

  return (
    <ReactLenis root options={{ duration: 1.6, lerp: 0.1 }}>
      <div ref={el} className="h-auto lenis" /* id="smooth-wrapper" */>
        <div
          /* id="smooth-content" */ className="w-full row bg-black r h-auto lenis"
        >
          <Hero></Hero>
          <TarTrailer></TarTrailer>

          <SynopsisCta></SynopsisCta>
          <CateBlanchettCta></CateBlanchettCta>
          <div className="h-screen w-full r hidden">
            <div className="w-48 h-48 bg-red-500 gsap-box"></div>
          </div>

          <div ref={refS} className="sticky-element">
            <div>
              <LocationCta></LocationCta>
            </div>
          </div>
          <div className="bg-black r">
            <VideoCta></VideoCta>
            <TarCastList></TarCastList>
            <SocialProof></SocialProof>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
