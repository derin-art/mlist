import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function VideoCta() {
  return (
    <div className="w-full h-fit  bg-black flex r items-center justify-center ">
      <motion.div className="w-full h-[90vh]  flex items-center justify-center overflow-hidden">
        <ReactPlayer
          width={"100%"}
          height={"100vw"}
          url={
            "https://res.cloudinary.com/doaahozax/video/upload/v1677451409/vlc-record-2023-01-21-00h36m37s-TFPDL_-_Tar.2022.1080p.WEB-DL.DD5.1.x264-_nq7osn.mp4"
          }
        ></ReactPlayer>
      </motion.div>
      <div className="a font-PvcI border-2 border-blue-700 text-blue-700 rounded-full text-[7vw] hidden">
        go of that
      </div>
      <button className="a btn">Play</button>
      <div className="text-sm a bottom-[4%] left-4 font-PvcB text-white flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-blue-700"></div> Dresden{" "}
        <span className="font-PvcI -ml-[3%]">Philharmonic</span>
      </div>
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
