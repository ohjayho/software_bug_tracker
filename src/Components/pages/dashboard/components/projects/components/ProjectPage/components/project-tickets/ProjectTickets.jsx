import "../../../../../../components.css";
import "./ProjectTickets.css";

import { useState, useEffect } from "react";
import axios from "axios";

const ProjectTickets = ({ tickets, setSelectedTicket }) => {
  const [storedTickets, setStoredTickets] = useState([]);

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

  return (
    <div className="project_tickets_container border_shadow_component components_container">
      <div className="header_project_tickets header_components">
        <h1 className="title_project_tickets title_header">Tickets</h1>
        <button className="btn_new_member btn_new">New ticket</button>
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
          {tickets.map((ticket) => {
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
                    <div className="members_contributors">{ticket.author}</div>
                    <h3 className="menu_dots">:</h3>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btns_pagination_container">
        <div className="btns_pagination prev_btn_pages">{`<`}</div>
        <div className="btns_pagination num_btn_pages">1</div>
        <div className="btns_pagination next_btn_pages">{`>`}</div>
      </div>
    </div>
  );
};

export default ProjectTickets;
