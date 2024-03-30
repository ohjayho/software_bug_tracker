const Project = ({ props }) => {
  console.log("hey");
  return (
    <tr>
      <td>{props.project}</td>
      <td>{props.description}</td>
      <td>
        <div className="contributors_table">
          {props.contributors}
          <h3 className="dots_contributors">:</h3>
        </div>
      </td>
    </tr>
  );
};

export default Project;
