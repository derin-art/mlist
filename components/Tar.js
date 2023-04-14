import dynamic from "next/dynamic";
const ThreeCurve = dynamic(() => import("../components/ThreeCurve/ThreeCurve"));
import Hero from "./TarComp/Hero/Hero";
import TarTrailer from "./TarComp/TarTrailer";
import SynopsisCta from "./TarComp/SynopisCTA/SynopsisCta";
import CateBlanchettCta from "./TarComp/CateBlanchettCTA/CateBlanchett";
import LocationCta from "./TarComp/LocationCTA/LocationCta";
import SocialProof from "./TarComp/SocialProof/SocialProof";
import VideoCta from "./TarComp/VideoCTA/VideoCta";
const TarCarList = dynamic(() => import("./TarComp/TarCastList/TarCastList"));

export default function Tar() {
  return (
    <div>
      <div className="w-full  h-fit bg-black r">
        <Hero></Hero>
        <TarTrailer></TarTrailer>
        <SynopsisCta></SynopsisCta>
        <CateBlanchettCta></CateBlanchettCta>
        <LocationCta></LocationCta>
        <VideoCta></VideoCta>

        <TarCarList></TarCarList>
        <SocialProof></SocialProof>
        <ThreeCurve></ThreeCurve>

        {/*   <div className="w-full h-screen r flex items-center justify-center bg-black">
          <ThreeButton text="Explore Something"></ThreeButton>
        </div>
        <ThreeCurve></ThreeCurve> */}
      </div>
    </div>
  );
}
