import "./Comments.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Comment from "./Comment/Comment";

const Comments = ({ ticket_id }) => {
  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [rerender, setRerender] = useState(false);

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
  }, [rerender]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newComment = [
      id,
      ticket_id,
      `${currentUser.first_name} ${currentUser.last_name}`,
      description
    ];
    try {
      await axios.post("http://localhost:8800/ticket_comments", newComment);
      // this state variable is for re-rendering,
      setRerender((rerender) => !rerender);
    } catch (err) {
      console.log(err);
    }
    e.target.firstChild.value = "";
  };

  return (
    <div className="comments_section_selected_ticket border_shadow_component">
      <div className="header_comments_section">
        <h1 className="title_comments_section">Comments</h1>
      </div>
      {comments.length > 0 &&
        comments.map((comment) => {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              setRerender={setRerender}
            />
          );
        })}
      <form className="add_comment_section" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          className="input_add_comment"
          name=""
          id=""
          placeholder="Enter comment"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn_add_comment btn_new">Comment</button>
      </form>
    </div>
  );
};

export default Comments;
