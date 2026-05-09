import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
        <button className=" py-2 px-6 rounded-md bg-primary text-white text-sm cursor-pointer  transition-all" onClick={() => navigate("/login")}>Login</button>
    </div>
  )
}

export default LoginBtn