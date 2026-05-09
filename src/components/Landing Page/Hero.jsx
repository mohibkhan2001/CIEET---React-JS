const Hero = () => {
    const ProjectInfo = ["100% Free Forever", "No Credit Card Required", "Unlimited Access"];
    return (
        <div className="hero-page flex flex-col gap-10 items-center w-screen h-screen py-20 mb-20">
            <h1 className="text-6xl font-extrabold text-gray-800 leading-tight text-center w-200 inline-block">
                Master Cambridge Exams with{" "}
                <span className="mt-2 bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                    Free AI-Powered Learning
                </span>
            </h1>
            <span className="w-xl text-center text-md text-gray-400">
                A completely free education platform for students, teachers, and administrators. Create exams, track progress, and achieve excellence—all at no cost.
            </span>
            <button className="flex items-center gap-2 rounded-md p-4 bg-transparent text-primary border-0 outline-primary outline-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-500">
                Watch Demo
                <img src="/src/assets/play.png" alt="Watch Demo" className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-8">
                {ProjectInfo.map((info,idx)=>{
                    return(
                        <div key={idx} className="flex items-center gap-2">
                            <img src="/src/assets/checklist.png" alt="Feature" className="w-4 h-4"/>
                            <span>{info}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Hero;