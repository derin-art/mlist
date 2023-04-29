import Aud1 from "../../../public/Data/Tar/Images/Aud1.jpg";
import Aud2 from "../../../public/Data/Tar/Images/Aud2.jpg";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function LocationCta() {
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
          <div className="font-Neue text-sm ml-[1%] mb-[6%] border-2 p-1 px-2 rounded-full w-fit border-blue-700">
            Shot at the Majestic
          </div>
          <div className="leading-[1]">
            <div
              style={{ display: "inline-block", overflow: "hidden" }}
              className="border-2 rounded-full px-[4%] p-3"
            >
              <div className=" ">Dresden </div>
            </div>
            <div className="font-PvcI">Philharmonic</div>
          </div>
        </div>
        <div className="a font-PvcB text-white bottom-[40%] z-30 right-[10%] text-[3vw] leading-[0.9]">
          <motion.div
            style={{ display: "inline-block", overflow: "hidden" }}
            className="border-2 rounded-full px-[4%] backdrop-grayscale p-3 "
          >
            <motion.div
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, ease: [0.58, 0.28, 0.64, 0.75] }}
            >
              Berlin,{" "}
            </motion.div>
          </motion.div>
          <div className="font-PvcI  text-right ">Germany</div>
        </div>
        <div className="w-[26%] a right-[20%] top-[20%] ">
          <motion.img src={Aud1.src} className={`w-full `}></motion.img>
        </div>
        <div className="h-[40%] a bottom-[10%] left-[5%] r">
          <div className="text-sm text-white text-right font-Neue  mb-3">
            <span className="border-2 z-30 p-1 px-2 rounded-full border-blue-700">
              51.0504° N, 13.7373° E
            </span>
          </div>
          <motion.img src={Aud2.src} className={`h-full z-0 `}></motion.img>
        </div>
      </div>
    </motion.div>
  );
}
