import { motion } from "motion/react";
import { images, data } from "../../assets.js";

const Hero = () => {
    return (
        <motion.div 
            className="hero-page flex flex-col gap-6 md:gap-10 items-center w-screen h-screen py-10 md:py-20 mb-10 md:mb-20 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800 leading-tight text-center w-full max-w-4xl inline-block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Master Cambridge Exams with{" "}
                <span className="mt-2 bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                    Free AI-Powered Learning
                </span>
            </motion.h1>
            <motion.span 
                className="w-full max-w-2xl text-center text-sm md:text-md text-gray-400 px-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                A completely free education platform for students, teachers, and administrators. Create exams, track progress, and achieve excellence—all at no cost.
            </motion.span>
            <motion.button 
                className="flex items-center gap-2 rounded-md p-3 md:p-4 bg-transparent text-primary border-0 outline-primary outline-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 text-sm md:text-base"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Watch Demo
                <img src={images.playIcon} alt="Watch Demo" className="w-3 h-3 md:w-4 md:h-4" />
            </motion.button>
            <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                {data.projectInfo.map((info,idx)=>{
                    return(
                        <motion.div 
                            key={idx} 
                            className="flex items-center gap-2 text-sm md:text-base"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                        >
                            <img src={images.checklistIcon} alt="Feature" className="w-3 h-3 md:w-4 md:h-4"/>
                            <span>{info}</span>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    );
};

export default Hero;