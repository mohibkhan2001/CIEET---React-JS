import LoginBtn from "../common/LoginBtn"
import ProjectLogo from "../common/ProjectLogo"

const Header = () => {
  return (
    <div className="max-w-full bg-white/80 py-5 px-10  flex justify-between items-center">
        <ProjectLogo/>
        <LoginBtn/>
    </div>
  )
}

export default Header