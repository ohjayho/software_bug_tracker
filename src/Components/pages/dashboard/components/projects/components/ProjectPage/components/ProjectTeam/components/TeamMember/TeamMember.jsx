import TeamDropDown from "../TeamDropDown/TeamDropDown";
import { useState, useEffect, useRef } from "react";

const TeamMember = ({ mb }) => {
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
    <tr key={mb.member}>
      <td>{mb.member}</td>
      <td>{mb.email}</td>
      <td>
        <div className="last_column_table">
          <div className="members_contributors">{mb.phone}</div>
          <div className="menu_dots" onClick={handleTeamDropDown} ref={menuRef}>
            :{teamDropDownOpen && <TeamDropDown />}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TeamMember;
