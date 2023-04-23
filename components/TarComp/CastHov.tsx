type CastProps = {
  name: string;
  as: string;
  img: any;
  speed: number;
};
import { AnimatePresence, motion } from "framer-motion";
import { useParallax, Parallax } from "react-scroll-parallax";

import { useState, useEffect } from "react";
import RightArr from "../../public/Icons/RightArr";

export default function CastHov(props: CastProps) {
  const [over, setOver] = useState(false);
  const [pe, setPe] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const xPos = (e.x / window.innerWidth) * 100;
      const yPos = (e.y / window.innerHeight) * 100;
      const act = { x: xPos, y: yPos };
      setPe((prev: any) => {
        return act;
      });
      /* setMouseXposition(e.clientX); */
    });
  }, []);
  return (
    <Parallax speed={props.speed}>
      <div className="castT flex flex-col items-center justify-center group r">
        <AnimatePresence>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            initial={{
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            key={String(over)}
            className="a"
          >
            {over && (
              <motion.div
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                animate={over ? { x: pe.x, y: pe.y } : {}}
              >
                {" "}
                <motion.img
                  animate={over ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut", damping: 2 }}
                  initial={{ opacity: 0 }}
                  width={300}
                  src={props.img.src}
                ></motion.img>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div
          className="font-Neue text-red-500 z-30 p-4 "
          onMouseLeave={() => {
            setOver(false);
          }}
          onMouseOver={() => {
            setOver(true);
          }}
        >
          <div className="">{props.name}</div>
          <div className="flex items-center">
            as
            <span className="p-1 -skew-x-6 rounded-full ml-2 group-hover:opacity-100 opacity-0 duration-[400ms]">
              {RightArr("20", "20", "fill-red-500")}
            </span>
          </div>
          <div>{props.as}</div>
        </div>
      </div>
    </Parallax>
  );
}
