import CateB from "../../../public/Data/Tar/Images/Cast/CateB.jpg";
import NinaH from "../../../public/Data/Tar/Images/Cast/NinaH.jpg";
import SophieK from "../../../public/Data/Tar/Images/Cast/SophieK.jpg";
import NoemieM from "../../../public/Data/Tar/Images/Cast/NoemieM.jpg";
import MarkS from "../../../public/Data/Tar/Images/Cast/MarkS.jpg";
import JulianG from "../../../public/Data/Tar/Images/Cast/JulianG.jpg";
import Image from "next/image";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CastComponent = dynamic(() => import("../CastComponent"));

export default function TarCastList() {
  const Alternate = [
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
  const cast = [
    [
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
    ],
    [
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
    ],
    [
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
    ],
  ];
  return (
    <div className="flex items-center justify-center  mt-[14vw] ">
      <motion.div className="w-full  h-fit r pb-[5%] flex-col flex items-center  text-white">
        <div className="font-Neue text-[7vw] sm:text-[4vw]  mt-[0%] leading-[0.9]  r w-full flex items-center justify-center">
          <motion.div className="a sm:left-[7%]  tracking-[0.05em] ">
            <motion.div className="">FILM CAST</motion.div>
          </motion.div>
        </div>
        <div className="sm:mb-[4%] mb-[10%]"></div>
        <div className="flex  w-full overflow-hidden">
          {Alternate.map((item, index) => {
            return (
              <motion.div key={index} className={" w-[16.7%]  overflow-hidden"}>
                <div className=" w-[20vw]  h-[30vw] overflow-hidden">
                  <Image
                    unoptimized={true}
                    className="w-full  object-cover h-full hover:scale-[1.12] duration-300"
                    alt={item.name + "cast image"}
                    src={item.img.src}
                    width={300}
                    height={500}
                  ></Image>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="w-full hidden">
          {" "}
          {cast.map((castArr, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center sm:items-start sm:justify-between sm:flex-row sm:p-12 "
              >
                {castArr.map((item, indexA) => {
                  return (
                    <div
                      key={indexA}
                      className="border-white sm:w-[40%] md:w-[30%] flex items-center justify-center "
                    >
                      <CastComponent
                        as={item.as}
                        no={item.no}
                        id={item.id}
                        key={indexA}
                        disableDistortText={true}
                        img={item.img}
                        number={indexA}
                        name={item.name}
                        syle={item.style}
                      ></CastComponent>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
