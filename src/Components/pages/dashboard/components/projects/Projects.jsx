import "../../components.css";
import "./Projects.css";
import "./components/Project";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Project from "./components/Project";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import axios from "axios";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8800/projects");
        setProjects(res.data);
      } catch (err) {
        console.log(err);
        setProjects(false);
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
      <div className="projects_container components_container border_shadow_component">
        <div className="header_projects header_components">
          <h1 className="title_projects title_header">Projects</h1>
          <button
            className="btn_new_projects btn_new"
            onClick={() => setModalOpen(true)}
          >
            New Project
          </button>
        </div>
        <table className="table_projects table_components">
          <thead>
            <tr>
              <th>PROJECT</th>
              <th>DESCRIPTION</th>
              <th>CONTRIBUTORS</th>
            </tr>
          </thead>
          <tbody>
            {projects.length ? (
              projects.map((prj) => {
                return (
                  <Project
                    project={prj}
                    key={prj.project_id}
                    setModalOpen={setModalOpen}
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan={3}>No projects</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pages_projects btns_pagination_container">
          <div className="btns_pagination prev_btn_pages">{`<`}</div>
          <div className="btns_pagination num_btn_pages">1</div>
          <div className="btns_pagination next_btn_pages">{`>`}</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
