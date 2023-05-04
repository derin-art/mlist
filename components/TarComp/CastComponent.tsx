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
const Distortion = dynamic(() => import("../DistortText"));
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
        className={`sm:w-[30vw] md:w-[30vw] lg:w-[20vw] w-[60vw]  r  text-white font-Climate flex flex-col items-center  py-[4%]`}
      >
        <div className="flex space-x-2 items-center mb-4">
          <span
            id={props.id}
            className={`font-Climate ${
              !props.disableDistortText &&
              "h-[60px] border-2 rounded-full border-white w-fit  top-[0%]  overflow-hidden left-[0%] z-20"
            } `}
          >
            <div className="font-white text-[20px] sm:text-[35px] leading-[1] border-4 rounded-full px-3 p-2 ">
              {split[0]}
            </div>
            {!props.disableDistortText && (
              <Distortion id={props.id} text={split[0]}></Distortion>
            )}
          </span>
          <span className="font-PvcI md:text-[2vw] text-sm">{split[1]}</span>
        </div>
        <Image
          alt={props.name}
          width={400}
          height={600}
          className="lg:w-[120%] w-full duration-300 "
          src={props.img.src}
        ></Image>

        <div className="font-Neue mt-4 border-2 rounded-full border-blue-700 w-full text-white px-2 r overflow-hidden p-1 text-sm">
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
