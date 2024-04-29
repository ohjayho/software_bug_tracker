import "../../../../../../components.css";
import "../../../modal.css";
import "./ProjectTickets.css";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import TicketModal from "./components/TicketModal/TicketModal";
import Ticket from "./components/Ticket/Ticket";

const ProjectTickets = ({
  setSelectedTicket,
  setSelectedTicketOpen,
  project_id,
  team
}) => {
  const [storedTickets, setStoredTickets] = useState([]);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/project_tickets/${project_id}`
        );
        setStoredTickets(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTickets();
  }, []);

  return (
    <>
      {ticketModalOpen &&
        createPortal(
          <TicketModal
            setTicketModalOpen={setTicketModalOpen}
            team={team}
            project_id={project_id}
          />,
          document.body
        )}
      <div className="project_tickets_container border_shadow_component components_container">
        <div className="header_project_tickets header_components">
          <h1 className="title_project_tickets title_header">Tickets</h1>
          <button
            className="btn_new_member btn_new"
            onClick={() => setTicketModalOpen(true)}
          >
            New ticket
          </button>
        </div>
        <table className="table_tickets table_components">
          <thead>
            <tr>
              <th>TICKET TITLE</th>
              <th>DESCRIPTION</th>
              <th>TICKET AUTHOR</th>
            </tr>
          </thead>
          <tbody>
            {storedTickets.length > 0 ? (
              storedTickets.map((ticket) => {
                return (
                  <Ticket
                    ticket={ticket}
                    setSelectedTicket={setSelectedTicket}
                    setSelectedTicketOpen={setSelectedTicketOpen}
                    key={ticket.id}
                    team={team}
                    project_id={project_id}
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan={3}>No tickets</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="btns_pagination_container">
          <div className="btns_pagination prev_btn_pages">{`<`}</div>
          <div className="btns_pagination num_btn_pages">1</div>
          <div className="btns_pagination next_btn_pages">{`>`}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectTickets;
