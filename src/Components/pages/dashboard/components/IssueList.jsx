import { Link } from "react-router-dom";
import "./IssueList.css";

const IssueList = (props) => {
  const { id, severity, title, time, status } = props.issue;
  return (
    <tr>
      <td className="td_id">{id}</td>
      <td className="td_severity">{severity}</td>
      <td className="td_title">
        <Link to={`/dashboard/issue/${id}`} state={props.issue}>
          {title}
        </Link>
      </td>
      <td className="td_time">{time}</td>
      <td className="td_status">{status}</td>
    </tr>
  );
};

export default IssueList;
