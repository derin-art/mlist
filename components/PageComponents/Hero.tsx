import dynamic from "next/dynamic";
const TarWave = dynamic(() => import("../3dComponents/TarWave"));
import { motion } from "framer-motion";
import CirclePattern from "@/public/Icons/CirclePattern";
import MobileHero from "./MobilePageComponents/MobileHero";

export default function Hero() {
  return (
    <>
      <div className="w-full h-screen flex items-start justify-center r overflow-hidden hidden sm:flex text-red-500 z-40">
        <div className="w-[50vw] h-full a r left-0 bg-black flex items-center justify-center">
          {" "}
          <div className=" w-[36vw] h-[36vw] overflow-hidden bg-black a   r flex items-center justify-center">
            <TarWave></TarWave>
          </div>
        </div>
        <div className="w-[50%]  bg-[#DFDFDF] h-full  a right-0 flex flex-col items-center r px-[120px] ">
          <div className="a  right-[-8%] rotate-[25.6deg] bottom-[-10%] w-[30vw] h-[30.5vw]">
            {CirclePattern("fill-[#C8C8C8]", "100%", "100%")}
          </div>
          <div className="font-Neue text-black  mt-[87px]  uppercase    text-left text-[1.9vw] leading-[1.1]">
            <span className="">"</span>
            The match of larger-than-life actress to larger-than-life role is
            perfection.
            <span className="">"</span>
            <div className="text-[0.9vw] tracking-normal mt-[48px]">
              The Newyork Post
            </div>
          </div>
          <div className="a bottom-[147px] text-[6.5vw] font-Neue left-[120px] text-black">
            TÁR
          </div>
        </div>
      </div>
      <MobileHero></MobileHero>
    </>
  );
}
