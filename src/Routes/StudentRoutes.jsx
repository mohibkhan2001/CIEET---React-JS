import { Routes, Route } from "react-router-dom";
import DashboardHome from "../pages/Student Dashboard/DashboardHome";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard-home" element={<DashboardHome />} />
    </Routes>
  );
};

export default StudentRoutes;