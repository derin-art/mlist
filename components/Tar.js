import Title11 from "../public/Data/Tar/Images/Title11.jpg";
import Image from "next/image";
import Music from "./TarComp/Music";
import TarWave from "./TarWave";
import Tar11 from "../public/Data/Tar/Images/Tar11.jpg";
import Title8 from "../public/Data/Tar/Images/Title8.jpg";
import Title2 from "../public/Data/Tar/Images/Title2.jpg";
import Title7 from "../public/Data/Tar/Images/Title7.jpg";
import Title9 from "../public/Data/Tar/Images/Title9.jpg";
import RepeatAnim from "./TarComp/RepeatAnim";
import Aud from "../public/Data/Tar/Images/Aud.png";
import { AppearX } from "./TarComp/RepeatAnim";
import Title13 from "../public/Data/Tar/Images/Title13.jpg";
import StickyBox from "react-sticky-box";
import Sticky from "react-stickynode";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useState } from "react";
import TarMobileSlide from "./TarMobileSlide";
import TarCastList from "./TarComp/TarCastList";
import RightArr from "../public/Icons/RightArr";

export default function Tar() {
  const [spand, setSpand] = useState(false);
  const [opand, setOpand] = useState(false);
  const [syn, setSyn] = useState(false);
  const [bgChange, setBgChange] = useState(false);
  const [v, setV] = useState(false);

  const firstSVg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        opacity="0.72"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="100"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="250.5"
            ry="150"
            cx="460.5539187929686"
            cy="449.8195882883321"
            fill="hsla(334, 87%, 47%, 1.00)"
          ></ellipse>
        </g>
      </svg>
    );
  };

  const secondSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        opacity="1"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-200%"
            y="-200%"
            width="300%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="160"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="183.5"
            ry="136"
            cx="513.0344368094504"
            cy="593.7933572239776"
            fill="hsla(185, 100%, 2%, 1.00)"
          ></ellipse>
        </g>
      </svg>
    );
  };

  const thirdSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        opacity="1"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="99"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="183.5"
            ry="136"
            cx="528.724854778098"
            cy="571.8267659079204"
            fill="#110e0e"
          ></ellipse>
        </g>
      </svg>
    );
  };

  const fourthSvg = () => {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fill" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#f74600"></stop>
            <stop offset="100%" stop-color="#242428"></stop>
          </radialGradient>
        </defs>
        <path
          d="M77.5,65.5Q68,81,47.5,85.5Q27,90,17,70Q7,50,17.5,31Q28,12,47,17.5Q66,23,76.5,36.5Q87,50,77.5,65.5Z"
          stroke="none"
          stroke-width="0"
          fill="url(#fill)"
        ></path>
      </svg>
    );
  };

  const fifthSvg = () => {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fill" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#000000"></stop>
            <stop offset="100%" stop-color="#ff1d11"></stop>
          </radialGradient>
        </defs>
        <path
          d="M86,70.5Q74,91,51,89.5Q28,88,19.5,69Q11,50,22.5,36.5Q34,23,51.5,19.5Q69,16,83.5,33Q98,50,86,70.5Z"
          stroke="none"
          stroke-width="0"
          fill="url(#fill)"
        ></path>
      </svg>
    );
  };

  const sixthSvg = () => {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fill" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#000000"></stop>
            <stop offset="100%" stop-color="#aeaeae"></stop>
          </radialGradient>
        </defs>
        <path
          d="M86,70.5Q74,91,51,89.5Q28,88,19.5,69Q11,50,22.5,36.5Q34,23,51.5,19.5Q69,16,83.5,33Q98,50,86,70.5Z"
          stroke="none"
          stroke-width="0"
          fill="url(#fill)"
        ></path>
      </svg>
    );
  };

  const sevSvg = () => {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fill" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#ff0000"></stop>
            <stop offset="100%" stop-color="#000000"></stop>
          </radialGradient>
        </defs>
        <path
          d="M86,70.5Q74,91,51,89.5Q28,88,19.5,69Q11,50,22.5,36.5Q34,23,51.5,19.5Q69,16,83.5,33Q98,50,86,70.5Z"
          stroke="none"
          stroke-width="0"
          fill="url(#fill)"
        ></path>
      </svg>
    );
  };

  const TarQuotes = [
    "Don't be so eager to be offended. The narcissism of small differences leads to the most boring kind of conformity.",
    "You want to dance the mask, you must service the composer. You gotta sublimate yourself, your ego, and, yes, your identity. You must, in fact, stand in front of the public and God and obliterate yourself.",
    "It is always the question that involves the listener, it's never the answer.",
    "Unfortunately, the architect of your soul appears to be social media.",
    "Hope dies last.",
  ];

  return (
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
        <div className="a bottom-10 text-red-500 font-Neue">
          A film by Tod Fields
        </div>
      </div>

      <TarMobileSlide></TarMobileSlide>

      <motion.div
        className={`w-full h-screen r duration-[1000ms] delay-[300ms]  overflow-hidden flex items-center  justify-center `}
      >
        <div className="a top-[2%] left-[2%] w-[20%] r z-10">
          <motion.div
            style={{
              display: "inline-block",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
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
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: false }}
              className=""
              transition={{ duration: 0.7 }}
            >
              <Image
                src={Title11.src}
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

        <motion.div
          initial={{ rotate: -20 }}
          transition={{ duration: 0.6 }}
          whileInView={{ rotate: -30 }}
          viewport={{ amount: 0.5, once: true }}
          className="otherTar px-8 border-2 border-black font-Climate z-20 shadow-lg rounded-full text-white bg-red-600  flex items-center justify-center"
        >
          Máestro
        </motion.div>
        <div className="w-full h-full a blur-[140px] z-0 -top-[50%] hidden">
          {sevSvg()}
        </div>
      </motion.div>

      <motion.div
        onViewportEnter={() => {
          setV(true);
        }}
        onViewportLeave={() => {
          setV(false);
        }}
        className={`h-screen w-full  r border-t border-black overflow-hidden flex `}
      >
        <div className="w-1/5 flex flex-col left-0 -space-y-4 border-r border-black p-2 bg-red-500 overflow-hidden">
          <motion.div
            whileInView={{ y: 0 }}
            viewport={{ amount: 0.5, margin: "100px" }}
            initial={{ y: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col -space-y-4"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              return (
                <div
                  className={` font-Climate TarR text-red-200 -skew-x-[20deg] flex items-center justify-cente`}
                  key={item}
                >
                  tár
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="r w-4/5">
          <div className="left-[2%] top-[6%] a font-Neue p-6 px-8 z-10 bg-black hover:bg-transparent hover:text-black duration-[400ms] text-white border-black  border-2 rounded-lg">
            <div className="text-3xl">Written</div> by{" "}
            <span className="">Tod Fields</span>
          </div>
          <button
            onMouseLeave={() => {
              setSyn(false);
            }}
            onMouseOver={() => {
              setSyn(true);
            }}
            className="a bottom-[10%] right-4 r hover:bg-red-500 hover:text-white duration-300 z-10 rounded-3xl text-left TarSyn text-red-500 font-Climate border-2 p-8 border-black"
          >
            <div
              className={`w-[14%] rounded-full h-[30%] a duration-300 right-2 top-2 overflow-hidden flex items-center justify-center ${
                syn ? "bg-white" : "bg-white"
              }`}
            >
              <motion.div
                initial={{ x: "-200%", y: "200%" }}
                animate={syn ? { x: 0, y: 0 } : { x: "-200%", y: "200%" }}
                transition={{ duration: 0.6 }}
              >
                {RightArr("20", "20", "fill-red-500")}
              </motion.div>
            </div>
            <div>
              Explore
              <div className="-mt-7">Synopsis</div>
            </div>
          </button>
          <div className="a z-0 TarQ r">
            {TarQuotes.map((item) => {
              return (
                <div className="text-gray-200 font-Neue" key={item}>
                  <span className="">Tar:</span>
                  <span className="opacity-[0.5]">
                    {" "}
                    <span>"</span> {item} <span>"</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="h-fit w-full r  oveflow-hidden bg-black"
      >
        <div className="a dotW h-4/5 w-11/12 left-16 flex items-center justify-center ">
          <span className="text-red-500">"</span>
          <span className="text-white">...</span>
          <span className="text-red-500">"</span>
        </div>
        <Image
          width={100}
          className="w-full "
          unoptimized={true}
          height={400}
          src={Aud.src}
          alt="Aud Pic"
        ></Image>
      </motion.div>
      <motion.div
        className={`bg-black h-screen w-full flex items-center r justify-center overflow-hidden text-white allSize font-Neue`}
      >
        <div className="r">
          <div className="flex">
            All{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-WagonI border-2 rounded-full  h-fit mx-4 px-8 flex border-red-500 pt-4  items-center justify-center "
            >
              About{" "}
            </motion.span>
            the{" "}
          </div>
          <motion.span className="">
            <Music Letter="P" initial={0}></Music>
            <Music Letter="O" initial={1}></Music>
            <Music Letter="W" initial={2}></Music>
            <Music Letter="E" initial={3}></Music>
            <Music Letter="R" initial={4}></Music>
          </motion.span>{" "}
        </div>{" "}
      </motion.div>
      <TarCastList></TarCastList>
    </div>
  );
}
