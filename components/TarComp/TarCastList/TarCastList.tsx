import CateB from "../../../public/Data/Tar/Images/Cast/CateB.jpg";
import NinaH from "../../../public/Data/Tar/Images/Cast/NinaH.jpg";
import SophieK from "../../../public/Data/Tar/Images/Cast/SophieK.jpg";
import NoemieM from "../../../public/Data/Tar/Images/Cast/NoemieM.jpg";
import MarkS from "../../../public/Data/Tar/Images/Cast/MarkS.jpg";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CastComponent = dynamic(() => import("../CastComponent"));

export default function TarCastList() {
  const cast = [
    [
      {
        as: "Lydia Tár",
        name: "Cate Blanchett",
        img: CateB,
        style: "top-[10%] left-[20%] ",
        id: "sdmsd",
      },
      {
        as: "Sharon Goodnow",
        name: "Nina Hoss",
        img: NinaH,
        style: "top-[25%] right-[20%]",
        id: "sdmsd1",
      },
    ],
    [
      {
        as: "Olga Metkina",
        name: "Sophie Kauer",
        img: SophieK,
        style: "top-[40%] left-[20%]",
        id: "sdmsd2",
      },
      {
        as: "Francesca Lentini",
        name: "Noémie Merlant",
        img: NoemieM,
        style: "top-[60%] right-[20%]",
        id: "sdmsd3",
      },
    ],
    [
      {
        as: "Eliot Kaplan",
        name: "Mark Strong",
        img: MarkS,
        style: "top-[70%] left-[20%]",
        id: "sdmsd4",
      },
    ],
  ];
  return (
    <motion.div className="w-full h-fit r bg-black pb-[5%] flex-col flex items-center  text-white">
      <div className="font-Neue text-[5vw]  mt-[0%]  cast-title r w-full flex items-center justify-center">
        <div className="a left-[10%] border-2 rounded-full p-2 r">
          <span className="font-NeueI">CAST </span>LIST{" "}
        </div>
      </div>
      <div className="mb-[10%]"></div>
      {cast.map((castArr, index) => {
        return (
          <div key={index} className="w-full flex justify-around ">
            {castArr.map((item, indexA) => {
              return (
                <CastComponent
                  as={item.as}
                  id={item.id}
                  key={indexA}
                  img={item.img}
                  number={indexA}
                  name={item.name}
                  syle={item.style}
                ></CastComponent>
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
}