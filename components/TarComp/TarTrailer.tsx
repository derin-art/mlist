import WhiteSvg from "../../public/Svg/White.svg";
import WhiteSvg1 from "../../public/Svg/White1.svg";

import dynamic from "next/dynamic";

import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useState } from "react";

const ThreeCurve = dynamic(() => import("../ThreeCurve/ThreeCurve"));

export default function TarTrailer() {
  const [isGrayScale, setIsGrayScale] = useState(false);
  const [animationIsOpen, setAnimationIsOpen] = useState(false);

  const cast = [
    {
      as: "Lydia Tár",
      name: "Cate Blanchett",

      style: "top-[10%] left-[20%] ",
      id: "sdmsd",
      no: 1,
    },
    {
      as: "Sharon Goodnow",
      name: "Nina Hoss",

      style: "top-[25%] right-[20%]",
      id: "sdmsd1",
      no: 2,
    },
    ,
    {
      as: "Olga Metkina",
      name: "Sophie Kauer",

      style: "top-[40%] left-[20%]",
      id: "sdmsd2",
      no: 3,
    },
    {
      as: "Francesca Lentini",
      name: "Noémie Merlant",

      style: "top-[60%] right-[20%]",
      id: "sdmsd3",
      no: 4,
    },
    ,
    {
      as: "Eliot Kaplan",
      name: "Mark Strong",

      style: "top-[70%] left-[20%]",
      id: "sdmsd4",
      no: 5,
    },
    {
      as: "Andris Davis",
      name: "Julian Glover",

      style: "top-[70%] left-[20%]",
      id: "sdmsd4",
      no: 5,
    },
  ];

  const trailerUrl =
    "https://res.cloudinary.com/doaahozax/video/upload/v1680302090/y2mate.com_-_T%C3%81R_Official_Trailer_HD_In_Select_Theaters_October_7_1080p_hnzkdo.mp4";

  return (
    <div>
      <div className="h-screen w-full  flex r flex sm:hidden items-center justify-center ">
        <div></div>
        <div>
          <motion.div
            onViewportEnter={() => {
              setIsGrayScale(true);
            }}
            onViewportLeave={() => {
              setIsGrayScale(false);
            }}
            className={`r w-full flex items-center justify-center align-center delay-500 duration-[900ms] ${
              !isGrayScale ? "grayscale" : ""
            }`}
          >
            <span className="text-white self-end  a top-0 right-2 font-Neue border-2 border-blue-700 p-1 px-2 text-sm rounded-full">
              Trailer
            </span>
            <button className="btn a z-20">Play</button>
            <ReactPlayer url={trailerUrl} width={"100%"}></ReactPlayer>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-screen border-y bg-black  sm:flex  will-change hidden border-ultraGray ">
        <div className="w-[28%] h-full border-r flex flex-col border-ultraGray">
          <div className="w-full flex items-center justify-center text-white h-[43%] r">
            <div className="a w-full h-full z-0  -top-[10%]">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.58, 0.28, 0.64, 0.75],
                }}
                className="w-full blur-[100px]"
                src={WhiteSvg.src}
              ></motion.img>
            </div>
            <motion.div style={{ display: "inline-block", overflow: "hidden" }}>
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-20 timeF font-NeueT text-[5.5vw]"
              >
                158 <span className="font-Neue "> min</span>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full h-[57%] border-t flex items-center justify-center p-[3%] border-ultraGray">
            <div className="w-[40vh] rounded-full h-[40vh] border-4 r flex items-center justify-center r">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.58, 0.28, 0.64, 0.75] }}
                className="font-Neue text-white text-[5vw]"
              >
                7.<span className="font-NeueT">10</span>.22
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-[44%] h-full flex flex-col justify-center r ">
          <motion.div
            className={`r w-full flex items-center justify-center align-center delay-500 duration-[900ms] `}
          >
            <span className="text-white self-end  a top-[24%] right-2 font-Neue border-2 border-blue-700 p-1 px-2 text-sm rounded-full">
              Trailer
            </span>
            <div className="text-sm text-ultraGray font-bold font-Neue top-2 a left-2 hidden ">
              <div className="">STARING</div>
              {cast.map((item, index) => {
                return (
                  <div className="" key={index}>
                    {item?.name}
                  </div>
                );
              })}
            </div>
            <button className="btn a z-20 uppercase">Play</button>
            <ReactPlayer
              url={trailerUrl}
              width={"100%"}
              height={"100vh"}
            ></ReactPlayer>
          </motion.div>
        </div>
        <div className="w-[28%] h-full flex flex-col-reverse border-l z-10 border-ultraGray">
          <motion.div className="w-full h-[40%] flex items-center r will-change justify-center overflow-hidden items-center dirt font-PvcI text-[5vw] text-white">
            <motion.div className="absolute will-change  h-fit font-Neue border-[5px] rounded-full p-1 px-2 uppercase">
              {" "}
              Maestro
            </motion.div>
          </motion.div>

          <motion.div className="w-full h-[55%] border-t r flex items-center justify-center bg-white border-ultraGray">
            <div className="font-Neue text-black top-4 a z-30 border-2 p-1 px-2 border-blue-700 rounded-full capitalize">
              It's all about her
            </div>
            {/*   <ThreeCurve beginAnimation={isGrayScale}></ThreeCurve> */}
          </motion.div>
          <div className="h-[5%]  w-full overflow-hidden  bg-white border-y text-black flex font-Neue font-bold flex items-center justify-center space-x-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
              return (
                <div className="scale-x-[1.4]" key={item}>
                  TAR.
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
