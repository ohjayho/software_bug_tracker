import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import ProjectTeam from "./components/ProjectTeam/ProjectTeam";
import ProjectTickets from "./components/ProjectTickets/ProjectTickets";
import SelectedTicket from "./components/ProjectTickets/components/SelectedTicket";
import { useState } from "react";

const ProjectPage = () => {
  const { id } = useParams();
  const [selectedTicket, setSelectedTicket] = useState(false);

  return (
    <div className="project_page_container">
      <h1 className="header_project_page title_container">PROJECT</h1>
      <div className="upper_section_project_page">
        <ProjectTeam id={id} />
        <ProjectTickets id={id} setSelectedTicket={setSelectedTicket} />
      </div>
      <div className="lower_section_project_page">
        <SelectedTicket selectedTicket={selectedTicket} />
      </div>
    </div>
  );
};

export default ProjectPage;
