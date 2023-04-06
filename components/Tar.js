import Title11 from "../public/Data/Tar/Images/Title11.jpg";
import dynamic from "next/dynamic";
import Script from "next/script";
import Image from "next/image";
import Music from "./TarComp/Music";
import MobileTitle from "./TarComp/MobileOnlyComponent/MobileTitle";

import TarAlternate from "./TarComp/TarAlternate";
import TarWave from "./TarWave";
const TarCastList = dynamic(() => import("./TarComp/TarCastList"));
import GlobeIcon from "../public/Icons/globeIcon";
import Tar11 from "../public/Data/Tar/Images/Tar11.jpg";
import Title9 from "../public/Data/Tar/Images/Title9.jpg";
import TarCross from "./TarComp/TarCross";
import RepeatAnim from "./TarComp/RepeatAnim";
import Aud from "../public/Data/Tar/Images/Aud.png";
import { AppearX } from "./TarComp/RepeatAnim";
import GradientBlob from "../public/Svg/Gradient_blob.svg";
import WhiteBlob from "../public/Svg/White.svg";
import { motion } from "framer-motion";
import Awards from "./TarComp/Awards";
import { useState } from "react";

import CateB1 from "../public/Data/Tar/Images/CateB.jpg";
import CateB from "../public/Data/Tar/Images/Cast/CateB.jpg";
import ArrowR from "../public/Icons/ArrowR";
import MouseIcon from "../public/Icons/MouseIcon";
import GridAud from "./TarComp/GridAud";
import Cast from "./TarComp/Cast";
import {
  DistortionText,
  LiquidDistortionText,
  FliesText,
  SplitColorChannelText,
} from "react-text-fun";
import Credits from "./TarComp/Credits";

