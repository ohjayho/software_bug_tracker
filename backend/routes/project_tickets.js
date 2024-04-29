import express from "express";
import cors from "cors";
import db from "../dbConfig.js";

const projectTicketsRouter = express.Router();

projectTicketsRouter.use(express.json());
projectTicketsRouter.use(cors());

projectTicketsRouter.get("/", (req, res) => {
  const type =
    "SELECT type, count(author) AS cnt FROM project_tickets GROUP BY type;";
  const status =
    "SELECT status, count(author) AS cnt FROM project_tickets GROUP BY status;";
  const priority =
    "SELECT priority, count(author) AS cnt FROM project_tickets GROUP BY priority";
  db.query(type + status + priority, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

projectTicketsRouter.get("/:project_id", (req, res) => {
  const tickets = `SELECT * FROM project_tickets WHERE project_id='${req.params.project_id}' ORDER BY created_at DESC;`;
  db.query(tickets, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

projectTicketsRouter.post("/", (req, res) => {
  const q = `INSERT INTO project_tickets (id, project_id, title, description, author, time_estimate, type, priority, status) VALUES (?)`;
  const {
    id,
    project_id,
    title,
    description,
    author,
    time_estimate,
    type,
    priority,
    status
  } = req.body;

  const values = [
    id,
    project_id,
    title,
    description,
    author,
    time_estimate,
    type,
    priority,
    status
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("ticket added successfully!");
});

projectTicketsRouter.put("/", (req, res) => {
  const { id, title, description, time_estimate, type, priority, status } =
    req.body;

  const q = `UPDATE project_tickets SET title = '${title}', description = '${description}', time_estimate = '${time_estimate}', type = '${type}', priority = '${priority}', status = '${status}' WHERE id = '${id}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });

  console.log("successfully updated the ticket!");
});

export default projectTicketsRouter;
