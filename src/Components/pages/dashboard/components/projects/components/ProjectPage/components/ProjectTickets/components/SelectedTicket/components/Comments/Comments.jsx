import "./Comments.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Comment from "./Comment/Comment";

const Comments = ({ ticket_id }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser")
  );

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/ticket_comments/${ticket_id}`
        );
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getComments();
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const comment_id = uuidv4();
    const newComment = [comment_id, ticket_id, currentUser, comment];
    try {
      await axios.post("http://localhost:8800/ticket_comments", newComment);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="comments_section_selected_ticket border_shadow_component">
      <div className="header_comments_section">
        <h1 className="title_comments_section">Comments</h1>
      </div>
      {comments.length > 0 &&
        comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      <form className="add_comment_section" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          className="input_add_comment"
          name=""
          id=""
          placeholder="Enter comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="btn_add_comment btn_new">Comment</button>
      </form>
    </div>
  );
};

export default Comments;
