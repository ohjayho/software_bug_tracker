import "./DashBoard.css";
import Projects from "./components/projects/Projects";
import Charts from "./components/charts/Chart";

const DashBoard = () => {
  return (
    <div className="dashboard_container">
      <h1 className="header_dashboard">DASHBOARD</h1>
      <Projects />
      <div className="charts_container">
        <Charts />
        <Charts />
        <Charts />
      </div>
    </div>
  );
};

export default DashBoard;
