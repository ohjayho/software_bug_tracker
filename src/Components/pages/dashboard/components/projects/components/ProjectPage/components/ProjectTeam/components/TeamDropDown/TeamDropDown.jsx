import "./TeamDropDown.css";
import axios from "axios";

const TeamDropDown = ({ setTeam, user_id, project_id }) => {
  const handleDelete = async () => {
    const memberInfo = { user_id: user_id, project_id: project_id };
    try {
      await axios.delete(`http://localhost:8800/project_members`, {
        data: memberInfo
      });
      setTeam((prevTeam) => [
        prevTeam[0].filter(
          (member) =>
            !(member.user_id === user_id && member.project_id === project_id)
        ),
        [
          prevTeam[0].find(
            (member) =>
              member.user_id === user_id && member.project_id === project_id
          ),
          ...prevTeam[1]
        ]
      ]);
    } catch (err) {
      console.log(err);
    }
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
