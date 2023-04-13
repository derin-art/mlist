import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function VideoCta() {
  return (
    <div className="w-full HorH bg-black flex r items-center justify-center overflow-hidden">
      <motion.div
        initial={{ width: "70%" }}
        whileHover={{
          x: 0,
          width: "100%",
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="w-full"
      >
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={
            "https://res.cloudinary.com/doaahozax/video/upload/v1677451409/vlc-record-2023-01-21-00h36m37s-TFPDL_-_Tar.2022.1080p.WEB-DL.DD5.1.x264-_nq7osn.mp4"
          }
        ></ReactPlayer>
      </motion.div>
      <div className="a font-PvcI border-2 border-blue-700 text-blue-700 rounded-full text-[7vw] hidden">
        go of that
      </div>
      <button className="a btn">Play</button>
      <div className="a font-Neue text-[8vw] text-center w-[80%]  text-white flex flex-col items-center hidden">
        <span className="behindImage "> "You cant let go of that "</span>
        <div className="font-PvcI border-white rounded-full border-2 w-fit text-center text-white opacity-0">
          {" "}
          horrible"
        </div>
        <span className="behindImage font-PvcI border-white rounded-full text-[9vw]">
          {" "}
          place
        </span>
      </div>
    </div>
  );
}