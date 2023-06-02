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
    <motion.div className="w-full h-screen otherGrid  overflow-hidden border-b border-black ">
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
        <div className="a font-PvcB text-black top-[10%] left-[5%] text-[3vw]"></div>

        <div className="w-[26%] a right-[20%] top-[20%] ">
          <motion.img
            src={Aud1.src}
            className={`w-full border hidden`}
          ></motion.img>
        </div>
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full flex flex-col r">
            <div className="overflow-hidden h-[62vw] w-full r">
              <motion.img
                whileInView={{
                  width: "100%",
                  scale: 1,
                  objectPosition: "right",
                }}
                initial={{ scale: 1.6 }}
                transition={{ duration: 0.6 }}
                className=" object-cover h-full "
                src={Alt2.src}
              ></motion.img>
            </div>
            <div className="h-[28vw] flex items-center  bg-white font-Neue text-[2.6vw] r leading-[1.1] uppercase pl-[72px] ">
              <div>
                {" "}
                Shot at the Dresden
                <div> Phiharmonic, </div>
                <div>Berlin, Germany.</div>
              </div>
              <div className="a bottom-2 text-base font-mono left-2 hidden ">
                51.0504° N, 13.7373° E
              </div>{" "}
            </div>
          </div>
          <div className="w-1/2 overflow-hidden h-full">
            <motion.img
              whileInView={{
                width: "100%",
                scale: 1,
                objectPosition: "center",
              }}
              initial={{ scale: 1.6 }}
              transition={{ duration: 0.6 }}
              className="h-full object-cover"
              src={Alt1.src}
            ></motion.img>
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
