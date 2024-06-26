import axios from "axios";
import "./TicketDropDown.css";

const TicketDropDown = ({ setModalOpen, ticket }) => {
  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/project_tickets/${ticket.id}`);
    } catch (err) {
      console.log(err);
    }
    location.reload();
  };

  return (
    <>
      <div className="ticket_drop_down_menu_container drop_down_menu_container border_shadow_component">
        <div className="edit_container">
          <div className="btn_edit btns_dropdown" onClick={handleEdit}>
            Edit
          </div>
        </div>
        <div className="delete_container">
          <div className="btn_delete btns_dropdown" onClick={handleDelete}>
            Delete
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDropDown;
