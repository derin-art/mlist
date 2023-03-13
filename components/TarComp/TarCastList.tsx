import CastHov from "./CastHov";
import CateB from "../../public/Data/Tar/Images/Cast/CateB.jpg";
import NinaH from "../../public/Data/Tar/Images/Cast/NinaH.jpg";
import SophieK from "../../public/Data/Tar/Images/Cast/SophieK.jpg";
import { ParallaxController } from "parallax-controller";
import { useParallax, ParallaxProvider } from "react-scroll-parallax";
const CastComponent = dynamic(() => import("./CastComponent"));
import Script from "next/script";
import dynamic from "next/dynamic";

export default function TarCastList() {
  const cast = [
    { as: "Lydia Tár", name: "Cate Blanchett", img: CateB },
    { as: "Sharon Goodnow", name: "Nina Hoss", img: NinaH },
    { as: "Olga Metkina", name: "Sophie Kauer", img: SophieK },
  ];
  return (
    <div className="w-full h-screen r bg-black">
      <CastComponent
        img={cast[1].img}
        as={cast[1].as}
        name={cast[1].name}
      ></CastComponent>
    </div>
  );
}
