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
        <motion.div className="roll">
          <motion.div>{props.text}</motion.div>
          <motion.div className="a">{props.text}</motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
