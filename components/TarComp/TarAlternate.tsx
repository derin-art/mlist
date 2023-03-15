import WhiteSvg from "../../public/Svg/White.svg";
import SplineObject from "./SplineObject";

export default function TarAlternate() {
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
        <div className="w-full h-[43%] flex items-center justify-center dirt font-Music text-[10vw] text-white">
          Tar
        </div>
      </div>
      <div className="w-[44%] h-full flex   p-[2%]">
        <div className="font-Neue text-white musicP flex-col ">
          <div className="font-NeueT">Music </div>
          <div className="font-NeueT">and</div>
          <div>Power</div>
        </div>
      </div>
      <div className="w-[28%] h-full border-l flex flex-col">
        <div className="w-full h-[55%] border-y flex items-center justify-center p-[3%]">
          <div className="w-[40vh] rounded-full h-[40vh] border flex items-center justify-center r">
            <div className="font-Climate text-white text-[4vw]">7.10.22</div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center text-white h-[45%] r">
          <div className="a w-full h-full z-0 blur-[70px] -top-[10%]">
            <img className="w-full" src={WhiteSvg.src}></img>
          </div>
          <div className="z-20 timeF font-NeueT">
            158 <span className="font-Neue"> min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
