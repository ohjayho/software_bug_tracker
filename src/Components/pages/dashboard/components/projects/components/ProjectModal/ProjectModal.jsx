import "./ProjectModal.css";
import SelectMembers from "./components/SelectMembers";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ProjectModal = ({ setModalOpen }) => {
  const [project, setProject] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState("");
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    const createNewProject = async () => {
      try {
        await axios.post("http://localhost:8800/projects", project);
      } catch (err) {
        console.log(err);
      }
    };

    createNewProject();
    // localStorage.setItem("projects", JSON.stringify(projects));
  }, [project]);

  const handleSubmit = (e) => {
    const newProject = {
      id: uuidv4(),
      name: name,
      description: description,
      members: members
    };

    setProject(newProject);
  };

  return (
    <div className="modal_container">
      <form className="modal" onSubmit={handleSubmit}>
        <div className="header_modal">
          <h1 className="title_modal">Add New Project</h1>
          <h1 className="close_btn_modal" onClick={() => setModalOpen(false)}>
            Χ
          </h1>
        </div>
        <div className="content_modal">
          <div className="name_section_modal section_modal">
            <h2 className="subtitle_modal">Project Name</h2>
            <input
              type="text"
              className="input_name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="description_section_modal section_modal">
            <h2 className="subtitle_modal">Project Description</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="textarea_modal"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <SelectMembers setMembers={setMembers} />
        </div>
        <div className="footer_modal">
          <button className="submit_btn_modal">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectModal;
