import "../../../../../../../../components.css";
import "./SelectedTicket.css";
import AssignedDevs from "./components/AssignedDevs/AssignedDevs";
import Comments from "./components/Comments/Comments";

const SelectedTicket = ({ selectedTicket, selectedTicketOpen }) => {
  return (
    <div className="selected_ticket_container border_shadow_component components_container">
      <div className="header_selected_ticket">
        <h1 className="title_selected_ticket title_header">
          Selected Ticket Info
        </h1>
      </div>
      {selectedTicketOpen ? (
        <div className="main_section_selected_ticket">
          <div className="info_section_selected_ticket border_shadow_component">
            <table className="table_info">
              <tbody>
                <tr className="header_table_selected_ticket">
                  <th>TICKET TITLE</th>
                  <th>AUTHOR</th>
                  <th>DESCRIPTION</th>
                </tr>
                <tr>
                  <td>{selectedTicket.title}</td>
                  <td>{selectedTicket.author}</td>
                  <td colSpan={2} className="description_table">
                    {selectedTicket.description}
                  </td>
                  <td></td>
                </tr>
                <tr className="header_table_selected_ticket">
                  <th>STATUS</th>
                  <th>PRIORITY</th>
                  <th>TYPE</th>
                  <th>TIME ESTIMATE (HOURS)</th>
                </tr>
                <tr>
                  <td>
                    <div className="ticket_tags">{selectedTicket.status}</div>
                  </td>
                  <td>
                    <div className="ticket_tags">{selectedTicket.priority}</div>
                  </td>
                  <td>
                    <div className="ticket_tags">{selectedTicket.type}</div>
                  </td>
                  <td>
                    <div>{selectedTicket.time_estimate}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="assigned_devs_container">
              <div className="title_assigned_devs header_table_selected_ticket">
                Assigned devs
              </div>
              <AssignedDevs selectedTicket={selectedTicket} />
            </div>
          </div>
          <Comments ticket_id={selectedTicket.id} />
        </div>
      ) : (
        <div className="no_ticket_selected_ticket">
          Select a ticket to see information
        </div>
      )}
    </div>
  );
};

export default SelectedTicket;
