import { motion } from "framer-motion";
import CateB1 from "../../../public/Data/Tar/Images/CateB.jpg";

export default function CateBlanchettCta() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black r overflow-hidden">
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
    </div>
  );
}
