import { Suspense, useState } from "react";
import ThreeCanvas from "./ThreeCanvas";
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
      <Suspense fallback={null}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.2,
              ease: [0.58, 0.28, 0.64, 0.75],
            }}
            key={isHovered.toString()}
            className=""
          >
            {isHovered && (
              <ThreeCanvas
                ExploreAwards={props.ExploreAwards}
                ExploreSynopisis={props.ExploreSynopsis}
                textProps={textProps}
                isHovered={isHovered}
              ></ThreeCanvas>
            )}
          </motion.div>
        </AnimatePresence>
      </Suspense>
      <motion.p
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        className="z-30 border-2  hover:border-transparent duration-[400ms]  hover:cursor-pointer p-2 rounded-full w-[210px] flex items-center justify-center"
      >
        {" "}
        {props.text ? props.text : "Explore Something"}
      </motion.p>
    </div>
  );
}
