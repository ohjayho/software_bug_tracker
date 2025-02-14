import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import axios from "axios";
import "./Project.css";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import ProjectModal from "./ProjectModal/ProjectModal";

const Project = ({
  project,
  modalOpen,
  setModalOpen,
  handleDeleteProject,
  handleNewProject
}) => {
  const [contributors, setContributors] = useState([]);
  const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const getContributors = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/project_members/${project.id}`
        );
        setContributors(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getContributors();
  }, []);

  let menuRef = useRef();

  useEffect(() => {
    let dropDownHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropDownMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", dropDownHandler);

    return () => {
      document.removeEventListener("mousedown", dropDownHandler);
    };
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/project/${project.id}`);
  };

  const handleMenu = (e) => {
    e.stopPropagation();
    setDropDownMenuOpen(true);
  };

  return (
    <>
      {modalOpen &&
        createPortal(
          <ProjectModal
            setModalOpen={setModalOpen}
            setContributors={setContributors}
            projectInfo={isEdit ? project : null}
            handleNewProject={handleNewProject}
          />,
          document.body
        )}
      <tr className="project_table" onClick={handleClick}>
        <td>{project.name}</td>
        <td>{project.description}</td>
        <td>
          <div className="contributors_table last_column_table">
            <div className="members_contributors">
              {contributors.map((contributor, idx) => {
                return (
                  <div
                    key={idx}
                  >{`${contributor.first_name} ${contributor.last_name}`}</div>
                );
              })}
            </div>
            <div
              className="menu_dots"
              ref={menuRef}
              onClick={(e) => handleMenu(e)}
            >
              :
              {dropDownMenuOpen && (
                <DropDownMenu
                  project={project}
                  setModalOpen={setModalOpen}
                  setIsEdit={setIsEdit}
                  handleDeleteProject={handleDeleteProject}
                />
              )}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Project;
