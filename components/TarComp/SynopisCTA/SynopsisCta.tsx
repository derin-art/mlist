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
          className="a top-[20%] font-Climate"
        >
          {" "}
          <ThreeButton
            ExploreSynopsis={true}
            text={"Explore Synopsis"}
          ></ThreeButton>
        </motion.button>
        <div className=" text-white a text-center will-change bottom-[4%] md:text-[6vw] text-[8.4vw] leading-[0.9] w-full flex flex-col justify-center items-center">
          <div className="text-base text-white font-PvcI mb-4">Lydia Tar-</div>
          <motion.div className="z-20 font-NeueT">
            {" "}
            "The <span className="font-">n</span>arcissism of the smallest{" "}
            <span className="font-">differences</span>{" "}
            <span className="font-NeueT">leads to</span>{" "}
            <span className="font">most</span> boring{" "}
          </motion.div>
          <motion.div className=" z-0 rounded-full h-fit border-4 r px-[2%] p-[1.5%] text-[5.4vw]  flex items-center justify-center w-fit text-white font-PvcB  md:mt-4 mt-1">
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
                      transition={{ duration: 0.7 }}
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
