import WhiteSvg from "../../public/Svg/White.svg";
import WhiteSvg1 from "../../public/Svg/White1.svg";

import { BsPlayFill } from "react-icons/bs";

import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TarTrailer() {
  const [isGrayScale, setIsGrayScale] = useState(false);
  const [play, setPlay] = useState(false);

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
    <motion.div className="player-wrapper h-[56vw] r z-30 flex -mt-[7.4vw] items-center justify-center  overflow-hidden w-full">
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        controls
        playing={play}
        className=" w-screen "
        url={trailerUrl}
      ></ReactPlayer>
      <button
        onClick={() => {
          setPlay((prev) => !prev);
        }}
        className="a btn uppercase"
      >
        Play
      </button>
      <div className="text-sm text-white font-Neue a top-4 right-10 border-2 p-1 px-2 rounded-full ">
        Trailer
      </div>
      <button className="a  uppercase   rounded-full flex items-center justify-center hidden">
        <BsPlayFill fill="white" size={40}></BsPlayFill>
      </button>
    </motion.div>
  );
}
