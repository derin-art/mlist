import Aud1 from "../../../public/Data/Tar/Images/Aud1.jpg";
import Aud2 from "../../../public/Data/Tar/Images/Aud2.jpg";
import Alt1 from "../../../public/Data/Tar/Images/Aud.png";
import Alt2 from "../../../public/Data/Tar/Images/AltAud.png";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Roll from "../MicroInteractions/Roll";
import { useState } from "react";

export default function LocationCta() {
  const [triggerAnim, setTriggerAnim] = useState(false);
  return (
    <motion.div className="w-full h-screen otherGrid  overflow-hidden my-[5vw] mb-[7vw]">
      <div className="w-full h-full r md:hidden">
        <div className="a font-PvcB text-white top-[5%] right-[5%] text-[7vw]">
          <div className="font-Neue text-[4vw] ml-[1%] mb-[4%] text-right">
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
        <div className="w-[100%] a bottom-[10%] -right-[30%]">
          <img src={Aud2.src} className="h-full"></img>
        </div>
      </div>
      <div className="w-full h-full r hidden md:block">
        <div className="a font-PvcB text-black top-[10%] left-[5%] text-[3vw]">
          <div className="font-Neue hidden text-sm ml-[1%] mb-[6%] w-fit ">
            <Roll
              text="Shot at the Majestic"
              key={"2"}
              triggerBool={triggerAnim}
              additionalStyles="border-2 border-blue-700 p-1 px-2 rounded-full"
            ></Roll>
          </div>
          <div className="leading-[1] text-black hidden">
            <div
              style={{ display: "inline-block", overflow: "hidden" }}
              className="border-2 border-black rounded-full px-[4%] p-3"
            >
              <Roll
                text="Dresden"
                triggerBool={triggerAnim}
                additionalStyles=""
              ></Roll>
            </div>
            <div className="font-Neue">Philharmonic</div>
          </div>
        </div>
        <div className="a font-PvcB text-white bottom-[40%] z-30 right-[10%] text-[3vw] leading-[0.9] hidden">
          <motion.div
            style={{ display: "inline-block", overflow: "hidden" }}
            className="border-2 rounded-full px-[4%] backdrop-grayscale p-3 "
          >
            <Roll
              text="Berlin"
              triggerBool={triggerAnim}
              additionalStyles=""
            ></Roll>
          </motion.div>
          <div className="font-PvcI  text-right ">Germany</div>
        </div>
        <div className="w-[26%] a right-[20%] top-[20%] ">
          <motion.img
            src={Aud1.src}
            className={`w-full border hidden`}
          ></motion.img>
        </div>
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full flex flex-col">
            <div className="h-full bg-white"></div>
            <img className=" object-cover" src={Alt2.src}></img>
          </div>
          <div className="w-1/2 overflow-hidden h-full">
            <img className="h-full object-cover" src={Alt1.src}></img>
          </div>
        </div>
        <div className="w-[40%] a bottom-[10%] left-[5%] r">
          <motion.div
            onViewportLeave={() => {
              setTriggerAnim(false);
            }}
            onViewportEnter={() => {
              setTriggerAnim(true);
            }}
            className="text-sm text-white text-right font-Neue  mb-3 hidden"
          >
            <Roll
              text="51.0504° N, 13.7373° E"
              key={"1"}
              triggerBool={triggerAnim}
              additionalStyles="border-2 z-30 p-1 hidden px-2 rounded-full border-blue-700"
            ></Roll>
          </motion.div>
          <motion.img
            src={Aud2.src}
            className={`h-full z-0 border hidden`}
          ></motion.img>
        </div>
      </div>
    </motion.div>
  );
}
