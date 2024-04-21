import "./TeamDropDown.css";
import axios from "axios";

const TeamDropDown = ({ member, project_id }) => {
  const handleDelete = async () => {
    const memberInfo = { member: member, project_id: project_id };
    try {
      await axios.delete(`http://localhost:8800/project_members`, {
        data: memberInfo
      });
    } catch (err) {
      console.log(err);
    }
    location.reload();
  };

  return (
    <div className="team_drop_down_menu_container drop_down_menu_container border_shadow_component">
      <div className="delete_container">
        <div className="btn_delete btns_dropdown" onClick={handleDelete}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default TeamDropDown;
