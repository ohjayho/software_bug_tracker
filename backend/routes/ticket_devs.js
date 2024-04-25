import express from "express";
import cors from "cors";
import db from "../dbConfig.js";

const ticketDevsRouter = express.Router();

ticketDevsRouter.use(express.json());
ticketDevsRouter.use(cors());

ticketDevsRouter.get("/:ticket_id", (req, res) => {
  const devs = `SELECT assigned_dev FROM ticket_devs WHERE ticket_id='${req.params.ticket_id}';`;
  db.query(devs, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

ticketDevsRouter.post("/", (req, res) => {
  const q = `INSERT INTO ticket_devs (ticket_id, assigned_dev) VALUES ?`;
  const devs = req.body;
  console.log("devs", [devs]);
  db.query(q, [devs], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("devs added successfully!");
});

ticketDevsRouter.put("/:ticket_id", (req, res) => {
  const devs = [req.body.map((dev) => dev[1])];
  const ticket_id = req.params.ticket_id;
  const q = `UPDATE ticket_devs SET assigned_dev = '${devs}' WHERE ticket_id = '${ticket_id}'`;
  console.log(q);
  db.query(q, [devs], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("devs updated successfully!");
});

export default ticketDevsRouter;
