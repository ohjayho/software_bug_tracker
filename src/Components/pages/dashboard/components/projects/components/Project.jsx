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
        <div className="contributors_table">
          <div className="members_contributors">
            <td>
              <Link to={`/dashboard/project/${project.id}`}>
                {project.members}
              </Link>
            </td>
          </div>
          <h3 className="dots_contributors">:</h3>
        </div>
      </td>
    </tr>
  );
};

export default Project;
