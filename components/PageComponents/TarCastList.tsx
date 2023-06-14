import CateB from "../../public/Data/Tar/Images/Cast/CateB.jpg";
import NinaH from "../../public/Data/Tar/Images/Cast/NinaH.jpg";
import SophieK from "../../public/Data/Tar/Images/Cast/SophieK.jpg";
import NoemieM from "../../public/Data/Tar/Images/Cast/NoemieM.jpg";
import MarkS from "../../public/Data/Tar/Images/Cast/MarkS.jpg";
import JulianG from "../../public/Data/Tar/Images/Cast/JulianG.jpg";

import Image from "next/image";

import { motion } from "framer-motion";

export default function TarCastList() {
  const CastAltList = [
    {
      as: "Lydia Tár",
      name: "Cate Blanchett",
      img: CateB,
      style: "top-[10%] left-[20%] ",
      id: "sdmsd",
      no: 1,
    },
    {
      as: "Sharon Goodnow",
      name: "Nina Hoss",
      img: NinaH,
      style: "top-[25%] right-[20%]",
      id: "sdmsd1",
      no: 2,
    },

    {
      as: "Olga Metkina",
      name: "Sophie Kauer",
      img: SophieK,
      style: "top-[40%] left-[20%]",
      id: "sdmsd2",
      no: 3,
    },
    {
      as: "Francesca Lentini",
      name: "Noémie Merlant",
      img: NoemieM,
      style: "top-[60%] right-[20%]",
      id: "sdmsd3",
      no: 4,
    },

    {
      as: "Eliot Kaplan",
      name: "Mark Strong",
      img: MarkS,
      style: "top-[70%] left-[20%]",
      id: "sdmsd4",
      no: 5,
    },
    {
      as: "Andris Davis",
      name: "Julian Glover",
      img: JulianG,
      style: "top-[70%] left-[20%]",
      id: "sdmsd4",
      no: 5,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center r overflow-hidden  bg-white pt-[11.1vw] pb-[9.4vw]">
      <div className="text-[2.6vw] font-Neue a  top-[7vw] left-[4%]">CAST</div>

      <motion.div className="w-full  h-fit r  flex-col flex items-center  text-white">
        <div className="w-full flex justify-center ">
          <div className="flex  w-full  overflow-hidden  r flex-wrap justify-center gap-x-[5px]  p-2 ">
            {CastAltList.slice(0, 6).map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className={" w-[15vw] h-[26.5vw] overflow-hidden r  "}
                >
                  <div className="a lg:text-xs text-[0.8vw] z-20 font-Neue uppercase noneShade border border-ultraGray rounded-full px-2 p-1 right-2 top-2 bg-black bg-opacity-[0.5]">
                    {item.name}
                  </div>
                  <div className="a lg:text-xs text-[0.8vw] z-20 font-Neue uppercase border-ultraGray noneShade border rounded-full px-2 p-1 right-2 bottom-2 bg-black bg-opacity-[0.5]">
                    is {item.as}
                  </div>

                  <motion.div
                    transition={{ duration: 0.6 }}
                    className=" w-[18vw]   overflow-hidden r "
                  >
                    <motion.img
                      className="w-full  object-cover h-full hover:scale-[1.2] duration-300 "
                      alt={item.name + "cast image"}
                      src={item.img.src}
                      width={300}
                      height={500}
                    ></motion.img>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
