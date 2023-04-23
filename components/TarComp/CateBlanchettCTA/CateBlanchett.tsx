import { motion } from "framer-motion";
import { useState } from "react";
import CateB1 from "../../../public/Data/Tar/Images/CateB.jpg";
import WhiteBlob from "../../../public/Svg/White.svg";

export default function CateBlanchettCta() {
  const [startAnim, setAnimStart] = useState(false);
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black r overflow-hidden">
      <motion.img
        className="a blur-[90px] w-[40vw] h-[50vw]"
        src={WhiteBlob.src}
      ></motion.img>
      <div className="a w-full flex flex-col items-center will-change justify-center text-white md:text-[23px] text-[4vw] lS">
        <div className="text-white font-PvcI ">
          Cate <span className="font-PvcB">Blanchett</span> is
        </div>

        <motion.div className="will-change h-[420px] w-[260px]">
          <motion.div
            onViewportEnter={() => {
              setAnimStart(true);
            }}
            className=""
            onViewportLeave={() => {
              setAnimStart(false);
            }}
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            {" "}
            <motion.img
              initial={{ x: "100%", width: 150 }}
              whileHover={{ scale: 1.05 }}
              animate={
                startAnim ? { x: 0, width: 260 } : { x: "100%", width: 200 }
              }
              transition={{ duration: 0.6 }}
              src={CateB1.src}
            ></motion.img>
          </motion.div>
        </motion.div>
        <div className="text-white font-PvcB md:text-[1.5vw] text-[3vw]">
          Lydia<span className="font-PvcI"> Tar</span>
        </div>
      </div>
      <div className="a top-[17%] text-white left-[20%] border-2 border-blue-700 font-Neue justify-center rounded-full text-sm items-center p-1 px-2 w-fit flex">
        Cinematography by Florian Hoffmeister
      </div>
    </div>
  );
}
