import dynamic from "next/dynamic";
const TarWave = dynamic(() => import("../../TarWave"));
import { motion } from "framer-motion";
import MobileHero from "../MobileOnlyComponent/MobileHero";

export default function Hero() {
  return (
    <>
      <div className="w-full h-screen flex items-start justify-center r overflow-hidden hidden sm:flex text-red-500 bg-white z-30">
        <div className="w-1/2 h-full bg-black a left-0">
          <TarWave></TarWave>
        </div>
        <div className="w-1/2 h-full a right-0 flex flex-col items-center r justify-center">
          <div className="text-sm a bottom-[14.4vw] border-2 border-blue-700 text-black font-Neue right-[17.9%] rounded-full p-1 px-2">
            Script by Todd Fields
          </div>
          <div className="a font-Neue text-black text-center mb-[14%] text-sm">
            <div className="font-PvcI">Empire</div>
            Blanchett has delivered the performance of a lifetime
          </div>
          <motion.div className="a bottom-0 flex text-[13vw] font-Climate  ">
            {["T", "Á", "R"].map((item, index) => {
              return (
                <motion.span
                  key={index}
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                  }}
                  className="  "
                >
                  <motion.span
                    initial={{ x: "100%" }}
                    whileInView={{ x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.58, 0.28, 0.64, 0.75],
                      delay: 0.1,
                    }}
                    className="flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-700"
                  >
                    {item}
                  </motion.span>{" "}
                </motion.span>
              );
            })}
          </motion.div>
          <div className="a top-10 text-black font-Neue bg-white">
            A film by Todd Fields
          </div>
          <div className="a top-10 left-10 text-black font-Neue  ">7/10/22</div>
          <div className="a top-10 right-10 text-black font-Neue ">Tár</div>
        </div>
      </div>
      <MobileHero></MobileHero>
    </>
  );
}
