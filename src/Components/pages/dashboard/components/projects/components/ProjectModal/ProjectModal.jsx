import "../modal.css";
import SelectMembers from "./components/SelectMembers";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ProjectModal = ({
  setModalOpen,
  setContributors,
  projectInfo,
  handleNewProject
}) => {
  const [name, setName] = useState(projectInfo ? projectInfo.name : "");
  const [description, setDescription] = useState(
    projectInfo ? projectInfo.description : ""
  );
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const [uuid, setUuid] = useState(uuidv4());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      //if projectInfo is true, which means if it's editing mode
      id: projectInfo ? projectInfo.id : uuid,
      name: name,
      description: description,
      author_id: currentUser.id
    };

    //if edit mode
    if (projectInfo) {
      try {
        await axios.put("http://localhost:8800/projects", newProject);
        setModalOpen(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      // if new mode
      try {
        await axios.post("http://localhost:8800/projects", newProject);

        await axios.post(
          "http://localhost:8800/project_members",
          selectedMembers
        );
        handleNewProject(newProject);
        setContributors(selectedMembers);
        setModalOpen(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="modal_container">
      <form className="modal" onSubmit={handleSubmit}>
        <div className="header_modal">
          <h1 className="title_modal">
            {projectInfo ? "Edit Project" : "Add New Project"}
          </h1>
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
              required
              defaultValue={projectInfo && projectInfo.name}
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
              required
              defaultValue={projectInfo && projectInfo.description}
            ></textarea>
          </div>
          {!projectInfo && (
            <SelectMembers
              setSelectedMembers={setSelectedMembers}
              uuid={uuid}
            />
          )}
        </div>
        <div className="footer_modal">
          <button className="submit_btn_modal">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectModal;
