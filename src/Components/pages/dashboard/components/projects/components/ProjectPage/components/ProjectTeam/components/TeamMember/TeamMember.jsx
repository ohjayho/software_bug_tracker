import TeamDropDown from "../TeamDropDown/TeamDropDown";
import { useState, useEffect, useRef } from "react";

const TeamMember = ({ member, setTeam, project_id }) => {
  const [teamDropDownOpen, setTeamDropDownOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let dropDownHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setTeamDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", dropDownHandler);

    return () => {
      document.removeEventListener("mousedown", dropDownHandler);
    };
  });

  const handleTeamDropDown = () => {
    setTeamDropDownOpen(true);
  };

  return (
    <tr key={member.user_id}>
      <td>{`${member.first_name} ${member.last_name}`}</td>
      <td>{member.email}</td>
      <td>
        <div className="last_column_table">
          <div className="members_contributors">{member.phone}</div>
          <div className="menu_dots" onClick={handleTeamDropDown} ref={menuRef}>
            :
            {teamDropDownOpen && (
              <TeamDropDown
                setTeam={setTeam}
                user_id={member.user_id}
                project_id={project_id}
              />
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TeamMember;
