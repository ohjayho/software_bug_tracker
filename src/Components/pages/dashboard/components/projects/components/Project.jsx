import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Project.css";

const Project = ({ project }) => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const getContributors = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/project_members/${project.id}`
        );
        setContributors(res.data);
        console.log("컨트리", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getContributors();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/project/${project.id}`);
  };

  return (
    <tr className="project_table" onClick={handleClick}>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>
        <div className="contributors_table last_column_table">
          <div className="members_contributors">
            {contributors.map((contributor) => {
              return <div key={contributor.member}>{contributor.member}</div>;
            })}
          </div>
          <h3 className="menu_dots">:</h3>
        </div>
      </td>
    </tr>
  );
};

export default Project;
