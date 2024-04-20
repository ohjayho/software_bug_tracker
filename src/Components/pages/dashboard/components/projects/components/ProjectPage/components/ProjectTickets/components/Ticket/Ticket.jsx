import "./Ticket.css";

const Ticket = ({ ticket, setSelectedTicket, setSelectedTicketOpen }) => {
  const handleTicketClick = () => {
    setSelectedTicket(ticket);
    setSelectedTicketOpen((so) => !so);
  };

  return (
    <tr
      onClick={handleTicketClick}
      className="ticket_table"
      key={ticket.ticket_id}
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
};

export default Ticket;
