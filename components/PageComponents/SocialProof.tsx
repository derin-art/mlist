import ThreeButton from "../Globals/3dButton";
import { motion } from "framer-motion";
import Bafta from "../../public/Data/Tar/Images/Bafta.jpg";
import Award from "../../public/Data/Tar/Images/Awards-2.jpg";
import Oscar from "../../public/Data/Tar/Images/Oscar.webp";

import { useState } from "react";
import Link from "next/link";

const TextAnimation = () => {
  return (
    <>
      {" "}
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
              initial={{ opacity: 1, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.4,
                ease: [0.58, 0.28, 0.64, 0.75],
                delay: index * 0.05,
              }}
              className="flex items-center justify-center "
            >
              {item}
            </motion.div>{" "}
          </motion.div>
        );
      })}
    </>
  );
};

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
      className="w-full r h-screen py-[4%] bg-black flex-wrap flex justify-center items-center"
    >
      <img
        className="a w-[18.6vw] object-cover right-[11.1vw] h-[70vh] top-[10vw]"
        src={Bafta.src}
      ></img>

      <div className=" text-white a text-center will-change bottom-[3.5vw] md:text-[2vw] sm:text-[8.4vw] text-[10vw] leading-[1] w-full flex flex-col justify-center items-center">
        <motion.div className="rounded-full h-fit uppercase r text-[19.5vw] flex items-center justify-center w-fit text-white font-Neue mt-1 ">
          <TextAnimation />
          <span className="font-Climate a right-[0%] top-0 md:text-[3.6vw] sm:text-[8.4vw] text-[10vw]">
            "
          </span>
        </motion.div>
      </div>

      <Link className="mb-[10%]" href={"/awards"}>
        <ThreeButton text="Explore Awards" />
      </Link>
    </motion.div>
  );
}
