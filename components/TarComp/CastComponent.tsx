type CastComp = {
  img: any;
  name: string;
  as: string;
  syle?: string;
  id: string;
  number: number;
};
import dynamic from "next/dynamic";
const Distortion = dynamic(() => import("../DistortText"));
import { motion } from "framer-motion";

export default function CastComponent(props: CastComp) {
  const split = props.name.split(" ");

  const characterNameSplit = props.as.split(" ");

  return (
    <motion.div
      className={`flex items-center mb-[8%] lg:mb-[4%] justify-between ${
        props.number % 2 ? "ml-[10%]" : "mr-[10%]"
      } `}
    >
      {" "}
      <motion.div
        className={`font-Music   text-[20vw] px-[6vw] hidden  md:block ${
          props.number % 2 ? "md:hidden" : ""
        }`}
      >
        {props.number + 1}
      </motion.div>
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
          className="lg:w-[85%] w-full duration-300 "
          src={props.img.src}
        ></img>

        <div className="font-NeueT mt-4">
          {" "}
          is {characterNameSplit[0]}{" "}
          <span className="border-2 rounded-full p-2 px-4">
            {characterNameSplit[1]}
          </span>
        </div>
        <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
      </div>
      <motion.div
        className={`font-Music   text-[20vw] px-[6vw] hidden md:block ${
          props.number % 2 ? "" : "md:hidden"
        }`}
      >
        {props.number + 1}
      </motion.div>
    </motion.div>
  );
}
