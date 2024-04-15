import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import ProjectTeam from "./components/ProjectTeam/ProjectTeam";
import ProjectTickets from "./components/ProjectTickets/ProjectTickets";
import SelectedTicket from "./components/ProjectTickets/components/SelectedTicket/SelectedTicket";
import { useState } from "react";

const ProjectPage = () => {
  const { project_id } = useParams();
  const [selectedTicketOpen, setSelectedTicketOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState("");
  // to pass team data to both ProjectTeam and ProjectTickets, declare useState here.
  // Actual assigning is happening in ProjectTeam in the useEffect
  const [team, setTeam] = useState([]);

  return (
    <div className="project_page_container">
      <h1 className="header_project_page title_container">PROJECT</h1>
      <div className="upper_section_project_page">
        <ProjectTeam project_id={project_id} team={team} setTeam={setTeam} />
        <ProjectTickets
          project_id={project_id}
          setSelectedTicket={setSelectedTicket}
          setSelectedTicketOpen={setSelectedTicketOpen}
          team={team[0]}
        />
      </div>
      <div className="lower_section_project_page">
        <SelectedTicket
          selectedTicket={selectedTicket}
          selectedTicketOpen={selectedTicketOpen}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
