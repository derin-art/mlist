import Aud1 from "../../public/Data/Tar/Images/Aud1.jpg";
import Aud2 from "../../public/Data/Tar/Images/Aud2.jpg";

export default function GridAud() {
  return (
    <div className="w-full h-screen otherGrid r">
      <div className="a font-PvcB text-white top-[5%] left-[5%] text-[3vw]">
        <div className="font-Neue text-[1vw] ml-[1%]">Shot at the</div>
        <div className="border-2 rounded-full px-[4%]">Dresden </div>
        <div className="font-PvcI">Philharmonic</div>
      </div>
      <div className="a font-PvcB text-white bottom-[40%] z-30 right-[10%] text-[3vw]">
        <div className="border-2 rounded-full px-[4%] backdrop-grayscale">
          Berlin,{" "}
        </div>
        <div className="font-PvcI">Germany</div>
      </div>
      <div className="w-[26%] a right-[20%] top-[5%] rotate-[20deg]">
        <img src={Aud1.src} className="w-full"></img>
      </div>
      <div className="h-[40%] a bottom-[10%] left-[5%]">
        <img src={Aud2.src} className="h-full"></img>
      </div>
    </div>
  );
}
