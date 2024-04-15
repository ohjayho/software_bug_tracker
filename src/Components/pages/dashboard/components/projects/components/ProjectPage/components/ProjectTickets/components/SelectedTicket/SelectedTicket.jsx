import "../../../../../../../../components.css";
import "./SelectedTicket.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const SelectedTicket = ({ selectedTicket, selectedTicketOpen }) => {
  console.log(selectedTicket, "흐음");
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
              <div>Jay</div>
            </div>
          </div>
          <div className="comments_section_selected_ticket border_shadow_component">
            <div className="header_comments_section">
              <h1 className="title_comments_section">Comments</h1>
            </div>
            <div className="comment border_shadow_component">
              <div className="header_comment">
                <div className="header_author_section">
                  <h3 className="author_comment">JayHo Oh</h3>
                  <h3 className="author_dot">·</h3>
                  <h4 className="author_time">June 12th 2021, 6:02:28pm</h4>
                </div>
                <button className="btn_delete_comment">
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
              <div className="content_comment">
                Welcome, James please help here
              </div>
            </div>
            <div className="add_comment_section">
              <input
                type="text"
                className="input_add_comment"
                name=""
                id=""
                placeholder="Enter comment"
              />
              <button className="btn_add_comment btn_new">Comment</button>
            </div>
          </div>
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
