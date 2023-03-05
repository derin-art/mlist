import CastHov from "./CastHov";
import CateB from "../../public/Data/Tar/Images/Cast/CateB.jpg";
import NinaH from "../../public/Data/Tar/Images/Cast/NinaH.jpg";

export default function TarCastList() {
  const cast = [
    { as: "Lydia Tár", name: "Cate Blanchett", img: CateB },
    { as: "Sharon Goodnow", name: "Nina Hoss", img: NinaH },
  ];
  return (
    <div className="w-full castH r ">
      <div className="a top-4 right-4 text-6xl font-Neue -skew-x-6 ">Cast</div>
      <div className="a left-[5%] -top-[10%]">
        <CastHov
          as={cast[0].as}
          name={cast[0].name}
          img={cast[0].img}
        ></CastHov>
      </div>
      <div className="a right-[10%] bottom-[5%]">
        <CastHov
          as={cast[1].as}
          name={cast[1].name}
          img={cast[1].img}
        ></CastHov>
      </div>
    </div>
  );
}
