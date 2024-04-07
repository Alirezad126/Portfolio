import "./parallax.scss";
import { motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import { LuArrowDownToLine } from "react-icons/lu";

const scrollButtonEffect = {
  opacity: 0,
  y: 10,
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};

const heroImageInview = {
    y: [0, 20, -20, 0],
    rotate: [0, 8, -8, 0],
    transition: {
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },}

const Parallax = ({ type }) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yBg = useTransform(scrollYProgress,[0,1], ["0%", "100%"])
    const yText = useTransform(scrollYProgress,[0,1], ["0%", "500%"])
    

  return (
    <div
      className="parallax"
      ref={ref}
    >
      <motion.h1 style={{y: yText}}>
        
        Who Am I?!
        <br />
        <motion.div animate={scrollButtonEffect}>
          <LuArrowDownToLine style={{ marginTop: "5%" }} />
        </motion.div>
      </motion.h1>

      <motion.div  className="mountains"></motion.div>
      <motion.div animate={heroImageInview} style={{y: yBg}} className="planets"></motion.div>
      <motion.div  style={{x: yBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
