import "./TeamDropDown.css";
import axios from "axios";

const TeamDropDown = ({}) => {
  const handleDelete = async () => {
    // try {
    //   await axios.delete(`http://localhost:8800/projects/${project_id}`);
    // } catch (err) {
    //   console.log(err);
    // }
    // location.reload();
  };

  return (
    <div className="drop_down_menu_container border_shadow_component">
      <div className="edit_container">
        <div className="btn_edit btns_dropdown">Edit</div>
      </div>
      <div className="delete_container">
        <div className="btn_delete btns_dropdown" onClick={handleDelete}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default TeamDropDown;