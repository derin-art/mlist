import { motion } from "framer-motion";
import Compose from "../../public/Data/Tar/Images/Compose.jpg";
import Compose1 from "../../public/Data/Tar/Images/Compose1.jpg";



export default function Quote(){
    return (
      <div className="w-full h-screen  r flex items-center justify-start px-[5.7vw] py-[5.9vw] gap-x-[1.38vw]">
        <div
          style={{ overflow: "hidden", display: "inline-block" }}
          className="w-[31.7vw] h-[35.5vw] "
        >
          <motion.img
            initial={{ scale: 1.2, x: "50%" }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
            src={Compose1.src}
          ></motion.img>
        </div>
        <div
          style={{ overflow: "hidden", display: "inline-block" }}
          className="w-[31.7vw] h-[35.5vw]"
        >
          <motion.img
            initial={{ scale: 1.2, x: "60%" }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
            src={Compose.src}
          ></motion.img>
        </div>
        <div className="text-[1.57vw] a text-white right-[4vw] w-[23vw] font-Neue uppercase top-[5.1vw]">
          <span className="font-Climate">"</span>
          you must service the composer. You gotta sublimate yourself, your{" "}
          <span className=" ">ego</span>, and, yes, your identity
          <span className="font-Climate">"</span>
          <div className="text-[1.05vw] mt-[2.1vw]">LYDIA TAR</div>
        </div>
      </div>
    );

}