import { useState, useEffect } from "react";
import { Link, Navigate, Routes, Route } from "react-router-dom";
import Header from "./Header";
import IssueList from "./IssueList";
import "./DashBoard.css";
import Footer from "./Footer.jsx";

const DashBoard = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );
  if (authenticated === "false") {
    return <Navigate to="/" />;
  } else {
    if (!localStorage.getItem("issues")) {
      // prevent page crash
      localStorage.setItem("issues", JSON.stringify([]));
    }
    const [issues, setIssues] = useState(
      JSON.parse(localStorage.getItem("issues")) || null
    );
    return (
      <>
        <div className="main_content dashboard_container">
          <div className="btns_dash">
            <div className="dash_sort">
              <button className="btn_sort btn_open">Open tickets</button>
              <button className="btn_sort btn_closed">Closed tickets</button>
            </div>
            <div className="dash_create">
              <Link to="/create">
                <button className="btn_create">Create</button>
              </Link>
            </div>
          </div>
          <div className="entries_dash">
            <div className="num_entries">
              <h5 className="title_entries">show</h5>
              <select className="entries_select select_num">
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
              <h5 className="title_entries">entries</h5>
            </div>
            <div className="severity_entries">
              <h5 className="title_entries">show</h5>
              <select className="entries_select select_severity">
                <option value="urgent">Urgent</option>
                <option value="critical">Critical</option>
                <option value="major">Major</option>
              </select>
              <h5 className="title_entries">entries</h5>
            </div>
          </div>
          <table className="table_dashboard">
            <thead>
              <tr>
                <th>ID</th>
                <th>Severity</th>
                <th className="th_title">Title</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {issues.length ? (
                issues.map((issue) => {
                  return <IssueList key={issue.id} issue={issue}></IssueList>;
                })
              ) : (
                <tr>
                  <td colSpan={6}>No issues</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default DashBoard;
