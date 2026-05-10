import { Routes, Route } from "react-router-dom";
import StudentRoutes from "../Routes/StudentRoutes"
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/student/*" element={<StudentRoutes />} />
    </Routes>
  );
};

export default AppRoutes;