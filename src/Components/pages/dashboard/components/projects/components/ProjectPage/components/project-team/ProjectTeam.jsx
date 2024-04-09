import "../../../../../../components.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import TeamModal from "./components/TeamModal";

const ProjectTeam = ({ team }) => {
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  return (
    <>
      {teamModalOpen &&
        createPortal(
          <TeamModal setTeamModalOpen={setTeamModalOpen} />,
          document.body
        )}
      <div className="project_team_container border_shadow_component components_container">
        <div className="header_project_team header_components">
          <h1 className="title_project_team title_header">Team</h1>
          <button
            className="btn_new_member btn_new"
            onClick={() => {
              setTeamModalOpen(true);
            }}
          >
            New member
          </button>
        </div>
        <table className="table_team table_components">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {team.map((mb) => {
              return (
                <tr key={mb.member}>
                  <td>{mb.member}</td>
                  <td>{mb.email}</td>
                  <td>
                    <div className="last_column_table">
                      <div className="members_contributors">{mb.phone}</div>
                      <h3 className="menu_dots">:</h3>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="btns_pagination_container">
          <div className="btns_pagination prev_btn_pages">{`<`}</div>
          <div className="btns_pagination num_btn_pages">1</div>
          <div className="btns_pagination next_btn_pages">{`>`}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectTeam;
