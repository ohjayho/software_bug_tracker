import "./Tickets.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await axios.get("http://localhost:8800/project_tickets");
        setTickets(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTickets();
  }, []);

  const navigate = useNavigate();

  const handleClick = (project_id) => {
    navigate(`/dashboard/project/${project_id}`);
  };

  return (
    <div className="tickets_container">
      <h1 className="header_tickets title_container">TICKETS</h1>
      <div className="border_shadow_component components_container">
        <div className="header_project_tickets header_components">
          <h1 className="title_project_tickets title_header">Tickets</h1>
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
            {tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="ticket_table"
                onClick={() => handleClick(ticket.project_id)}
              >
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
                <td>{ticket.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btns_pagination_container">
          <div className="btns_pagination prev_btn_pages">{`<`}</div>
          <div className="btns_pagination num_btn_pages">1</div>
          <div className="btns_pagination next_btn_pages">{`>`}</div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
