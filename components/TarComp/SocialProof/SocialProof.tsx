import ThreeButton from "../../3dButton";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const AwardsThreeComponent = dynamic(
  () => import("../ThreeComponents/AwardsThreeComponent")
);

import { useState } from "react";

export default function SocialProof() {
  const [startAnim, setStartAnim] = useState(false);
  return (
    <motion.div
      onViewportLeave={() => {
        setStartAnim(false);
      }}
      onViewportEnter={() => {
        setStartAnim(true);
      }}
      className=" w-full r h-screen py-[4%] bg-black  flex-wrap flex justify-center items-center"
    >
      <AwardsThreeComponent startAnim={startAnim}></AwardsThreeComponent>
      <div className="text-white  px-8 leading-[0.9] absolute z-30 flex flex-col items-center justify-center ">
        <div className="font-NeueT text-[8vw] ">It won</div>
        <div className="font-PvcB text-[9vw] ">Plenty</div>
        <ThreeButton text="Explore Awards"></ThreeButton>
      </div>
    </motion.div>
  );
}
