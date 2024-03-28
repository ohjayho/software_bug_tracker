import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main_layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
