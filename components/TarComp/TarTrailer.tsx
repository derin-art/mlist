import WhiteSvg from "../../public/Svg/White.svg";
import SplineObject from "./SplineObject";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ThreeCurve from "../ThreeCurve/ThreeCurve";

export default function TarTrailer() {
  const [isGrayScale, setIsGrayScale] = useState(false);
  const [animationIsOpen, setAnimationIsOpen] = useState(false);

  const trailerUrl =
    "https://res.cloudinary.com/doaahozax/video/upload/v1680302090/y2mate.com_-_T%C3%81R_Official_Trailer_HD_In_Select_Theaters_October_7_1080p_hnzkdo.mp4";

  return (
    <div className="w-full h-screen border-y bg-black border-white flex space-x-2 will-change">
      <div className="w-[28%] h-full border-r flex flex-col">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-[52%] border-b r flex items-center justify-center bg-white"
        >
          <div className="font-Neue text-black top-4 a z-30 border-2 p-1 px-2 border-blue-700 rounded-full ">
            It's all about her
          </div>
          <ThreeCurve beginAnimation={isGrayScale}></ThreeCurve>
        </motion.div>
        <div className="h-[5%] w-full border-b bg-white text-black flex font-Climate flex items-center justify-center space-x-6">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return <div key={item}>TÁR.</div>;
          })}
        </div>
        <motion.div className="w-full h-[43%] flex items-center r will-change justify-center dirt font-PvcI text-[10vw] text-white">
          <motion.div className="absolute will-change"> tar</motion.div>
        </motion.div>
      </div>
      <div className="w-[44%] h-full flex flex-col justify-between ">
        <motion.div className="font-Neue text-white text-[5vw]  p-[2%] leading-[0.9] ">
          <div className="font-NeueT">Music </div>
          <div className="font-NeueT">and</div>
          <div>power</div>
        </motion.div>

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
          {" "}
          <span className="text-white self-end  a top-0 right-2 font-Neue border-2 border-blue-700 p-1 px-2 text-sm rounded-full">
            Trailer
          </span>
          <button className="btn a z-20">Play</button>
          <ReactPlayer url={trailerUrl} width={"100%"}></ReactPlayer>
        </motion.div>
      </div>
      <div className="w-[28%] h-full border-l flex flex-col">
        <div className="w-full h-[55%] border-b flex items-center justify-center p-[3%]">
          <div className="w-[40vh] rounded-full h-[40vh] border-2 r flex items-center justify-center r">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="font-Climate text-white text-[4vw]"
            >
              7.10.22
            </motion.div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center text-white h-[45%] r">
          <div className="a w-full h-full z-0 blur-[70px] -top-[10%]">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
              src={WhiteSvg.src}
            ></motion.img>
          </div>
          <div className="z-20 timeF font-NeueT text-[4vw]">
            158 <span className="font-Neue"> min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
