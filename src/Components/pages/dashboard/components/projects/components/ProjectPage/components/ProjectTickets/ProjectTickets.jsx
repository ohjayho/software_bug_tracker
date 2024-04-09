import "../../../../../../components.css";
import "../../../modal.css";
import "./ProjectTickets.css";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import TicketModal from "./components/ticket-modal/TicketModal";

const ProjectTickets = ({ tickets, setSelectedTicket }) => {
  const [storedTickets, setStoredTickets] = useState([]);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await axios.get("http://localhost:8800/project_tickets");
        setStoredTickets(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTickets();
  }, [tickets]);
  console.log("티켓", tickets);

  return (
    <>
      {ticketModalOpen &&
        createPortal(
          <TicketModal setTicketModalOpen={setTicketModalOpen} />,
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
            {tickets.length ? (
              tickets.map((ticket) => {
                return (
                  <tr
                    onClick={() => {
                      setSelectedTicket((selectedTicket) => !selectedTicket);
                    }}
                    className="ticket_table"
                  >
                    <td>{ticket.title}</td>
                    <td>{ticket.description}</td>
                    <td>
                      <div className="last_column_table">
                        <div className="members_contributors">
                          {ticket.author}
                        </div>
                        <h3 className="menu_dots">:</h3>
                      </div>
                    </td>
                  </tr>
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
