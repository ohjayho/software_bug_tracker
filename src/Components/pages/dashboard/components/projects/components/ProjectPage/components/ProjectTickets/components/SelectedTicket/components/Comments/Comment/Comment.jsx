import "../Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ comment }) => {
  console.log("코멘트", comment);
  return (
    <div className="comment border_shadow_component">
      <div className="header_comment">
        <div className="header_author_section">
          <h3 className="author_comment">{comment.author}</h3>
          <h3 className="author_dot">·</h3>
          <h4 className="author_time">
            {new Date(comment.created_at).toLocaleString()}
          </h4>
        </div>
        <button className="btn_delete_comment">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
      <div className="content_comment">{comment.description}</div>
    </div>
  );
};

export default Comment;
