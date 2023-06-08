import Lead from "../public/Data/Tar/Images/Title23.jpg";
import { motion } from "framer-motion";

export default function Synopsis() {
  return (
    <motion.div className="w-full flex items-center justify-center h-screen r">
      <motion.div
        initial={{ width: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        animate={{ width: "80vw", y: 100 }}
        className="  overflow-hidden h-[600px] a  "
      >
        <motion.img
          layout
          layoutId="image"
          transition={{ duration: 0.6 }}
          src={Lead.src}
          className={" w-[80vw] object-cover"}
        ></motion.img>
      </motion.div>
    </motion.div>
  );
}
