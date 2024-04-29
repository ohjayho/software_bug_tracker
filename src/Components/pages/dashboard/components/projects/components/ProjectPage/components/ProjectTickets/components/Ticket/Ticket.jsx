import "./Ticket.css";
import "../TicketModal/TicketModal";
import "../../../../../../../../components.css";
import { useEffect, useRef, useState } from "react";
import TicketDropDown from "./components/TicketDropDown/TicketDropDown";
import TicketModal from "../TicketModal/TicketModal";
import { createPortal } from "react-dom";

const Ticket = ({
  ticket,
  setSelectedTicket,
  setSelectedTicketOpen,
  team,
  project_id
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef();

  const handleTicketClick = () => {
    setSelectedTicket(ticket);
    setSelectedTicketOpen((so) => !so);
  };

  useEffect(() => {
    let dropDownHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", dropDownHandler);

    return () => {
      document.removeEventListener("mousedown", dropDownHandler);
    };
  });

  const handleMenu = (e) => {
    e.stopPropagation();
    setDropDownOpen(true);
  };

  return (
    <>
      {modalOpen &&
        createPortal(
          <TicketModal
            team={team}
            setTicketModalOpen={setModalOpen}
            project_id={project_id}
            ticket={ticket}
          />,
          document.body
        )}
      <tr onClick={handleTicketClick} className="ticket_table" key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.description}</td>
        <td>
          <div className="last_column_table">
            <div className="members_contributors">{ticket.author}</div>
            <h3 className="menu_dots" onClick={handleMenu} ref={menuRef}>
              :{dropDownOpen && <TicketDropDown setModalOpen={setModalOpen} />}
            </h3>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Ticket;
