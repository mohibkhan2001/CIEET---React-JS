import ProjectLogo from "../common/ProjectLogo"
import { data } from "../../assets.js";

const Header = () => {

    return (
        <div className="flex gap-10">
            <div>
                <ProjectLogo />
            </div>
            <nav className="flex items-center gap-10 cursor-pointer">
                {data.StudentNavItems.map((navItem, idx) => {
                    return (
                        <div key={idx} className="flex items-center gap-3 cursor-pointer">
                            <img
                                src={navItem.icon} alt="Home"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="font-medium text-sm leading-none">{navItem.name}</span>
                        </div>
                    )
                })}
            </nav>
        </div>
    )
}

export default Header