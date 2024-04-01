import { useState, useEffect } from "react";
import { Link, Navigate, Routes, Route, useNavigate } from "react-router-dom";
import IssueList from "./components/IssueList";
import "./DashBoard.css";
import Projects from "../projects/Projects";
import Charts from "../charts/Chart";

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
