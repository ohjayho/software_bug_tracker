import express from "express";
import cors from "cors";
import db from "../dbConfig.js";

const projectTeamRouter = express.Router();

projectTeamRouter.use(express.json());
projectTeamRouter.use(cors());

projectTeamRouter.get("/:project_id", (req, res) => {
  const members = `SELECT * FROM users u JOIN project_members pm ON u.id = pm.user_id WHERE pm.project_id = '${req.params.project_id}';`;
  const notSelectedMembers = `SELECT * FROM users u WHERE NOT EXISTS (SELECT pm.user_id FROM project_members pm WHERE u.id = pm.user_id AND pm.project_id = '${req.params.project_id}')`;

  db.query(members + notSelectedMembers, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

export default projectTeamRouter;
