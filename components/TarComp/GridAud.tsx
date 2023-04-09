import { useState } from "react";
import Aud1 from "../../public/Data/Tar/Images/Aud1.jpg";
import Aud2 from "../../public/Data/Tar/Images/Aud2.jpg";
import { motion } from "framer-motion";

export default function GridAud() {
  return (
    <motion.div className="w-full h-screen otherGrid  overflow-hidden ">
      <div className="w-full h-full r md:hidden">
        <div className="a font-PvcB text-white top-[5%] right-[5%] text-[7vw]">
          <div className="font-NeueT text-[4vw] ml-[1%] mb-[4%] text-right">
            Shot at the
          </div>
          <div className="border-2 rounded-full px-[4%] backdrop-grayscale">
            Dresden{" "}
          </div>
          <div className="font-PvcI text-right">Philharmonic</div>
        </div>
        <div className="a font-PvcB text-white bottom-[40%] z-30 left-[10%] text-[7vw]">
          <div className="border-2 rounded-full px-[4%] backdrop-grayscale">
            Berlin,{" "}
          </div>
          <div className="font-PvcI">Germany</div>
        </div>
        <div className="w-[60%]">
          <img src={Aud1.src} className="w-full"></img>
        </div>
        <div className="h-[40%] a bottom-[10%] -right-[40%]">
          <img src={Aud2.src} className="h-full"></img>
        </div>
      </div>
      <div className="w-full h-full r hidden md:block">
        <div className="a font-PvcB text-white top-[10%] left-[5%] text-[3vw]">
          <div className="font-NeueT text-[1.7vw] ml-[1%] mb-[4%]">
            Shot at the
          </div>
          <div className="border-2 rounded-full px-[4%]">Dresden </div>
          <div className="font-PvcI">Philharmonic</div>
        </div>
        <div className="a font-PvcB text-white bottom-[40%] z-30 right-[10%] text-[3vw]">
          <motion.div
            style={{ display: "inline-block", overflow: "hidden" }}
            className="border-2 rounded-full px-[4%] backdrop-grayscale"
          >
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Berlin,{" "}
            </motion.div>
          </motion.div>
          <div className="font-PvcI">Germany</div>
        </div>
        <div className="w-[26%] a right-[20%] top-[5%] ">
          <motion.img
            initial={{ rotate: "0deg", scale: 0.7 }}
            whileInView={{ rotate: "20deg", scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src={Aud1.src}
            className={`w-full `}
          ></motion.img>
        </div>
        <div className="h-[40%] a bottom-[10%] left-[5%]">
          <motion.img src={Aud2.src} className={`h-full `}></motion.img>
        </div>
      </div>
    </motion.div>
  );
}
