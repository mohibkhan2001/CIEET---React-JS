import { useNavigate } from "react-router-dom";

const ProjectLogo = () => {
  const navigateToladningPage = useNavigate();
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      
      {/* Logo container */}
      <div className="w-10 h-10 flex items-center justify-center hover:scale-105 transition-all" onClick={() => navigateToladningPage("/")}>
        <img
          src="/src/assets/studying.png"
          alt="CIEET Logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Brand text */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-lg font-bold tracking-wide text-primary2">
          CIE²T
        </h1>
        <span className="text-xs text-gray-500">
          Learning Tracker
        </span>
      </div>
    </div>
  );
};

export default ProjectLogo;