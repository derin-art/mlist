import onesheet1 from "../../public/Data/Tar/Images/Hori/onesheet1.jpg";
import onesheet3 from "../../public/Data/Tar/Images/Hori/onesheet3.jpg";
import Title13 from "../../public/Data/Tar/Images/Hori/Title13.jpg";
import Misoc from "../../public/Data/Tar/Images/Hori/Misoc1.jpg";
import Cinema from "../../public/Data/Tar/Images/Hori/Cinema.jpg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Horizontal() {
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
      <div className="text-[9vw] font-PvcI flex flex-col LET ">
        <div className="flex ">
          <div className="inline z-30">
            {" "}
            <span className=""> You</span>{" "}
            <span className="text-black bg-blue-700 rounded-full z-30  noneShade">
              Can't
            </span>{" "}
          </div>
          <div className="inline  z-30 behindImage ml-[5%]">
            {" "}
            <span className="text-white">let </span>{" "}
            <span className="text-white">go</span>
          </div>
        </div>
        <div className="">
          of that{" "}
          <span className=" rounded-full bg-black text-white">Awful </span>
          Place
        </div>
      </div>
      <img
        className="w-[17%] h-fit a bottom-[0%] right-[2%] -rotate-90 grayscale z-0 "
        src={Misoc.src}
      ></img>
      <img
        className="w-[30%] h-fit a bottom-[20%] left-[2%]  "
        src={Cinema.src}
      ></img>
      <div className=" a right-[5%] top-[10%] font-Neue text-sm">
        {TarData.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}
