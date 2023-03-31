type CastComp = {
  img: any;
  name: string;
  as: string;
  syle?: string;
  id: string;
  number: number;
};
import Script from "next/script";
import dynamic from "next/dynamic";
import WaveText from "../TarComp/Wavetext";
const Distortion = dynamic(() => import("../DistortText"));

export default function CastComponent(props: CastComp) {
  const split = props.name.split(" ");

  const characterNameSplit = props.as.split(" ");

  return (
    <div className={`flex items-center mt-[10%] justify-between `}>
      {" "}
      <div
        className={`font-Music   text-[20vw] px-[6vw] hidden md:block ${
          props.number % 2 ? "md:hidden" : ""
        }`}
      >
        {props.number}.
      </div>
      <div
        className={`md:w-[20vw] w-[60vw]  r  text-white font-Climate flex flex-col items-center  py-[4%]`}
      >
        <div className="flex space-x-2 items-center mb-4">
          <span
            id={props.id}
            className=" font-Climate h-[60px] border-2 backdrop-blur-sm rounded-full border-white w-fit  top-[0%]  overflow-hidden left-[0%] z-20"
          >
            <Distortion id={props.id} text={split[0]}></Distortion>
          </span>
          <span className="font-PvcI md:text-[1.4vw] text-sm">{split[1]}</span>
        </div>
        <img className="w-full duration-300 " src={props.img.src}></img>

        <div className="font-NeueT mt-4">
          {" "}
          is {characterNameSplit[0]}{" "}
          <span className="border-2 rounded-full p-2 px-4">
            {characterNameSplit[1]}
          </span>
        </div>
        <script src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"></script>
      </div>
      <div
        className={`font-Music text-[20vw] px-[6vw] hidden md:block  ${
          props.number % 2 ? "" : "md:hidden"
        }`}
      >
        {props.number}.
      </div>
    </div>
  );
}
