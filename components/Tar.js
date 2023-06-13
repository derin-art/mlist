import dynamic from "next/dynamic";

import Hero from "./PageComponents/Hero";
import TarTrailer from "./PageComponents/TarTrailer";
import SynopsisCta from "./PageComponents/SynopsisCta";
import Crew from "./PageComponents/Crew";
import LocationCta from "./PageComponents/LocationCta";
import SocialProof from "./PageComponents/SocialProof";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

import Lenis from "@studio-freight/lenis";

import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* import ThreeSpring from "./ThreeSpring"; */

const TarCastList = dynamic(() => import("./PageComponents/TarCastList"));

import React from "react";
import { animate, animations } from "framer-motion";

export default function Tar() {
  const [renderMain, setRenderMain] = useState(false);
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
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        animate={renderMain ? { opacity: 1, y: 0 } : { opacity: 0 }}
        id="smooth-content"
        className={`w-full  bg-black  h-auto lenis`}
      >
        <Hero></Hero>
        <TarTrailer></TarTrailer>

        <SynopsisCta></SynopsisCta>
        <Crew></Crew>

        <LocationCta></LocationCta>
        <TarCastList></TarCastList>
        <SocialProof></SocialProof>
      </motion.div>
      <AnimatePresence>
        <motion.div className="a top-0 w-full" key={renderMain.toString()}>
          {!renderMain && (
            <motion.div
              id="smooth-content"
              className="h-[99.9vh] w-full bg-ultraBlack  r z-40 "
            >
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                exit={{ opacity: 0 }}
                onAnimationComplete={() => {
                  setRenderMain(true);
                }}
                animate={{ opacity: 1 }}
                className="a left-0 bottom-0 text-white text-7xl"
              >
                ANIMATE
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
