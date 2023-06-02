import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
/* const ThreeCanvas = dynamic(() => import("./ThreeCanvas")); */
import { motion, AnimatePresence } from "framer-motion";

interface ThreeButtonProps {
  text?: string;
  ExploreSynopsis?: boolean;
  ExploreAwards?: boolean;
}

export default function ThreeButton(props: ThreeButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const textProps = {
    no: 0,
    wrd1Length: 0,
    wrd2Length: 0,
  };

  if (props.text) {
    const words = props.text.split(" ");
    textProps.no = words.length;
    textProps.wrd1Length = words[0].length;
    textProps.wrd2Length = words[1].length;
  }

  return (
    <div className="font-Climate  rounded-full text-sm w-fit p-3 text-white r flex items-center justify-center">
      
      <motion.p
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        className="z-30 border-2  hover:border-transparent duration-[400ms]  hover:cursor-pointer px-2 p-2 uppercase btn rounded-full  flex items-center justify-center"
      >
        {" "}
        {props.text ? props.text : "Explore Something"}
      </motion.p>
    </div>
  );
}
