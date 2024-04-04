import "../../../../../../components.css";

const ProjectTickets = () => {
  return (
    <div className="project_tickets_container border_shadow_component components_container">
      <div className="header_project_tickets header_components">
        <h1 className="title_project_tickets title_header">Tickets</h1>
        <button className="btn_new_member btn_new">New member</button>
      </div>
      <table className="table_tickets table_components">
        <thead>
          <tr>
            <th>TICKET TITLE</th>
            <th>DESCRIPTION</th>
            <th>TICKET AUTHOR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online/offline for devs</td>
            <td>
              when user logs in, subscribe them to being online so admin can see
              who's online
            </td>
            <td>
              <div className="last_column_table">
                <div className="members_contributors">Connor Lee</div>
                <h3 className="menu_dots">:</h3>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btns_pagination_container">
        <div className="btns_pagination prev_btn_pages">{`<`}</div>
        <div className="btns_pagination num_btn_pages">1</div>
        <div className="btns_pagination next_btn_pages">{`>`}</div>
      </div>
    </div>
  );
};

export default ProjectTickets;
