import { motion } from "framer-motion";
import { useState } from "react";
import CateB1 from "../../../public/Data/Tar/Images/CateB.jpg";
import WhiteBlob from "../../../public/Svg/White.svg";

const BorderAnimCont = (props: { text: string; styles: string }) => {
  return (
    <div
      className={` box  text-white font-Neue   rounded-full text-sm pl-[1.5px] pr-[1.5px] pb-[0.9px] pt-[0.9px] ${props.styles}`}
    >
      {" "}
      <div className="rounded-full p-1 overflow-hidden bg-black px-2">
        {props.text}
      </div>
    </div>
  );
};

export default function CateBlanchettCta() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black r overflow-hidden">
      <motion.img
        className="a blur-[90px] w-[40vw] h-[50vw]"
        src={WhiteBlob.src}
      ></motion.img>
      <div className="a w-full flex flex-col items-center will-change justify-center text-white md:text-[23px] text-[4vw] lS">
        <div className="text-white font-PvcI ">
          Cate <span className="font-PvcB">Blanchett</span> is
        </div>

        <motion.div className="will-change h-[420px] w-[260px]">
          <motion.div style={{ display: "inline-block", overflow: "hidden" }}>
            {" "}
            <motion.img
              whileHover={{ scale: 1.1 }}
              width={260}
              viewport={{ once: true }}
              initial={{
                x: "100%",
                width: 200,
              }}
              whileInView={{
                x: 0,
                width: 260,
                transition: {
                  duration: 0.6,
                  ease: [0.58, 0.28, 0.64, 0.75],
                },
              }}
              src={CateB1.src}
            ></motion.img>
          </motion.div>
        </motion.div>
        <div className="text-white font-PvcB md:text-[1.5vw] text-[3vw]">
          Lydia<span className="font-PvcI"> Tar</span>
        </div>
      </div>
      <BorderAnimCont
        text="   Cinematography by Florian Hoffmeister"
        styles="a top-[20%] left-[20%]"
      ></BorderAnimCont>
      <BorderAnimCont
        text="Edited by Monika Willi"
        styles="a bottom-[30%] left-[15%]"
      ></BorderAnimCont>
      <BorderAnimCont
        text="Produced by Alexandra Milchan, Scott Lambert"
        styles="a  right-[20%] bottom-[20%]"
      ></BorderAnimCont>

      <BorderAnimCont
        text="Music by 	
Hildur Guðnadóttir"
        styles="a  right-[20%]"
      ></BorderAnimCont>
    </div>
  );
}
