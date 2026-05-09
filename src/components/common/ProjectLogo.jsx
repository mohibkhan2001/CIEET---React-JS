import { useNavigate } from "react-router-dom";
import { images } from "../../assets.js";

const ProjectLogo = () => {
  const navigateToladningPage = useNavigate();
  return (
    <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
      
      {/* Logo container */}
      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:scale-105 transition-all" onClick={() => navigateToladningPage("/")}>
        <img
          src={images.studyingIcon}
          alt="CIEET Logo"
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
      </div>

      {/* Brand text */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-base md:text-lg font-bold tracking-wide text-primary2">
          CIE²T
        </h1>
        <span className="text-xs text-gray-500 hidden sm:block">
          Learning Tracker
        </span>
      </div>
    </div>
  );
};

export default ProjectLogo;