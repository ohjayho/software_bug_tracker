import "./Projects.css";
import "./components/Project";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Project from "./components/Project";
import ProjectModal from "./components/ProjectModal";
import axios from "axios";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects"))
  );

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8800/projects");
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProjects();
  }, []);

  return (
    <>
      {modalOpen &&
        createPortal(
          <ProjectModal setModalOpen={setModalOpen} />,
          document.body
        )}
      <div className="projects_container border_shadow_component">
        <div className="header_projects">
          <h1 className="title_projects">Projects</h1>
          <button
            className="btn_new_projects"
            onClick={() => setModalOpen(true)}
          >
            New Project
          </button>
        </div>
        <table className="table_projects">
          <thead>
            <tr>
              <th>PROJECT</th>
              <th>DESCRIPTION</th>
              <th>CONTRIBUTORS</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((prj) => {
              return <Project project={prj} />;
            })}
          </tbody>
        </table>
        <div className="pages_projects">
          <div className="btns_pages prev_btn_pages">{`<`}</div>
          <div className="btns_pages num_btn_pages">1</div>
          <div className="btns_pages next_btn_pages">{`>`}</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
