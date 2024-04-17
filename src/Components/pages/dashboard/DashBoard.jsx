import "./DashBoard.css";
import Projects from "./components/projects/Projects";
import Charts from "./components/charts/Chart";
import axios from "axios";
import { useState, useEffect } from "react";

const DashBoard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await axios.get("http://localhost:8800/project_tickets");
        setTickets(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTickets();
  }, []);

  return (
    <div className="dashboard_container">
      <h1 className="header_dashboard title_container">DASHBOARD</h1>
      <Projects />
      <div className="charts_container">
        {tickets.length > 0 && <Charts title={"Type"} tickets={tickets} />}
        {tickets.length > 0 && <Charts title={"Status"} tickets={tickets} />}
        {tickets.length > 0 && <Charts title={"Priority"} tickets={tickets} />}
      </div>
    </div>
  );
};

export default DashBoard;
