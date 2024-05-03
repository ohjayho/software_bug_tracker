import express from "express";
import cors from "cors";
import db from "../dbConfig.js";

const ticketDevsRouter = express.Router();

ticketDevsRouter.use(express.json());
ticketDevsRouter.use(cors());

ticketDevsRouter.get("/:ticket_id", (req, res) => {
  const devs = `SELECT * FROM users u JOIN ticket_devs td ON td.ticket_id='${req.params.ticket_id}' WHERE td.assigned_dev = u.id;`;
  db.query(devs, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

ticketDevsRouter.post("/", (req, res) => {
  const q = `INSERT IGNORE INTO ticket_devs (ticket_id, assigned_dev) VALUES ?`;
  const devs = req.body;
  db.query(q, [devs], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("devs added successfully!");
});

ticketDevsRouter.delete("/:ticket_id", (req, res) => {
  const devs = req.body.map((dev) =>
    JSON.stringify(dev[1]).replaceAll('"', "'")
  );
  const ticket_id = req.params.ticket_id;
  const q = `DELETE FROM ticket_devs WHERE ticket_id = '${ticket_id}' AND assigned_dev NOT IN (${devs})`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("devs updated successfully!");
});

export default ticketDevsRouter;
