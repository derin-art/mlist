import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { BsPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import React from "react";
import { useRef, useState } from "react";

function TarTrailer() {
  const [play, setPlay] = useState(false);

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
        <div className="text-sm text-white font-Neue a top-4 right-10 border-2 p-1 px-2 rounded-full ">
          Trailer
        </div>

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
        />

        {/* Video Seek controls */}
        <div className="w-[85%]  a bottom-[10vw] z-30 r">
          <div className="a text-white">
            {Math.floor((videoStates.played * 165) / 60)}:{" "}
            {Math.round((videoStates.played * 165) % 60)}
          </div>
          <InputRange
            maxValue={100}
            classNames={{
              slider:
                "bg-[#EFEFEF] w-[14px] h-[14px] rounded-full cursor-pointer mt-[-0.6rem] ",
              activeTrack: ` bg-blue-400 h-[5px] rounded-full  `,
              disabledInputRange: "",
              inputRange: "",
              labelContainer: "",
              maxLabel: "text-white hidden",
              minLabel: "text-white hidden",
              sliderContainer: "",
              track: "bg-[#636363] h-[5px] rounded-full border-[#5C5858]",
              valueLabel: "text-white  a hidden",
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
          className="a  uppercase   rounded-full flex items-center justify-center p-8 border-2 border-white"
        >
          <BsPlayFill fill="white" size={40}></BsPlayFill>
        </button>
      </motion.div>
    </div>
  );
}

export default React.memo(TarTrailer);
