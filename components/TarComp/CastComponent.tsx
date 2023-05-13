type CastComp = {
  img: any;
  name: string;
  as: string;
  syle?: string;
  id: string;
  number: number;
  no: number;
  disableDistortText?: boolean;
};
import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CastComponent(props: CastComp) {
  const split = props.name.split(" ");

  const characterNameSplit = props.as.split(" ");

  return (
    <motion.div
      className={`flex items-center mb-[8%] lg:mb-[1%] justify-between    p-2`}
    >
      {" "}
      <div
        className={`sm:w-[30vw] md:w-[30vw] lg:w-[24vw] w-[60vw]  r  text-white font-Climate flex flex-col items-center  py-[4%]`}
      >
        <div className="flex space-x-2 items-center mb-4 hidden">
          <span
            id={props.id}
            className={`font-Climate ${
              !props.disableDistortText &&
              "h-[60px] border-2 rounded-full border-white w-fit  top-[0%]  overflow-hidden left-[0%] z-20"
            } `}
          >
            <div className="font-white text-[20px] sm:text-[35px] lg:text-[40px] leading-[1] border-4 rounded-full px-4 p-2 ">
              {split[0]}
            </div>
          </span>
          <span className="font-PvcI md:text-[2vw] text-sm">{split[1]}</span>
        </div>
        <div className="flex space-x-2 items-center  font-Neue border-b w-full a backdrop-blur-md">
          <span id={props.id} className={` `}>
            <div className=" ">{split[0]}</div>
          </span>
          <span className="">{split[1]}</span>
        </div>
        <motion.div style={{ display: "inline", overflow: "hidden" }}>
          <motion.img
            alt={props.name}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.25 }}
            width={400}
            height={600}
            className="lg:w-[120%] w-full duration-300"
            src={props.img.src}
          ></motion.img>
        </motion.div>

        <div className="font-Neue mt-4 border-2 rounded-full border-white uppercase  w-full text-white px-2 r overflow-hidden p-1 text-sm">
          {" "}
          is {characterNameSplit[0]}{" "}
          <span className="">{characterNameSplit[1]}</span>
          <span className="a right-2  p-2 pt-1 rounded-full border-blue-700 border-2">
            {props.no}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
