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
      <img
        className="w-[40%] h-fit a top-[20%] left-[2%] grayscale z-20 "
        src={Misoc.src}
      ></img>
      <div className="a right-[4%] -bottom-[7%] w-[50%] z-10 text-[12vw]  font-Neue text-blue-700 LET">
        You can't get <span className="bg-black  ">let</span> go of that{" "}
        <span className="flex">
          <span className="font-PvcI border-2 text-black border-black rounded-full">
            horrible{" "}
          </span>
          place
        </span>
      </div>
      <div className=" tex letterW font-Climate border rounded-[10px] hidden border-black ">
        <div className="point-burst text-sm  "></div>
      </div>
      <img
        className="w-[30%] h-fit a bottom-[20%] right-[2%] z-0 grayscale"
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
