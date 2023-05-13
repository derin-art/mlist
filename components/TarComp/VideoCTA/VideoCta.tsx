import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function VideoCta() {
  return (
    <div className="w-full h-fit  bg-black flex r items-center justify-center -mt-[10%] sm:mt-0">
      <motion.div className="w-full sm:h-[90vh]  flex items-center justify-center overflow-hidden">
        <ReactPlayer
          width={"100%"}
          height={"100vw"}
          url={
            "https://res.cloudinary.com/doaahozax/video/upload/v1677451409/vlc-record-2023-01-21-00h36m37s-TFPDL_-_Tar.2022.1080p.WEB-DL.DD5.1.x264-_nq7osn.mp4"
          }
        ></ReactPlayer>
      </motion.div>

      <button className="a btn uppercase">Play</button>
      <div className="text-sm a bottom-[4%] left-4 font-PvcB text-white sm:flex items-center gap-2 hidden">
        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-700 to-purple-700"></div>{" "}
        Dresden <span className="font-PvcI -ml-[3%]">Philharmonic</span>
      </div>
    </div>
  );
}
