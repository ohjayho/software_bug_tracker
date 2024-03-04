import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import "./Issue.css";

const Issue = () => {
  const { state } = useLocation();
  const { id, reporter, title, severity, description, time } = state;
  const [issues, setIssues] = useState(
    JSON.parse(localStorage.getItem("issues"))
  );
  const navigate = useNavigate();

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }
    localStorage.setItem("issues", JSON.stringify(issues));
    navigate("/dashboard");
  }, [issues]);

  const onDelete = () => {
    const newIssues = issues.filter((issue) => issue.id !== id);
    setIssues(newIssues);
  };
  return (
    <>
      <div className="main_content issue_wrapper">
        <div className="issue_container">
          <div className="issue_header issue_content">
            <div className="issue_status_container">
              <div className="open_status status_box">Open</div>
              <div className="severity_status status_box">{severity}</div>
            </div>
            <div className="issue_date">
              {reporter} created this issue on {time}
            </div>
          </div>
          <div className="issue_label">Title</div>
          <div className="issue_title issue_content">{title}</div>
          <div className="issue_label">Description</div>
          <div className="issue_description issue_content">{description}</div>
          <div className="issue_label">Progress</div>
          <div className="issue_progress issue_content">IN PROGRESS</div>
          <div className="issue_btns">
            <button className="btn_issue_modify btn_detail">Modify</button>
            <button className="btn_issue_delete btn_detail" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Issue;
