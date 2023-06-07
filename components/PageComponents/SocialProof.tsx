import ThreeButton from "../Globals/3dButton";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Bafta from "../../public/Data/Tar/Images/Bafta.jpg";
import Award from "../../public/Data/Tar/Images/Awards-2.jpg";
import Oscar from "../../public/Data/Tar/Images/Oscar.webp";

import WhiteBlob from "../../../public/Svg/White.svg";
import WhiteBlob1 from "../../../public/Svg/White1.svg";

import { useState } from "react";

export default function SocialProof() {
  const [startAnim, setStartAnim] = useState(false);
  return (
    <motion.div
      onViewportLeave={() => {
        setStartAnim(false);
      }}
      onViewportEnter={() => {
        setStartAnim(true);
      }}
      className=" w-full r h-screen py-[4%] bg-black  flex-wrap flex justify-center items-center"
    >
      <img
        className="a w-[15.6vw] h-[9.4vw] object-cover left-[7vw] top-[6vw] z-10 hidden"
        src={Oscar.src}
      ></img>
      <img
        className="a w-[18.6vw] object-cover right-[11.1vw] h-[33vw] top-[10vw]"
        src={Bafta.src}
      ></img>
      <img
        className="a w-[17vw] object-cover top-[5vw] h-[24vw] right-[20vw] hidden"
        src={Award.src}
      ></img>
      <div className=" text-white a text-center will-change bottom-[3.5vw] md:text-[2vw] sm:text-[8.4vw] text-[10vw] leading-[1] w-full flex flex-col justify-center items-center">
        <motion.div className="  rounded-full h-fit uppercase   r  text-[19.5vw] flex items-center justify-center w-fit text-white font-Neue mt-1 ">
          {["a", "w", "a", "r", "d", "s"].map((item, index) => {
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
          })}
          <span className="font-Climate a right-[0%] top-0 md:text-[3.6vw] sm:text-[8.4vw] text-[10vw]">
            "
          </span>
        </motion.div>
      </div>

      <button className="uppercase text-xs mb-8 border-2 rounded-full px-2 p-2 text-white font-Neue">
        Explore Awards
      </button>

      <div className="text-white  px-8  absolute z-30 flex flex-col items-center justify-center ">
        <div className="leading-[5.5vw] hidden ">
          {" "}
          <div className="font-Neue text-[4.6vw] uppercase text-center">
            It won
          </div>
          <div className="font-Neue text-[4.6vw] uppercase ">Plenty</div>
        </div>
      </div>
    </motion.div>
  );
}
