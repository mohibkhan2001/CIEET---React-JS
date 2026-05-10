import ProjectLogo from "../common/ProjectLogo.jsx";
import { data, images } from "../../assets.js";

const Std_Header = () => {
    const activePage = "Home";

    const user = {
        name: "Mohib Khan",
        role: "Student",
        notifications: 3
    };

    return (
        <header className="w-full bg-white border-b border-gray-100 px-10 py-4 sticky top-0 z-50 backdrop-blur-lg">
            <div className="flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <ProjectLogo />
                </div>

                {/* Center Navigation */}
                <nav className="flex items-center bg-gray-50 rounded-full p-1 gap-2">
                    {data.StudentNavItems.map((navItem, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center gap-2 px-5 py-2 rounded-full cursor-pointer transition-all
                            ${
                                activePage === navItem.name
                                    ? "bg-white shadow-md text-blue-600"
                                    : "text-gray-600 hover:bg-white"
                            }`}
                        >
                            <img
                                src={navItem.icon}
                                alt={navItem.name}
                                className="w-4 h-4"
                            />
                            <span className="text-sm font-medium">
                                {navItem.name}
                            </span>
                        </div>
                    ))}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-5">

                    {/* Search */}
                    <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm w-36"
                        />
                    </div>

                    {/* Notifications */}
                    <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition">
                        <img
                            src={images.BellIcon}
                            alt="Notifications"
                            className="w-5 h-5"
                        />
                        {user.notifications > 0 && (
                            <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] bg-red-500 text-white rounded-full">
                                {user.notifications}
                            </span>
                        )}
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition">
                        <img
                            src={images.UserMaleIcon}
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />

                        <div>
                            <h1 className="text-sm font-semibold">
                                {user.name}
                            </h1>
                            <span className="text-xs text-gray-500 flex gap-3 items-center">
                                {user.role}
                                <img src={images.DownArrowIcon} className="h-3 w-3" />
                            </span>
                        </div>

                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Std_Header;