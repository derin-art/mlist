import { useState } from "react";
import { motion } from "framer-motion";

type MusicProps = {
  Letter: string;
  initial: number;
};

export default function Music(props: MusicProps) {
  const target = ["M", "U", "S", "I", "C"];

  const Alph = [
    "M",
    "U",
    "S",
    "I",
    "C",
    "P",
    "O",
    "W",
    "E",
    "R",
    "C",
    "Z",
    "U",
    "P",
    "O",
  ];

  const [Wrd, setWord] = useState("Bb");
  const [stuf, setStuf] = useState(props.initial);

  const runIt = () => {
    setInterval(() => {
      const random = Math.ceil(Math.random() * Alph.length);
      setStuf((prev) => {
        if (Alph[prev] === props.Letter) {
          return prev;
        } else {
          return random;
        }
      });
    }, 100);
  };

  return (
    <motion.span
      onViewportEnter={() => {
        runIt();
      }}
      className=""
    >
      {Alph[stuf]}
    </motion.span>
  );
}
