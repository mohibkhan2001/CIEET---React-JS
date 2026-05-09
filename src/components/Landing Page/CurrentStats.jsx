import { motion } from "motion/react";
import { data } from "../../assets.js";

const CurrentStats = () => {
    return (
        <motion.div 
            className="w-full px-4 md:px-10 py-10 md:py-20 bg-gray-100 flex flex-col sm:flex-row justify-around mb-10 md:mb-20 gap-6 md:gap-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {data.currentStats.map((CurrentStat, idx) => {
                return (
                    <motion.div 
                        className="flex flex-col text-center" 
                        key={idx}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent ">{CurrentStat.stat}</h3>
                        <span className="text-gray-500 text-sm md:text-base">{CurrentStat.name}</span>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default CurrentStats