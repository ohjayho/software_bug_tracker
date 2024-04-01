const Project = ({ project }) => {
  console.log("hey");
  return (
    <tr>
      <td>{project.project_name}</td>
      <td>{project.project_description}</td>
      <td>
        <div className="contributors_table">
          <div className="members_contributors">
            {project.project_members.map((member) => {
              return <div className="name_members">{member}</div>;
            })}
          </div>
          <h3 className="dots_contributors">:</h3>
        </div>
      </td>
    </tr>
  );
};

export default Project;
