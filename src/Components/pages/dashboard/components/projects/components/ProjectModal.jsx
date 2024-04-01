import "./ProjectModal.css";
import SelectMembers from "./select-members/SelectMembers";
import { useState, useEffect } from "react";

const ProjectModal = ({ setModalOpen }) => {
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects")) || []
  );
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState("");
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleSubmit = () => {
    const newProject = {
      project_name: name,
      project_description: description,
      project_members: members
    };

    setProjects((projects) => [...projects, newProject]);
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
          {/* <div className="addmembers_section_modal section_modal">
            <h2 className="subtitle_modal">Add Team Members</h2>
            <select
              name=""
              id=""
              className="select_modal"
              multiple
              onChange={(e) => {
                const selected = [];
                Array.prototype.forEach.call(e.target.options, function (opt) {
                  // Since e.target.option whichi is htmloptionscollection is not iterable, use call function
                  if (opt.selected) {
                    selected.push(opt.value);
                  }
                });
                setMembers(selected);
              }}
            >
              <option value="5재">5재</option>
              <option value="동라프">동라프</option>
              <option value="앙큼">앙큼</option>
            </select>
          </div> */}
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
