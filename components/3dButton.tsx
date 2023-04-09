import { useState } from "react";
import ThreeCanvas from "./ThreeCanvas";
import { motion, AnimatePresence } from "framer-motion";
export default function ThreeButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="font-Climate  rounded-full text-sm w-fit p-3 text-white r flex items-center justify-center">
      <ThreeCanvas isHovered={isHovered}></ThreeCanvas>
      <motion.p
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        className="z-30 border-2  hover:cursor-pointer p-2 rounded-full"
      >
        {" "}
        Explore Something
      </motion.p>
    </div>
  );
}
