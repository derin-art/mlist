import { motion } from "framer-motion";
import CateB1 from "../../../public/Data/Tar/Images/CateB.jpg";
import CateB1Png from "../../../public/Data/Tar/Images/CateB.png";
import WhiteBlob from "../../../public/Svg/White.svg";

const upWardArrow = (
  style?: string,
  width: string = "24",
  height: string = "24"
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={`${style}`}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
      />
    </svg>
  );
};

const sunIcon = (
  style?: string,
  width: string = "24",
  height: string = "24"
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={style}
      viewBox="0 0 16 16"
    >
      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
    </svg>
  );
};

export default function CateBlanchettCta() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black r overflow-hidden">
      <img
        className="a blur-[90px] w-[40vw] h-[50vw]"
        src={WhiteBlob.src}
      ></img>
      <div className="a w-full flex flex-col items-center will-change justify-center text-white md:text-[23px] text-[4vw] lS">
        <div className="text-white font-PvcI ">
          Cate <span className="font-PvcB">Blanchett</span> is
        </div>

        <motion.div className="h-[435px] w-[270px] ">
          <motion.div style={{ display: "inline-block", overflow: "hidden" }}>
            {" "}
            <motion.img
              whileHover={{ scale: 0.9 }}
              initial={{ x: "100%", width: 200 }}
              whileInView={{ x: 0, width: 270 }}
              transition={{ duration: 0.7 }}
              className="pos "
              src={CateB1.src}
            ></motion.img>
          </motion.div>
        </motion.div>
        <div className="text-white font-PvcB md:text-[1.5vw] text-[3vw]">
          Lydia<span className="font-PvcI"> Tar</span>
        </div>
      </div>
      <div className="a top-[17%] text-white left-[20%] border-2 border-blue-700 font-Neue justify-center rounded-full text-sm items-center p-1 px-2 w-fit flex">
        Cinematography by Florian Hoffmeister
      </div>
    </div>
  );
}
