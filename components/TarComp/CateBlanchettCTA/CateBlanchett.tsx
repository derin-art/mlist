import { motion } from "framer-motion";
import { useState } from "react";
import CateB1 from "../../../public/Data/Tar/Images/CateB.jpg";
import WhiteBlob from "../../../public/Svg/White.svg";
import Image from "next/image";

const BorderAnimCont = (props: { text: string; styles: string }) => {
  return (
    <div
      className={`  text-white font-Neue  box  rounded-full text-sm pl-[1.5px] pr-[1.5px] pb-[0.9px] pt-[0.9px] ${props.styles}`}
    >
      {" "}
      <div className="rounded-full p-1 overflow-hidden bg-black px-2">
        {props.text}
      </div>
    </div>
  );
};
const BorderAnimContTwo = (props: { text: string; styles: string }) => {
  return (
    <div
      className={`rounded-full p-1 px-2 text-sm overflow-hidden border-2 px-2 text-white ${props.styles} font-Neue`}
    >
      {props.text}
    </div>
  );
};

export default function CateBlanchettCta() {
  return (
    <div className="min-h-[100vh] w-full flex items-center justify-center r overflow-hidden sm:my-[8vw]  ">
      <motion.img
        className="a blur-[120px] w-[30vw] h-[30vw]"
        src={WhiteBlob.src}
      ></motion.img>
      <div className="a w-full flex flex-col items-center will-change justify-center text-white md:text-[23px] text-[4vw] lS">
        <div className="text-white font-PvcI ">
          Cate <span className="font-PvcB">Blanchett</span> is
        </div>
        <Image
          alt="cate-profile-img"
          width={420}
          height={260}
          src={CateB1.src}
          className="h-[420px] w-[260px]"
        ></Image>

        <div className="text-white font-PvcB md:text-[1.5vw] text-[3vw]">
          Lydia<span className="font-PvcI"> Tar</span>
        </div>
      </div>
      <BorderAnimContTwo
        text="   Cinematography by Florian Hoffmeister"
        styles="a top-[20%] left-[20%]"
      ></BorderAnimContTwo>
      <BorderAnimContTwo
        text="Edited by Monika Willi"
        styles="a bottom-[30%] left-[15%]"
      ></BorderAnimContTwo>
      <BorderAnimContTwo
        text="Produced by Alexandra Milchan, Scott Lambert"
        styles="a  right-[20%] bottom-[20%]"
      ></BorderAnimContTwo>

      <BorderAnimContTwo
        text="Music by 	
Hildur Guðnadóttir"
        styles="a  right-[20%]"
      ></BorderAnimContTwo>
    </div>
  );
}
