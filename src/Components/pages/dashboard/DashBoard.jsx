import "./DashBoard.css";
import Projects from "./components/projects/Projects";
import Charts from "./components/charts/Chart";

const DashBoard = () => {
  return (
    <div className="dashboard_container">
      <h1 className="header_dashboard title_container">DASHBOARD</h1>
      <Projects />
      <div className="charts_container">
        <Charts title={"Type"} />
        <Charts title={"Status"} />
        <Charts title={"Priority"} />
      </div>
    </div>
  );
};

export default DashBoard;
