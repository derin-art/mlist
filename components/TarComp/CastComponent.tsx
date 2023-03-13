type CastComp = {
  img: any;
  name: string;
  as: string;
};
import Script from "next/script";
import WaveText from "../TarComp/Wavetext";
import Distortion from "../DistortText";

export default function CastComponent(props: CastComp) {
  return (
    <div className="w-[20%] a top-[4%] left-[6%] r font-Climate flex flex-col items-center">
      <div className="flex space-x-2 items-center mb-4">
        <span className=" font-Climate h-[60px] border-2 backdrop-blur-sm rounded-full border-black w-fit  top-[0%]  overflow-hidden left-[0%] z-20">
          <Distortion text={"Sophie"}></Distortion>
        </span>
        <span className="">Kaeur</span>
      </div>
      <img className="w-full duration-300" src={props.img.src}></img>
      <div>is</div>
      <div className="font-NeueT">{props.as}</div>
    </div>
  );
}
