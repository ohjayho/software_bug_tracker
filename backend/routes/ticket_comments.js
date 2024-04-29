import express from "express";
import cors from "cors";
import db from "../dbConfig.js";

const ticketCommentsRouter = express.Router();

ticketCommentsRouter.use(express.json());
ticketCommentsRouter.use(cors());

ticketCommentsRouter.get("/:ticket_id", (req, res) => {
  const q = `SELECT * FROM ticket_comments WHERE ticket_id = '${req.params.ticket_id}' ORDER BY created_at DESC`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

ticketCommentsRouter.post("/", (req, res) => {
  const comment = req.body;
  const q =
    "INSERT INTO ticket_comments (id, ticket_id, author, description) VALUES (?)";
  db.query(q, [comment], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("comment added!");
});

ticketCommentsRouter.delete("/:id", (req, res) => {
  const q = `DELETE FROM ticket_comments WHERE id = '${req.params.id}'`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("Successfully delted the comment!");
});

export default ticketCommentsRouter;
