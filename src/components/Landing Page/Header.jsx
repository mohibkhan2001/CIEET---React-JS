import { motion } from "motion/react";
import LoginBtn from "../common/LoginBtn"
import ProjectLogo from "../common/ProjectLogo"

const Header = () => {
  return (
    <motion.div 
        className="max-w-full bg-white/80 py-3 md:py-5 px-4 md:px-10 flex justify-between items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
        <ProjectLogo/>
        <LoginBtn/>
    </motion.div>
  )
}

export default Header