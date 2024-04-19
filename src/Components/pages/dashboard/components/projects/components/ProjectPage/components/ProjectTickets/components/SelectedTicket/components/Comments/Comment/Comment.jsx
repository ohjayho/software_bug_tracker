import "../Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

const Comment = ({ comment }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8800/ticket_comments/${comment.comment_id}`
      );
    } catch (err) {
      console.log(err);
    }
    // to make it re-render, change the state of comments
    // it's meaningless variable for making it re-render
  };
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
        <button onClick={handleDelete} className="btn_delete_comment">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
      <div className="content_comment">{comment.description}</div>
    </div>
  );
};

export default Comment;
