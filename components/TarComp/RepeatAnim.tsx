import { motion } from "framer-motion";

type RepeatAnimProps = {
  text: string;
};

type AppearXProps = {
  el: any;
};

export default function RepeatAnim(props: RepeatAnimProps) {
  return (
    <motion.span
      style={{
        display: "inline-block",
        overflow: "hidden",
      }}
      className="  "
    >
      <motion.span
        initial={{ opacity: 1, x: "100%" }}
        animate={{ opacity: [1, 0, 0, 1], x: [0, -100, 100, 0] }}
        viewport={{ once: false }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        className="flex items-center justify-center"
      >
        {props.text}
      </motion.span>{" "}
    </motion.span>
  );
}

function AppearX(props: AppearXProps) {
  return (
    <motion.span
      style={{
        display: "inline-block",
        overflow: "hidden",
      }}
      className="  "
    >
      <motion.span
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center"
      >
        {props.el}
      </motion.span>{" "}
    </motion.span>
  );
}

export { AppearX };
