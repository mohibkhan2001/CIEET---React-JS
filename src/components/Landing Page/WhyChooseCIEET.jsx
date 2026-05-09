import { motion } from "motion/react";
import { images, data } from "../../assets.js";

const WhyChooseCIEET = () => {
    return (
        <motion.section 
            className="w-full py-12 md:py-24 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="w-full max-w-6xl mx-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* LEFT SIDE (Text Focus) */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className=" flex items-center justify-center">
                            <img
                                src={images.studyingIcon}
                                alt="Free"
                                className="w-8 h-8 md:w-10 md:h-10"
                            />
                        </div>
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            Open Education Platform
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                        Education should be
                        <span className="text-blue-600"> free and accessible</span>
                    </h1>

                    <p className="mt-3 md:mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                        We believe learning tools should not be locked behind paywalls.
                        CIEET exists to empower students and teachers with unrestricted access
                        to exams, resources, and analytics.
                    </p>

                   
                </motion.div>

                {/* RIGHT SIDE (Feature Stack) */}
                <div className="space-y-4 md:space-y-6">
                    {data.whyCieet.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                                <img
                                    src={images[item.icon]}
                                    alt={item.title}
                                    className="w-5 h-5 md:w-6 md:h-6"
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-600 mt-1">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
};

export default WhyChooseCIEET;