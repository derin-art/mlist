import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WhiteBlob from "../../../public/Svg/White.svg";
import WhiteBlob1 from "../../../public/Svg/White1.svg";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Lead from "../../public/Data/Tar/Images/Title23.jpg";
import Image from "next/image";
import Link from "next/link";

const ThreeButton = dynamic(() => import("../Globals/3dButton"));

export default function SynopsisCta() {
  const router = useRouter();

  return (
    <motion.div className="min-h-screen  overflow-hidden border-ultraBlack border-b w-full flex items-center justify-center font-Climate text-3xl r ">
      <div className="flex items-center justify-center a r bottom-[40.8%]">
        <Link
          href={"/synopsis"}
          style={{ display: "inline-block" }}
          className=" a"
        >
          {" "}
          <ThreeButton
            ExploreSynopsis={true}
            text={"Explore Synopsis"}
          ></ThreeButton>
        </Link>

        <AnimatePresence>
          <motion.div
            key={"df"}
            animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            exit={{ scale: 2 }}
            layout
            layoutId="image"
            transition={{ duration: 0.6 }}
            className="w-[391px] h-[222px] overflow-hidden "
          >
            <motion.img
              initial={{ scale: 1.7 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              src={Lead.src}
              className={" w-full object-cover"}
            ></motion.img>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="a text-white text-[2.4vw] font-Neue top-[6.9vw]">
        <span className="font-Climate  md:text-[3.6vw] sm:text-[8.4vw] text-[10vw]">
          "
        </span>
        THE NARCISSM OF THE SMALLEST DIFFERENCES LEADS TO THE MOST BORING
      </div>
      <div className=" text-white a text-center will-change bottom-[3.5vw] md:text-[2vw] sm:text-[8.4vw] text-[10vw] leading-[1] w-full flex flex-col justify-center items-center">
        <motion.div className="  rounded-full h-fit uppercase   r  text-[14.4vw] flex items-center justify-center w-fit text-white font-Neue mt-1 ">
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
          <span className="font-Climate a right-[0%] top-0 md:text-[3.6vw] sm:text-[8.4vw] text-[10vw]">
            "
          </span>
        </motion.div>
      </div>
      <div className="gridF1 font-Neue  p-2 text-white flex h-screen r w-full  justify-center items-center ">
        <div className="md:text-[1vw] sm:text-[8.4vw] hidden text-[10vw] text-white font-Neue mb-4 sm:mb-[10vw] uppercase">
          <span className="">Lydia</span> Tar-
        </div>
      </div>
    </motion.div>
  );
}
