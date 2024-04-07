import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5}}
        >
        HypeR-Dev
        </motion.span>
        <div className="social">
          <motion.a href="https://www.linkedin.com/in/alireza-daneshvar-910ba4194/" target="_blank" whileHover={{scale:1.9}}>
            <AiFillLinkedin className="icons Linkedin" fill="#0075B5"/>
          </motion.a>
          <motion.a href="https://www.instagram.com/alireza._.dns?igsh=cDFqYzJqOGVhMng3" target="_blank" whileHover={{scale:1.9}}>
            <AiOutlineInstagram className="icons Instagram" fill="#d62976"/>
          </motion.a>
          <motion.a href="https://github.com/Alirezad126" target="_blank" whileHover={{scale:1.9}}>
            <AiOutlineGithub className="icons Github" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
