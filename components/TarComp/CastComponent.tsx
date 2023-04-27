type CastComp = {
  img: any;
  name: string;
  as: string;
  syle?: string;
  id: string;
  number: number;
  no: number;
};
import dynamic from "next/dynamic";
const Distortion = dynamic(() => import("../DistortText"));
import { motion } from "framer-motion";

export default function CastComponent(props: CastComp) {
  const split = props.name.split(" ");

  const characterNameSplit = props.as.split(" ");

  return (
    <motion.div
      className={`flex items-center mb-[8%] lg:mb-[1%] justify-between    p-2`}
    >
      {" "}
      <div
        className={`md:w-[20vw] w-[60vw]  r  text-white font-Climate flex flex-col items-center  py-[4%]`}
      >
        <div className="flex space-x-2 items-center mb-4">
          <span
            id={props.id}
            className=" font-Climate h-[60px] border-2 backdrop-blur-sm rounded-full border-white w-fit  top-[0%]  overflow-hidden left-[0%] z-20"
          >
            <Distortion id={props.id} text={split[0]}></Distortion>
          </span>
          <span className="font-PvcI md:text-[1.4vw] text-sm">{split[1]}</span>
        </div>
        <img
          className="lg:w-[120%] w-full duration-300 "
          src={props.img.src}
        ></img>

        <div className="font-Neue mt-4 border w-full bg-white text-black px-2 r overflow-hidden">
          {" "}
          is {characterNameSplit[0]}{" "}
          <span className="">{characterNameSplit[1]}</span>
          <span className="a right-2  p-2 pt-1 rounded-full border-blue-700 border-2">
            {props.no}
          </span>
        </div>
        <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
      </div>
    </motion.div>
  );
}
