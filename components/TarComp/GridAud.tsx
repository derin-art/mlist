import Aud1 from "../../public/Data/Tar/Images/Aud1.jpg";
import Aud2 from "../../public/Data/Tar/Images/Aud2.jpg";

export default function GridAud() {
  return (
    <div className="w-full h-screen otherGrid r">
      <div className="w-full h-full r md:hidden">
        <div className="a font-PvcB text-white top-[5%] right-[5%] text-[7vw]">
          <div className="font-NeueT text-[4vw] ml-[1%] mb-[4%] text-right">
            Shot at the
          </div>
          <div className="border-2 rounded-full px-[4%] backdrop-grayscale">
            Dresden{" "}
          </div>
          <div className="font-PvcI text-right">Philharmonic</div>
        </div>
        <div className="a font-PvcB text-white bottom-[40%] z-30 left-[10%] text-[7vw]">
          <div className="border-2 rounded-full px-[4%] backdrop-grayscale">
            Berlin,{" "}
          </div>
          <div className="font-PvcI">Germany</div>
        </div>
        <div className="w-[60%]">
          <img src={Aud1.src} className="w-full"></img>
        </div>
        <div className="h-[40%] a bottom-[10%] -right-[40%]">
          <img src={Aud2.src} className="h-full"></img>
        </div>
      </div>
      <div className="w-full h-full r hidden md:block">
        <div className="a font-PvcB text-white top-[5%] left-[5%] text-[3vw]">
          <div className="font-NeueT text-[1.7vw] ml-[1%] mb-[4%]">
            Shot at the
          </div>
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
    </div>
  );
}
