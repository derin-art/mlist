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
    <div className="w-[20%] a top-[4%] left-[6%] r font-Climate text-white">
      <span className=" a font-Climate h-[140px] border-2 backdrop-blur-sm rounded-full   top-[60%]  overflow-hidden left-[40%]">
        <Distortion text={"Nina.H"}></Distortion>
      </span>
      <div>is</div>
      <div>{props.as}</div>
      <img className="w-full" src={props.img.src}></img>
    </div>
  );
}
