import { useState } from "react";
import { motion } from "framer-motion";
import WhiteBlob from "../../../public/Svg/White.svg";
import ThreeButton from "@/components/3dButton";

export default function SynopsisCta() {
  const [triggerLight, setTriggerLight] = useState(false);
  return (
    <div className="h-screen overflow-hidden border-y -mt-[1%] border-white w-full bg-black flex items-center justify-center font-Climate text-3xl r">
      <motion.div
        initial={{ opacity: 0 }}
        animate={triggerLight ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="a w-2/5 h-1/4 blur-[80px] md:-top-[20%] md:-left-[15%] z-0"
      >
        <img src={WhiteBlob.src}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => {
          setTriggerLight(true);
        }}
        onViewportLeave={() => {
          setTriggerLight(false);
        }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="a w-1/4 h-1/4 blur-[80px] top-[40%] right-[10%] z-0"
      >
        <img src={WhiteBlob.src}></img>
      </motion.div>

      <div className="gridF1 font-Neue  p-2 text-white flex h-screen r w-full  justify-center items-center">
        <motion.button
          style={{ display: "inline-block" }}
          className="a top-[25%] font-Climate"
        >
          {" "}
          <ThreeButton
            ExploreSynopsis={true}
            text={"Explore Synopsis"}
          ></ThreeButton>
        </motion.button>
        <div className=" text-white a text-center will-change bottom-[4%] md:text-[6vw] text-[8.4vw] lH w-full flex flex-col justify-center items-center">
          <motion.div className="z-20">
            {" "}
            "The <span className="font-NeueT">n</span>arcissism of the smallest{" "}
            <span className="font-NeueT">differences</span> leads to{" "}
            <span className="font-NeueT">most</span> boring{" "}
          </motion.div>
          <motion.div className=" z-0 rounded-full h-fit border-2  flex items-center justify-center w-fit text-white font-PvcB pt-[1%] md:mt-4 mt-1">
            {["c", "o", "n", "f", "o", "r", "m", "i", "t", "y"].map(
              (item, index) => {
                return (
                  <motion.div
                    key={index}
                    style={{
                      display: "inline-block",
                      overflow: "hidden",
                    }}
                    className=" hidden  h-[7vw] flex items-center justify-center flex-col"
                  >
                    <motion.div
                      initial={{ opacity: 1, x: "100%" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.7 }}
                      className="flex items-center justify-center "
                    >
                      {item}
                    </motion.div>{" "}
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
