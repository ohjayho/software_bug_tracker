import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import ProjectTeam from "./components/project-team/ProjectTeam";
import ProjectTickets from "./components/project-tickets/ProjectTickets";
import SelectedTicket from "./components/project-tickets/components/SelectedTicket";
import { useState, useEffect } from "react";
import axios from "axios";

const ProjectPage = () => {
  const { id } = useParams();
  const [projectInfo, setProjectInfo] = useState({});
  const [selectedTicket, setSelectedTicket] = useState(false);

  useEffect(() => {
    const fetchProjectInfo = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/project/${id}`);
        setProjectInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjectInfo();
  }, []);

  return (
    <div className="project_page_container">
      <h1 className="header_project_page title_container">PROJECT</h1>
      <div className="upper_section_project_page">
        {projectInfo.length && <ProjectTeam team={projectInfo[0]} />}
        {projectInfo.length && (
          <ProjectTickets
            tickets={projectInfo[1]}
            setSelectedTicket={setSelectedTicket}
          />
        )}
      </div>
      <div className="lower_section_project_page">
        <SelectedTicket selectedTicket={selectedTicket} />
      </div>
    </div>
  );
};

export default ProjectPage;
