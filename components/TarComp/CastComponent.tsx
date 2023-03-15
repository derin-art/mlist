type CastComp = {
  img: any;
  name: string;
  as: string;
  syle?: string;
  id: string;
};
import Script from "next/script";
import dynamic from "next/dynamic";
import WaveText from "../TarComp/Wavetext";
const Distortion = dynamic(() => import("../DistortText"));

export default function CastComponent(props: CastComp) {
  const split = props.name.split(" ");

  return (
    <div
      className={`w-[20%] r ${props.syle} text-white font-Climate flex flex-col items-center`}
    >
      <div className="flex space-x-2 items-center mb-4">
        <span
          id={props.id}
          className=" font-Climate h-[60px] border-2 backdrop-blur-sm rounded-full border-white w-fit  top-[0%]  overflow-hidden left-[0%] z-20"
        >
          <Distortion id={props.id} text={split[0]}></Distortion>
        </span>
        <span className="">{split[1]}</span>
      </div>
      <img className="w-full duration-300" src={props.img.src}></img>

      <div className="font-NeueT mt-4"> is {props.as}</div>
      <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
    </div>
  );
}
