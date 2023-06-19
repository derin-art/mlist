import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CateB1 from "../../../public/Data/Tar/Images/CateB.jpg";
import CateB12 from "../../../public/Data/Tar/Images/CateB1.jpg";
import WhiteBlob from "../../../public/Svg/White.svg";
import WhiteBlob1 from "../../../public/Svg/White1.svg";
import Image from "next/image";
import SlantedBoxes from "@/public/Icons/SlantedBoxes";
import { Kinesis } from "@studio-freight/compono";
import { BsCursorFill, BsHandIndex } from "react-icons/bs";

import Alexandra from "../../public/Data/Tar/Images/Crew/Alexandra.jpg";
import Florian from "../../public/Data/Tar/Images/Crew/Florian.jpg";
import Hildur from "../../public/Data/Tar/Images/Crew/Hildur.jpg";
import Monika from "../../public/Data/Tar/Images/Crew/Monika.jpg";
import Scott from "../../public/Data/Tar/Images/Crew/Scott.jpg";
import Todd from "../../public/Data/Tar/Images/Crew/Todd.jpg";

const Name = (props: {
  name: string;
  prof: string;
  first: boolean;
  style: string;
  rotate1?: string;
  rotate2?: string;
  img: any;
  imgStyle?: string;
  secondStyle?: string;
  second?: any;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={`r text-black text-[2.5vw] ${props.style} a font-Neue cursor-pointer`}
    >
      <span
        className={`a ${props.rotate1} border  rounded-full px-2 p-1  border-ultraGray flex items-center justify-center`}
      >
        <motion.div
          className="r"
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.div
            transition={{ duration: 0.3 }}
            animate={hovered && !props.first ? { y: "-100%" } : { y: "0%" }}
          >
            <div className="w-fit ">{props.prof}</div>
            <div className="w-fit a">{props.prof}</div>
          </motion.div>
        </motion.div>
      </span>
      <span
        className={`border a  ${props.rotate2} rounded-full px-2 border-ultraGray flex items-center justify-center p-1`}
      >
        <motion.div
          className="r "
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.div
            transition={{ duration: 0.3 }}
            animate={hovered && props.first ? { y: "-100%" } : { y: "0%" }}
          >
            <div className="w-fit ">{props.name}</div>
            <div className="w-fit  a">{props.name}</div>
          </motion.div>
        </motion.div>
      </span>
      <div className={`a w-[14vw] h-[10vw] h-fit ${props.imgStyle}`}>
        <AnimatePresence>
          <motion.div
            key={hovered.toString()}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {" "}
            {hovered && (
              <Kinesis>
                {" "}
                <motion.img
                  className="w-[200px]  h-fit"
                  src={props.img.src}
                ></motion.img>
              </Kinesis>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {props.second && (
        <div className={`${props.secondStyle}  a w-[14vw] h-[10vw] h-fit `}>
          <AnimatePresence>
            <motion.div
              key={hovered.toString()}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {" "}
              {hovered && (
                <Kinesis>
                  {" "}
                  <motion.img
                    className="w-[200px]  h-fit"
                    src={props.second.src}
                  ></motion.img>
                </Kinesis>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

const NameTwo = (props: {
  name: string;
  prof: string;
  first: boolean;
  style: string;
  rotate1?: string;
  rotate2?: string;
  img: any;
  imgStyle?: string;
  secondStyle?: string;
  second?: any;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={`r text-black text-[2.5vw]  font-Neue cursor-pointer flex items-center justify-around`}
    >
      <span
        className={`border  rounded-full px-2 p-1  border-ultraGray flex items-center justify-center`}
      >
        <motion.div
          className="r"
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.div
            transition={{ duration: 0.3 }}
            animate={hovered && !props.first ? { y: "-100%" } : { y: "0%" }}
          >
            <div className="w-fit ">{props.prof}</div>
            <div className="w-fit a">{props.prof}</div>
          </motion.div>
        </motion.div>
      </span>
      <span
        className={`border   rounded-full px-2 border-ultraGray flex items-center justify-center p-1`}
      >
        <motion.div
          className="r "
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.div
            transition={{ duration: 0.3 }}
            animate={hovered && props.first ? { y: "-100%" } : { y: "0%" }}
          >
            <div className="w-fit ">{props.name}</div>
            <div className="w-fit  a">{props.name}</div>
          </motion.div>
        </motion.div>
      </span>
      <div className={`a w-[14vw] h-[10vw] h-fit ${props.imgStyle}`}>
        <AnimatePresence>
          <motion.div
            key={hovered.toString()}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {" "}
            {hovered && (
              <Kinesis>
                {" "}
                <motion.img
                  className="w-[200px]  h-fit"
                  src={props.img.src}
                ></motion.img>
              </Kinesis>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {props.second && (
        <div className={`${props.secondStyle}  a w-[14vw] h-[10vw] h-fit `}>
          <AnimatePresence>
            <motion.div
              key={hovered.toString()}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {" "}
              {hovered && (
                <Kinesis>
                  {" "}
                  <motion.img
                    className="w-[200px]  h-fit"
                    src={props.second.src}
                  ></motion.img>
                </Kinesis>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
const NameThree = (props: {
  name: string;
  prof: string;
  first: boolean;
  style: string;
  rotate1?: string;
  rotate2?: string;
  img: any;
  imgStyle?: string;
  secondStyle?: string;
  second?: any;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={`r text-black text-[1.6vw] px-[2vw] uppercase font-Neue cursor-pointer w-full flex items-center justify-between ${
        props.index !== 5 && "border-b"
      } border-ultraGray`}
    >
      <span
        className={` px-2 text-[3.2vw]  flex items-center justify-center p-1`}
      >
        <motion.div
          className="r "
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.div
            transition={{ duration: 0.3 }}
            animate={hovered && props.first ? { y: "-100%" } : { y: "0%" }}
          >
            <div className="w-fit ">{props.name}</div>
            <div className="w-fit  a">{props.name}</div>
          </motion.div>
        </motion.div>
      </span>
      <span
        className={` rounded-full px-2 p-1   flex items-center justify-center`}
      >
        <motion.div
          className="r"
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.div
            transition={{ duration: 0.3 }}
            animate={hovered && !props.first ? { y: "-100%" } : { y: "0%" }}
          >
            <div className="w-fit ">{props.prof}</div>
            <div className="w-fit a">{props.prof}</div>
          </motion.div>
        </motion.div>
      </span>

      <div className={`a w-[14vw] h-[10vw] h-fit ${props.imgStyle}`}>
        <AnimatePresence>
          <motion.div
            key={hovered.toString()}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {" "}
            {hovered && (
              <Kinesis>
                {" "}
                <motion.img
                  className="w-[200px]  h-fit"
                  src={props.img.src}
                ></motion.img>
              </Kinesis>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {props.second && (
        <div className={`${props.secondStyle}  a w-[14vw] h-[10vw] h-fit `}>
          <AnimatePresence>
            <motion.div
              key={hovered.toString()}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {" "}
              {hovered && (
                <Kinesis>
                  {" "}
                  <motion.img
                    className="w-[200px]  h-fit"
                    src={props.second.src}
                  ></motion.img>
                </Kinesis>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default function Crew() {
  const Crew = [
    {
      name: "Florian.Hoffmeister",
      prof: " Cinematography",
      f: true,
      style: "left-[5vw] bottom-[35vw]",
      rotate1: "rotate-[90deg] z-10 ",
      rotate2: "z-20 backdrop-blur-sm",
      img: Florian,
      imgStyle: "rotate-[14deg] top-[3vw] left-[10vw]",
    },
    {
      name: "Monika.Willi",
      prof: "Editing",
      f: false,
      style: "top-[30vw] right-[20vw]",
      rotate1: "rotate-[-25deg] z-20 backdrop-blur-sm -left-[3vw]",
      rotate2: "rotate-[80deg] z-10",
      img: Monika,
      imgStyle: "rotate-[4deg]",
    },
    {
      name: "Alexandra.Milchan&Scott.Lambert",
      prof: "Production",
      f: true,
      style: "bottom-[26vw] right-[40vw]",
      rotate1: "rotate-[70deg] z-10 ",
      rotate2: "rotate-[0deg] z-20 backdrop-blur-sm",
      img: Alexandra,
      second: Scott,
      imgStyle: "-rotate-[14deg] top-[5vw]",
      secondStyle: "left-[15vw]  top-[5vw]",
    },
    {
      name: "Hildur.Guðnadóttir",
      prof: "Music",
      f: true,
      style: "top-[25%] left-[6vw] bg-red-500",
      rotate2: "rotate-[35deg] z-10 ",
      rotate1: "z-20 backdrop-blur-sm",
      img: Hildur,
      imgStyle: "-rotate-[7deg] left-[6vw]",
    },
    {
      name: "Todd.Fields",
      prof: "Writing,Production,Directing",
      f: false,
      style: "left-[40vw]",
      rotate1: "rotate-[45deg] z-20 backdrop-blur-sm",
      rotate2: "z-10",
      img: Todd,
      imgStyle: "rotate-[6deg] top-[3vw]",
    },
  ];
  const CrewTwo = [
    {
      name: "Florian.Hoffmeister",
      prof: " Cinematography",
      f: true,
      style: "left-[5vw] bottom-[35vw]",
      rotate1: "rotate-[90deg] z-10 ",
      rotate2: "z-20 backdrop-blur-sm",
      img: Florian,
      imgStyle: "rotate-[14deg] top-[3vw] left-[10vw]",
    },
    {
      name: "Monika.Willi",
      prof: "Editing",
      f: false,
      style: "top-[30vw] right-[20vw]",
      rotate1: "rotate-[-25deg] z-20 backdrop-blur-sm -left-[3vw]",
      rotate2: "rotate-[80deg] z-10",
      img: Monika,
      imgStyle: "rotate-[4deg]",
    },
    {
      name: "Scott.Lambert",
      prof: "Production",
      f: true,
      style: "bottom-[26vw] right-[40vw]",
      rotate1: "rotate-[70deg] z-10 ",
      rotate2: "rotate-[0deg] z-20 backdrop-blur-sm",
      img: Scott,
      second: false,
      imgStyle: "-rotate-[14deg] ",
      secondStyle: "left-[15vw]  top-[5vw]",
    },
    {
      name: "Alexandra.Milchan",
      prof: "Production",
      f: true,
      style: "bottom-[26vw] right-[40vw]",
      rotate1: "rotate-[70deg] z-10 ",
      rotate2: "rotate-[0deg] z-20 backdrop-blur-sm",
      img: Alexandra,

      imgStyle: "-rotate-[14deg] ",
      secondStyle: "left-[15vw]  top-[5vw]",
    },
    {
      name: "Hildur.Guðnadóttir",
      prof: "Music",
      f: true,
      style: "top-[25%] left-[6vw] bg-red-500",
      rotate2: "rotate-[35deg] z-10 ",
      rotate1: "z-20 backdrop-blur-sm",
      img: Hildur,
      imgStyle: "-rotate-[7deg] left-[6vw]",
    },
    {
      name: "Todd.Fields",
      prof: "Writing,Production,Directing",
      f: false,
      style: "left-[40vw]",
      rotate1: "rotate-[45deg] z-20 backdrop-blur-sm",
      rotate2: "z-10",
      img: Todd,
      imgStyle: "rotate-[6deg] ",
    },
  ];

  return (
    <div className=" r w-full overflow-hidden  bg-white  h-screen flex flex-col items-center justify-center r">
      <div className="a z-0">{SlantedBoxes("", "100vw", "100vw")}</div>
      <div className="border w-[80%] bg-[#DFDFDF] z-20">
        {" "}
        {CrewTwo.map((item, index) => {
          return (
            <NameThree
              index={index}
              imgStyle={item.imgStyle}
              img={item.img}
              style={item.style}
              first={item.f}
              name={item.name}
              prof={item.prof}
              key={index}
              secondStyle={item.secondStyle}
              rotate1={item.rotate1}
              second={item.second ? item.second : null}
              rotate2={item.rotate2}
            ></NameThree>
          );
        })}
      </div>
      <div className="hidden min-h-[200vh] sm:py-[4vw] sm:pb-[10vw] ">
        {" "}
        {Crew.map((item, index) => {
          return (
            <Name
              imgStyle={item.imgStyle}
              img={item.img}
              style={item.style}
              first={item.f}
              name={item.name}
              prof={item.prof}
              key={index}
              secondStyle={item.secondStyle}
              rotate1={item.rotate1}
              second={item.second ? item.second : null}
              rotate2={item.rotate2}
            ></Name>
          );
        })}
      </div>
    </div>
  );
}