export default function Tar() {
  const [triggerLight, setTriggerLight] = useState(false);

  const TarQuotes = [
    "Don't be so eager to be offended. The narcissism of small differences leads to the most boring kind of conformity.",
    "You want to dance the mask, you must service the composer. You gotta sublimate yourself, your ego, and, yes, your identity. You must, in fact, stand in front of the public and God and obliterate yourself.",
    "It is always the question that involves the listener, it's never the answer.",
    "Unfortunately, the architect of your soul appears to be social media.",
    "Hope dies last.",
    "There's no glory for a robot, Eliot. Do your own thing!",
    " Time is the thing.",
    <span>
      "It's my score! You fucking,{" "}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-red-500 text-white opacity"
      >
        little
      </motion.span>{" "}
      nothing!"
    </span>,
    " Pets are best for some people",
    "I'm Petra's Father.",
    " For a start, this happened in a no-tech zone.",
    "How's the writing?",
    "I don't see it like that, too physical.",
    "She was fixated on me. She sent me weird gifts, she vandalized my Wikipedia page...",
  ];

  const TarData = [
    <p>
      Title: <span className="bg-white text-black">Tar</span>
    </p>,
    <p>Written by: Todd Fields</p>,
    <p>
      Cinematography:{" "}
      <span className="bg-white text-black">Florian Hoffmeister </span>
    </p>,
    <p>Music by: Hildur</p>,
    <p>
      Running time: <span className="bg-white text-black">158 minutes</span>
    </p>,
    <p>Languages: English, German, French, Tagalog</p>,
    <p>Edited by: Monnica Willi</p>,
  ];

  const TarData1 = [
    <p className="bg-white text-black">Cate Blanchet</p>,
    <p>Nina Hoss</p>,
    <p className="bg-white text-black">Noémie Merlant</p>,
    <p>Allan Corduner</p>,
    <p>Julian Glover</p>,
    <p className="bg-white text-black">Allan Corduner</p>,
  ];

  return (
    <div>
      <div className="w-full overflow-auto h-fit">
        <MobileTitle></MobileTitle>
        <div className="w-full h-screen flex items-start justify-center r overflow-hidden hidden sm:flex text-red-500 bg-white z-30">
          <div className="w-1/2 h-full bg-black a left-0">
            <TarWave></TarWave>
          </div>
          <div className="w-1/2 h-full a right-0 flex items-center r justify-center">
            <motion.div className="a bottom-0 flex text-[13vw] font-Climate text-black">
              {["T", "Á", "R"].map((item, index) => {
                return (
                  <motion.span
                    key={index}
                    style={{
                      display: "inline-block",
                      overflow: "hidden",
                    }}
                    className="  "
                  >
                    <motion.span
                      initial={{ opacity: 1, x: "100%" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.7 }}
                      className="flex items-center justify-center"
                    >
                      {item}
                    </motion.span>{" "}
                  </motion.span>
                );
              })}
            </motion.div>
            <div className="a top-10 text-black font-Neue bg-white">
              A film by Todd Fields
            </div>
            <div className="a top-10 left-10 text-black font-Neue  ">
              7/10/22
            </div>
            <div className="a top-10 right-10 text-black font-Neue ">Tár</div>
          </div>

          <div className="font-Climate a bottom-20 h-40  hidden w-40  flex  justify-center  flex-col rounded-full right-10 items-center text-white text-3xl">
            {MouseIcon("30", "30", "fill-black")}
          </div>
        </div>

        <div className="hTar w-full bg-black hidden flex items-center justify-center  r overflow-hidden border-t">
          <div className="left-[3%] top-[15%] flex flex-col text-white font-Neue text-sm a r">
            {TarData.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
          <TarCross></TarCross>
          <div className="right-[3%] bottom-[20%] flex flex-col text-white font-Neue text-sm a">
            Staring:
            {TarData1.map((item, index) => {
              return (
                <div className="" key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        <TarAlternate></TarAlternate>

        <div className="h-screen overflow-hidden border-y -mt-[1%] border-white w-full bg-black flex items-center justify-center font-Climate text-3xl r">
          <motion.div
            initial={{ opacity: 0 }}
            animate={triggerLight ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="a w-2/5 h-1/4 blur-[80px] md:-top-[20%] md:-left-[15%] z-0"
          >
            <img src={WhiteBlob.src}></img>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => {
              setTriggerLight(true);
            }}
            onViewportLeave={() => {
              setTriggerLight(false);
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="a w-1/4 h-1/4 blur-[80px] top-[40%] right-[10%] z-0"
          >
            <img src={WhiteBlob.src}></img>
          </motion.div>

          <div className="gridF1 font-Neue  p-2 text-white flex h-screen r w-full  justify-center items-center">
            <motion.button
              style={{ display: "inline-block", overflow: "hidden" }}
              className="btn a top-[25%] font-Climate"
            >
              <motion.div> Explore Synopsis</motion.div>
            </motion.button>
            <div className=" text-white a text-center bottom-[4%] md:text-[6vw] text-[8.4vw] lH w-full flex flex-col justify-center items-center">
              <motion.div className="z-20">
                {" "}
                "The <span className="font-NeueT">n</span>arcissism of the
                smallest <span className="font-NeueT">differences</span> leads
                to <span className="font-NeueT">most</span> boring{" "}
              </motion.div>
              <motion.div
                style={{ display: "inline-block" }}
                className=" z-0 rounded-full h-fit border-2 pb-[1.5%]  w-fit text-white font-PvcI pt-[1%] md:mt-4 mt-1"
              >
                conformity
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mH w-full flex items-center justify-center bg-black r overflow-hidden">
          <div className="a w-full flex flex-col items-center justify-center text-white md:text-[2vw] text-[4vw] lS">
            <div className="text-white font-PvcI ">
              Cate <span className="font-PvcB">Blanchet</span> is
            </div>

            <motion.div style={{ display: "inline-block", overflow: "hidden" }}>
              {" "}
              <motion.img
                initial={{ x: "100%", width: 200 }}
                whileInView={{ x: 0, width: 270 }}
                transition={{ duration: 0.7 }}
                className="pos "
                src={CateB1.src}
              ></motion.img>
            </motion.div>
            <div className="text-white font-PvcB md:text-[1vw] text-[3vw]">
              Lydia<span className="font-PvcI"> Tar</span>
            </div>
          </div>
        </div>

        <GridAud></GridAud>
        <TarCastList></TarCastList>
        <Credits></Credits>
        <Awards></Awards>
      </div>
    </div>
  );
}
