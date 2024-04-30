import express from "express";
import cors from "cors";
import db from "../dbConfig.js";

const projectMembersRouter = express.Router();

projectMembersRouter.use(express.json());
projectMembersRouter.use(cors());

projectMembersRouter.get("/:project_id", (req, res) => {
  const members = `SELECT * FROM users u JOIN project_members pm ON u.id = pm.user_id WHERE pm.project_id='${req.params.project_id}' ;`;
  db.query(members, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

projectMembersRouter.post("/", (req, res) => {
  const q = "INSERT INTO project_members (project_id, user_id) VALUES ?";
  const values = req.body;
  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

projectMembersRouter.delete("/", (req, res) => {
  const { project_id, user_id } = req.body;
  const q = `DELETE FROM project_members WHERE project_id = '${project_id}' AND user_id = '${user_id}'`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("Successfully deleted!");
});

export default projectMembersRouter;
