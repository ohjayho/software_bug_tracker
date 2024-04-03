const Project = ({ project }) => {
  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>
        <div className="contributors_table">
          <div className="members_contributors">
            {Object.values(project.members).map((member) => {
              return (
                <div className="name_members" key={member}>
                  {member}
                </div>
              );
            })}
          </div>
          <h3 className="dots_contributors">:</h3>
        </div>
      </td>
    </tr>
  );
};

export default Project;
