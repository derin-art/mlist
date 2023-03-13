import Title11 from "../public/Data/Tar/Images/Title11.jpg";
import dynamic from "next/dynamic";
import Script from "next/script";
import Image from "next/image";
import Music from "./TarComp/Music";
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
import { useState } from "react";
import TarMobileSlide from "./TarMobileSlide";
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

export default function Tar() {
  const [spand, setSpand] = useState(false);
  const [opand, setOpand] = useState(false);
  const [syn, setSyn] = useState(false);
  const [bgChange, setBgChange] = useState(false);
  const [v, setV] = useState(false);

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
        <div className="w-full r h-screen flex items-center justify-center overflow-hidden sm:hidden">
          <div className="a -right-1/4 w-full">
            <Image
              src={Title11.src}
              width={400}
              height={400}
              className="w-full "
              alt="Image of Tar"
            ></Image>
            <div className="a  w-fit h-fit font-Wagon text-[200px] xsm:text-[250px] text-red-500 -bottom-20 -left-14">
              tár
            </div>
          </div>

          <div className=" a bottom-10 text-gray-300 text-xs xs:text-base font-Neue">
            A film by Cate Blanchet, runtime: 120 -mins
          </div>
        </div>
        <div className="w-full h-screen flex items-start justify-center r overflow-hidden hidden sm:flex text-red-500 bg-black z-30">
          <TarWave></TarWave>
          <div className="a top-10 text-black font-Neue bg-white">
            A film by Todd Fields
          </div>
          <div className="a top-10 left-10 text-white font-Neue  ">7/10/22</div>
          <div className="a top-10 right-10 text-white font-Neue ">Tár</div>
          <div className="font-Climate a bottom-20 h-40   w-40  flex  justify-center  flex-col rounded-full right-10 items-center text-white text-3xl">
            {MouseIcon("30", "30", "fill-white")}
          </div>
        </div>

        <TarMobileSlide></TarMobileSlide>

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
          <div className="a w-2/5 h-1/4 blur-[80px] -top-[20%] -left-[15%] z-0">
            <img src={WhiteBlob.src}></img>
          </div>
          <div className="a w-1/4 h-1/4 blur-[80px] top-[40%] right-[10%] z-0">
            <img src={WhiteBlob.src}></img>
          </div>
          <div className="a bottom-0 w-full border-t  font-NeueT  border-white flex justify-around text-white hidden">
            <div className="w-1/2 border-r border-white exlS pl-[6%] py-[2%]">
              Written by todd fields
            </div>
            <div className="w-1/2 exlS py-[2%] pl-[6%] flex items-center r">
              Music by Hildur Guðnadóttir
            </div>
          </div>
          <div className="gridF1 font-Neue  p-2 text-white flex h-screen behindImage r w-full  justify-center items-center">
            <button className="text-sm text-white p-[1%] rounded-full border-2 a top-[25%] ">
              Explore Synopsis
            </button>
            <div className=" text-white a text-center bottom-[1%] text-[6vw] lH ">
              "The narcissism <span className="font-Wagon">o</span>f the
              smallest differences leads t<span className="font-Wagon">o</span>{" "}
              the m<span className="font-Wagon">o</span>st b
              <span className="font-Wagon">o</span>ring c
              <span className="font-Wagon">o</span>nf
              <span className="font-Wagon">o</span>rmity"
            </div>
          </div>
        </div>
        <div className="mH w-full flex items-center justify-center bg-black r overflow-hidden">
          {/*    <div className="a top-[2%] left-[2%] w-[20%] r z-10">
          <motion.div
            style={{
              display: "inline-block",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ x: "100%", width: 300 }}
              whileInView={{ x: 0, width: 200 }}
              viewport={{ once: false }}
              className=""
              transition={{ duration: 0.7 }}
            >
              <Image
                src={Tar11.src}
                className="rounded-sm z-30 w-full shadow-lg"
                alt="Tar"
                width={200}
                height={200}
                unoptimized={true}
              ></Image>
            </motion.div>
          </motion.div>
          <div className="a top-1 right-2 font-Neue text-white">14:12</div>
        </div>

        <div className="a bottom-[2%] right-[2%] w-[20%] r z-10">
          <motion.div
            style={{
              display: "inline-block",
              overflow: "hidden",
            }}
          >
            {" "}
            <motion.div
              initial={{ x: "100%", width: 200 }}
              whileInView={{ x: 0, width: 300 }}
              viewport={{ once: false }}
              className=""
              transition={{ duration: 0.7 }}
            >
              <Image
                src={Title9.src}
                className="rounded-sm z-30 w-full shadow-lg w-full"
                alt="Tar"
                width={300}
                height={200}
                unoptimized={true}
              ></Image>
            </motion.div>
          </motion.div>

          <div className="a top-1 right-2 font-Neue text-white">14:12</div>
        </div> */}
          <div className="a w-full flex flex-col items-center justify-center text-white text-[3vw] lS">
            <div className="text-white font-PvcI ">
              Cate <span className="font-PvcB">Blanchet</span> is
            </div>

            <img className=" w-[22%] pos" src={CateB1.src}></img>
            <div className="text-white font-PvcB text-[2vw]">
              Lydia<span className="font-PvcI"> Tar</span>
            </div>
          </div>
        </div>

        <GridAud></GridAud>
        <TarCastList></TarCastList>
      </div>
    </div>
  );
}
