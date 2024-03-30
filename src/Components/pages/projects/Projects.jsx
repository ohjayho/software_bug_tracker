import "./Projects.css";
import "./components/Project";
import { useState } from "react";
import Project from "./components/Project";
import dummyArray from "./components/dummy";
import Modal from "./components/Modal";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <div className="projects_container">
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
            {dummyArray.map((element) => {
              return <Project props={element} />;
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
