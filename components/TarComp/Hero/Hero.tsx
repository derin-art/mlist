import dynamic from "next/dynamic";
const TarWave = dynamic(() => import("../../TarWave"));
import { motion } from "framer-motion";
import MobileHero from "../MobileOnlyComponent/MobileHero";

export default function Hero() {
  return (
    <>
      <div className="w-full h-screen flex items-start justify-center r overflow-hidden hidden sm:flex text-red-500 bg-white z-30">
        <div className="w-1/2 h-full bg-black a left-0 r flex items-center justify-center">
          <TarWave></TarWave>
          <motion.div className="a bottom-0 flex text-[8vw] font-PvcB">
            {["T", "A", "R"].map((item, index) => {
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
                      delay: 0.2,
                    }}
                    className="flex items-center justify-center text-white"
                  >
                    {item}
                  </motion.span>{" "}
                </motion.span>
              );
            })}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-700 to-purple-700">
              .
            </span>
          </motion.div>
        </div>
        <div className="w-1/2 h-full a right-0 flex flex-col items-center r justify-center backdrop-blur-sm">
          <div className="text-sm a bottom-[14.4vw] border-2 hidden border-blue-700 text-black font-Neue right-[17.9%] rounded-full p-1 px-2">
            Script by Todd Fields
          </div>
          <div className="a font-Neue text-black text-center text-[4vw] leading-[0.9]">
            <span className="font-Climate">"</span>
            The match of larger-than-life actress to larger-than-life role is
            perfection.
            <span className="font-Climate">"</span>
          </div>

          <div className="a top-10 text-black font-Neue  uppercase border-2 border-black rounded-full  px-2 p-1">
            A film by Todd Fields
          </div>
          <div className="a top-10 left-10 text-black font-Neue  ">7/10/22</div>
          <div className="a top-10 right-10 text-black font-Neue uppercase">
            Tár
          </div>
        </div>
      </div>
      <MobileHero></MobileHero>
    </>
  );
}

/* text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 */
