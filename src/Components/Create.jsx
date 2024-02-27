import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Create.css";

const Create = () => {
  const [values, Setvalues] = useState({
    id: "",
    title: "",
    severity: "critical",
    reporter: "",
    description: "",
    time: "",
    status: "to_do"
  });

  const navigate = useNavigate();

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    localStorage.setItem(
      "issues",
      JSON.stringify([...JSON.parse(localStorage.getItem("issues")), values])
    );

    navigate("/dashboard");
  }, [values.time]);

  const handleCreate = (e) => {
    e.preventDefault();
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const id = Date.now();
    Setvalues({ ...values, id: id, time: `${month}/${day}/${year}` });
  };

  const onChange = (e) => {
    Setvalues({ ...values, [e.target.name]: e.target.value });
    console.log("onchnage");
  };

  return (
    <>
      <Header />
      <div className="create_wrapper">
        <div className="create_container">
          <h1 className="create_title">Create an issue</h1>
          <form className="issue_form" onSubmit={handleCreate}>
            <div className="inputs input_title">
              <h4 className="label label_title">Title</h4>
              <input
                type="text"
                name="title"
                id="title"
                className="input_border"
                onChange={onChange}
                required
              />
            </div>
            <div className="inputs input_severity">
              <h4 className="label label_severity">Severity</h4>
              <select
                name="severity"
                className="create_select"
                onChange={onChange}
              >
                <option value="critical">Critical</option>
                <option value="urgent">Urgent</option>
                <option value="major">Major</option>
              </select>
            </div>
            <div className="inputs input_severity">
              <h4 className="label label_severity">Status</h4>
              <select
                name="status"
                className="create_select create_status"
                onChange={onChange}
              >
                <option value="to_do">TO DO</option>
                <option value="in_progress">IN PROGRESS</option>
                <option value="ready_for_review">READY FOR REVIEW</option>
                <option value="completed">COMPLETED</option>
              </select>
            </div>
            <div className="inputs input_reporter">
              <h4 className="label label_reporter">Reporter</h4>
              <input
                type="text"
                name="reporter"
                id="reporter"
                className="input_border"
                onChange={onChange}
                required
              />
            </div>
            <div className="inputs input_description">
              <h4 className="label label_description">Description</h4>
              <textarea
                name="description"
                id="description"
                className="text_description input_border"
                onChange={onChange}
                required
              ></textarea>
            </div>
            <div className="btns">
              <Link to="/dashboard">
                <button className="btn_issue btn_issue_cancel">Cancel</button>
              </Link>
              <button className="btn_issue btn_issue_submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
