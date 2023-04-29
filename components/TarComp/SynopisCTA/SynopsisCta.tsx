import { useState } from "react";
import { motion } from "framer-motion";
import WhiteBlob from "../../../public/Svg/White.svg";
import ThreeButton from "@/components/3dButton";

export default function SynopsisCta() {
  return (
    <div className="h-screen overflow-hidden border-t -mt-[1%] border-white w-full bg-black flex items-center justify-center font-Climate text-3xl r">
      <motion.div
        initial={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="a w-2/5 h-1/4 blur-[80px] md:top-[10%] md:-left-[0%] z-0"
      >
        <img src={WhiteBlob.src}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="a w-1/4 h-1/4 blur-[80px] top-[40%] right-[10%] z-0"
      >
        <img src={WhiteBlob.src}></img>
      </motion.div>

      <div className="gridF1 font-Neue  p-2 text-white flex h-screen r w-full  justify-center items-center">
        <motion.button
          style={{ display: "inline-block" }}
          className="a top-[20%] font-Climate"
        >
          {" "}
          <ThreeButton
            ExploreSynopsis={true}
            text={"Explore Synopsis"}
          ></ThreeButton>
        </motion.button>
        <div className=" text-white a text-center will-change bottom-[4%] md:text-[7vw] text-[8.4vw] leading-[0.9] w-full flex flex-col justify-center items-center">
          <div className="text-[4vw] text-white font-PvcI mb-8">
            <span className="">Lydia</span> Tar-
          </div>
          <motion.div className="z-20 font-NeueT">
            {" "}
            "The <span className="font-">n</span>arcissism of the smallest{" "}
            <span className="font-">differences</span>{" "}
            <span className="font-NeueT">leads to</span>{" "}
            <span className="font">most</span> boring{" "}
          </motion.div>
          <motion.div className="willChange z-0 rounded-full h-fit border-4 r text-xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[6.6vw] p-3 flex items-center justify-center w-fit text-white font-PvcB  md:mt-4 mt-1">
            {["C", "o", "n", "f", "o", "r", "m", "i", "t", "y"].map(
              (item, index) => {
                return (
                  <motion.div
                    key={index}
                    style={{
                      display: "inline-block",
                      overflow: "hidden",
                    }}
                    className=" flex items-center justify-center flex-col   "
                  >
                    <motion.div
                      initial={{ opacity: 1, x: "100%" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.6,
                        ease: [0.58, 0.28, 0.64, 0.75],
                        delay: index * 0.01,
                      }}
                      className="flex items-center justify-center "
                    >
                      {item}
                    </motion.div>{" "}
                  </motion.div>
                );
              }
            )}
            <span className="font-NeueT a right-[0%] top-0">"</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
