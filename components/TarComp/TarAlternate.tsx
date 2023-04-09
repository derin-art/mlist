import WhiteSvg from "../../public/Svg/White.svg";
import SplineObject from "./SplineObject";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TarAlternate() {
  const [isGrayScale, setIsGrayScale] = useState(false);
  const trailerUrl =
    "https://res.cloudinary.com/doaahozax/video/upload/v1680302090/y2mate.com_-_T%C3%81R_Official_Trailer_HD_In_Select_Theaters_October_7_1080p_hnzkdo.mp4";
  const TarData = [
    <p>
      Title: <span className="bg-white text-black">Tar</span>
    </p>,
    <p>Written by: Todd Fields</p>,
    <p>
      Cinematography:{" "}
      <span className="bg-white text-black">Florian Hoffmeister </span>
    </p>,
    <p>Music by: Hildur</p>,
    <p>
      Running time: <span className="bg-white text-black">158 minutes</span>
    </p>,
    <p>Languages: English, German, French, Tagalog</p>,
    <p>Edited by: Monnica Willi</p>,
  ];
  return (
    <div className="w-full h-screen border-y bg-black border-white flex space-x-2">
      <div className="w-[28%] h-full border-r flex flex-col">
        <div className="w-full h-[52%] border-b flex items-center justify-center">
          <SplineObject></SplineObject>
          {/* <div className=" tex letterW font-Climate border rounded-[10px] ">
            <div className="point-burst text-sm  "></div>
          </div> */}
        </div>
        <div className="h-[5%] w-full border-b bg-white text-black flex font-Climate flex items-center justify-center space-x-6">
          <div>Tar</div>
          <div>Tar</div>
          <div>Tar</div>
          <div>Tar</div>
          <div>Tar</div>
        </div>
        <motion.div className="w-full h-[43%] flex items-center r justify-center dirt font-Music text-[10vw] text-white">
          <motion.div
            initial={{ y: 20, scaleY: 0.6 }}
            whileInView={{
              y: [20, -20, 40, -20],
              scaleY: [0.6, 0.5, 1.2, 1],

              opacity: 1,
              transition: { type: "spring" },
            }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.3,
              bounce: 0.6,
            }}
            className="absolute"
          >
            {" "}
            Tar
          </motion.div>
        </motion.div>
      </div>
      <div className="w-[44%] h-full flex flex-col justify-between ">
        <motion.div className="font-Neue text-white musicP flex-col  p-[2%] ">
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
          <span className="text-white self-end  a top-0 right-2 font-Neue border-2 p-1 text-sm rounded-full">
            Trailer
          </span>
          <button className="btn a z-20">Play</button>
          <ReactPlayer url={trailerUrl} width={"100%"}></ReactPlayer>
        </motion.div>
      </div>
      <div className="w-[28%] h-full border-l flex flex-col">
        <div className="w-full h-[55%] border-b flex items-center justify-center p-[3%]">
          <div className="w-[40vh] rounded-full h-[40vh] border flex items-center justify-center r">
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
          <div className="z-20 timeF font-NeueT">
            158 <span className="font-Neue"> min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
