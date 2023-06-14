import { useState } from "react";

import { motion } from "framer-motion";

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
    <motion.div
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      style={{ display: "inline-block", overflow: "hidden" }}
      className="font-Neue z-30 border-2 rounded-full r btn hover:cursor"
    >
      <motion.div
        animate={isHovered ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.4 }}
        className=""
      >
        <motion.p className="uppercase flex items-center justify-center p-1">
          {" "}
          {props.text ? props.text : "Explore Something"}
        </motion.p>

        {/* Duplicate Text for roll Animation */}
        <motion.p className="a uppercase flex items-center justify-center p-1">
          {" "}
          {props.text ? props.text : "Explore Something"}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
