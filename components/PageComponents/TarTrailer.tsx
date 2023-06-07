import WhiteSvg from "../../public/Svg/White.svg";
import WhiteSvg1 from "../../public/Svg/White1.svg";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { BsPlayFill } from "react-icons/bs";

import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import React from "react";
import { useRef, useState } from "react";

function TarTrailer() {
  const [isGrayScale, setIsGrayScale] = useState(false);
  const [play, setPlay] = useState(false);

  const [value, setValue] = useState(10);

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

  const [videoStates, setVideoStates] = useState({
    played: 0,
    loaded: 0,
    loadedSeconds: 0,
    playedSeconds: 0,
  });

  const ref: any = useRef(null);
  const handleSeek = (val: number) => {
    ref.current.seekTo(val);
  };
  return (
    <div className=" w-full h-[42vw] overflow-hidden ">
      <motion.div className=" h-[56vw]  r top-[-7.3vw] z-30 overflow-hidden flex  items-center justify-center  overflow-hidden w-full">
        <ReactPlayer
          ref={ref}
          width={"100%"}
          height={"100%"}
          onProgress={({ played, loaded, loadedSeconds, playedSeconds }) => {
            setVideoStates((prev) => ({
              played,
              loaded,
              loadedSeconds,
              playedSeconds,
            }));
          }}
          playing={play}
          className=" w-screen "
          url={trailerUrl}
        ></ReactPlayer>
        <div className="w-[85%]  a bottom-[10vw] z-30 ">
          <InputRange
            maxValue={100}
            classNames={{
              slider:
                "bg-[#EFEFEF] w-[14px] h-[14px] rounded-full cursor-pointer mt-[-0.6rem] ",
              activeTrack: ` bg-blue-400 h-[5px] rounded-full  `,
              disabledInputRange: "",
              inputRange: "",
              labelContainer: "",
              maxLabel: "",
              minLabel: "",
              sliderContainer: "",
              track: "bg-[#636363] h-[5px] rounded-full border-[#5C5858]",
              valueLabel: "text-white hidden",
            }}
            draggableTrack
            minValue={0}
            value={videoStates.played * 100}
            onChange={(value: any) => {
              handleSeek(value / 100);
              setVideoStates((prev) => ({
                ...prev,

                played: value / 100,
              }));
            }}
          />
          <motion.div
            style={{ width: `${videoStates.played * 100}%` }}
            className={`h-full bg-blue-400 rounded-full flex justify-end hidden`}
          ></motion.div>
        </div>
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
    </div>
  );
}

export default React.memo(TarTrailer);
