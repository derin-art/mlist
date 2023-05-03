import { motion } from "framer-motion";
import { useState } from "react";

type RollProps = {
  triggerBool: boolean;
  text: string;
  additionalStyles: string;
};

export default function Roll(props: RollProps) {
  return (
    <div className="">
      <motion.div
        className={`${props.additionalStyles} text-center`}
        style={{ overflow: "hidden", display: "inline-block" }}
      >
        <motion.div
          animate={
            props.triggerBool
              ? {
                  y: ["50%", "-100%"],
                }
              : { y: "0%" }
          }
          transition={{
            duration: 0.6,
            ease: [0.58, 0.28, 0.64, 0.75],
          }}
        >
          <motion.div>{props.text}</motion.div>
          <motion.div className="a">{props.text}</motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
