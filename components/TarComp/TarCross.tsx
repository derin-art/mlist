import { motion } from "framer-motion";

export default function TarCross() {
  const whiteSvg = () => {
    return (
      <svg
        id="10015.io"
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M386.5,306Q316,372,238.5,374.5Q161,377,95.5,308.5Q30,240,82,148.5Q134,57,238,60Q342,63,399.5,151.5Q457,240,386.5,306Z"
        />
      </svg>
    );
  };
  return (
    <motion.div className="a flex items-center border justify-center TarCross  r text-white ">
      {/*  <div className="boxT w-8 border-2 rotate-90 a left-[25.5%] border-white bg-white rounde"></div>
      <div className="boxT w-8 border-2 -rotate-90 a right-[25.5%] top-[35%] border-white bg-white rounde"></div>
      <div className="boxT w-8 border-2 a top-[10%] border-white bg-white rounde"></div>
      <div className="boxT w-8 border-2 rotate-180 a bottom-[10%] border-white bg-white rounde"></div> */}
      <div className="a top-0 h-1/2 w-full border-b"></div>
      <div className="a bottom-0 h-1/2 w-full flex">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full border-l"></div>
      </div>
      <div className="a text-e letterW  font-WagonI top-[5%]   right-[16%] r">
        <div className="a w-[160%] blur-[30px] h-[160%] top-[30%] z-0">
          {whiteSvg()}
        </div>
        <div className="z-30">a</div>
      </div>
      <div className="a text letterW font-Climate top-[8.2%]  left-[15%]  ">
        T
      </div>
      <div className="a tex letterW font-Climate bottom-[8.2%]  right-[15%] flex items-center justify-center  ">
        r
      </div>
      <div className="a tex letterW font-Climate bottom-[18%] border left-[15%] r">
        <div className="point-burst text-sm "></div>
      </div>
    </motion.div>
  );
}
