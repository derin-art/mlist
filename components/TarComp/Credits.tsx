import onesheet1 from "../../public/Data/Tar/Images/Hori/onesheet1.jpg";
import onesheet3 from "../../public/Data/Tar/Images/Hori/onesheet3.jpg";
import Title13 from "../../public/Data/Tar/Images/Hori/Title13.jpg";
import Misoc from "../../public/Data/Tar/Images/Hori/Misoc1.jpg";
import Cinema from "../../public/Data/Tar/Images/Hori/Cinema.jpg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ReactPlayer from "react-player";

export default function Credits() {
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
    <p>Languages: English, German, French, Tagalog</p>,
    <p>Edited by: Monnica Willi</p>,
  ];

  return (
    <div className="w-full HorH bg-white flex r items-center py-[10%] justify-center overflow-hidden">
      <ReactPlayer
        width={"40%"}
        url={
          "https://res.cloudinary.com/doaahozax/video/upload/v1677451409/vlc-record-2023-01-21-00h36m37s-TFPDL_-_Tar.2022.1080p.WEB-DL.DD5.1.x264-_nq7osn.mp4"
        }
      ></ReactPlayer>
      <div className="a font-PvcI border-2 border-blue-700 text-blue-700 rounded-full text-[7vw] hidden">
        go of that
      </div>

      <div className="a font-Neue text-[8vw] text-center w-3/5 behindImage text-white">
        You cant let{" "}
        <span className="font-PvcI border-white rounded-full mx-[4vw] ">
          go of that
        </span>{" "}
        horrible
        <span className=""> place</span>
      </div>

      <div className=" tex a hidden letterW font-Climate border rounded-[10px] border-black ">
        <div className="point-burst text-sm  "></div>
      </div>

      <div className=" a right-[5%] top-[10%] font-Neue text-sm">
        {TarData.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}
