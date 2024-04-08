import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <tr>
      <td>
        <Link to={`/dashboard/project/${project.id}`}>{project.name}</Link>
      </td>
      <td>
        <Link to={`/dashboard/project/${project.id}`}>
          {project.description}
        </Link>
      </td>
      <td>
        <div className="contributors_table last_column_table">
          <div className="members_contributors">
            <Link to={`/dashboard/project/${project.id}`}>
              {project.members}
            </Link>
          </div>
          <h3 className="menu_dots">:</h3>
        </div>
      </td>
    </tr>
  );
};

export default Project;
