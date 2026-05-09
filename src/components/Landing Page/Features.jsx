import { motion } from "motion/react";
import { images, data } from "../../assets.js";

const Features = () => {
    return (
        <motion.div 
            className="w-full px-4 md:px-6 py-6 md:py-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {data.allFeatures.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className="group bg-white border border-gray-200 rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-6 h-6 md:w-7 md:h-7"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                            {feature.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Features;