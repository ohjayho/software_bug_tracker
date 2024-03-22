import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import "./Create.css";
import { v4 as uuidv4 } from "uuid";

const Create = () => {
  const authenticated = localStorage.getItem("authenticated");
  if (authenticated !== "true") {
    return <Navigate to="/" />;
  } else {
    // if modify
    const location = useLocation().state;
    const modify = location ? true : false;
    const [values, setValues] = useState(
      modify
        ? {
            title: location.id,
            severity: location.severity,
            reporter: location.reporter,
            description: location.description,
            time: location.time,
            status: location.status
          }
        : {
            title: "",
            severity: "CRITICAL",
            reporter: "",
            description: "",
            time: "",
            status: "TO DO"
          }
    );

    const navigate = useNavigate();

    const [issues, setIssues] = useState(
      JSON.parse(localStorage.getItem("issues"))
    );

    const [isInitialRender, setIsInitialRender] = useState(true);

    useEffect(() => {
      if (isInitialRender) {
        // to prevent the initial execution of the code
        setIsInitialRender(false);
        return;
      }

      if (modify) {
        // if this is the modifying mode
        issues.forEach((issue, idx) => {
          if (issue.id === location.id) {
            issues[idx] = values;
          }
        });
      }
      localStorage.setItem("issues", JSON.stringify(issues));

      navigate("/dashboard");
    }, [issues]);

    const handleCreate = (e) => {
      e.preventDefault();
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      const id = uuidv4();
      setValues((prevValue) => {
        const updatedValues = {
          ...prevValue,
          id: id,
          time: `${month}/${day}/${year}`
        };
        // put setIssues inside setValues to make sure setIssues after setValues
        setIssues([...issues, updatedValues]);
      });
    };

    const onChange = (e) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
      <>
        <div className="main_content create_wrapper">
          <div className="create_container">
            <h1 className="create_title">
              {modify ? "Modify the issue" : "Create an issue"}
            </h1>
            <form className="issue_form" onSubmit={handleCreate}>
              <div className="inputs input_title">
                <h4 className="label label_title">Title</h4>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="input_border"
                  onChange={onChange}
                  defaultValue={modify ? location.title : ""}
                  required
                />
              </div>
              <div className="inputs input_severity">
                <h4 className="label label_severity">Severity</h4>
                <select
                  name="severity"
                  className="create_select"
                  onChange={onChange}
                  defaultValue={modify ? location.severity : "critical"}
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
                  defaultValue={modify ? location.status : "to_do"}
                >
                  <option value="TO DO">TO DO</option>
                  <option value="IN PROGRESS">IN PROGRESS</option>
                  <option value="READY FOR REVIEW">READY FOR REVIEW</option>
                  <option value="COMPLETED">COMPLETED</option>
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
                  defaultValue={modify ? location.reporter : ""}
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
                  defaultValue={modify ? location.description : ""}
                  required
                ></textarea>
              </div>
              <div className="btns">
                <Link to="/dashboard">
                  <button className="btn_issue btn_issue_cancel">Cancel</button>
                </Link>
                <button className="btn_issue btn_issue_submit">
                  {modify ? "Modify" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Create;
