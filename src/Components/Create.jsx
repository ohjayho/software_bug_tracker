import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const authenticated = localStorage.getItem("authenticated");
  if (authenticated !== "true") {
    return <Navigate to="/" />;
  } else {
    // if modifying
    const location = useLocation().state;
    const modify = location ? true : false;
    console.log(location, modify);

    const [values, Setvalues] = useState(
      modify
        ? {
            id: location.id,
            title: location.title,
            severity: location.severity,
            reporter: location.reporter,
            description: location.description,
            time: location.time,
            status: location.status
          }
        : {
            id: "",
            title: "",
            severity: "critical",
            reporter: "",
            description: "",
            time: "",
            status: "to_do"
          }
    );

    const navigate = useNavigate();

    let issues = JSON.parse(localStorage.getItem("issues"));

    console.log("test,", issues);

    const issue_num =
      issues.length === 0 ? 1 : issues[issues.length - 1].id + 1;

    const [isInitialRender, setIsInitialRender] = useState(true);

    useEffect(() => {
      if (isInitialRender) {
        setIsInitialRender(false);
        return;
      }

      if (modify) {
        issues.forEach((issue, idx) => {
          if (issue.id === location.id) {
            issues[idx] = values;
            console.log("이슈", issue, "밸류", values);
            console.log(issues + "hdlsfahjklvczx");
          }
        });
        console.log("바뀐 ", issues);
        localStorage.setItem("issues", JSON.stringify([...issues]));
      } else {
        localStorage.setItem("issues", JSON.stringify([...issues, values]));
      }

      navigate("/dashboard");
    }, [values.time]);

    const handleCreate = (e) => {
      e.preventDefault();
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      const milli = date.getMilliseconds();
      const id = modify ? location.id : issue_num;
      Setvalues({
        ...values,
        id: id,
        time: `${month}/${day}/${year}/${milli}`
      });
    };

    const onChange = (e) => {
      const { name, value } = e.target;
      console.log(`name:${name}, value:${value}`);
      Setvalues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
      <>
        <div className="main_content create_wrapper">
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
                <button className="btn_issue btn_issue_submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Create;
