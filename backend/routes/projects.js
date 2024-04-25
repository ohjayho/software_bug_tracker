import express from "express";
import cors from "cors";
import db from "../dbConfig.js";

const projectsRouter = express.Router();

projectsRouter.use(express.json());
projectsRouter.use(cors());

projectsRouter.get("/", (req, res) => {
  const q = "SELECT * FROM projects ORDER BY created_at DESC;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

projectsRouter.post("/", (req, res) => {
  const q =
    "INSERT INTO projects (project_id, name, description , author_id) VALUES (?)";

  const { project_id, name, description, author_id } = req.body;
  const values = [project_id, name, description, author_id];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });

  console.log("Project created!");
});

projectsRouter.put("/", (req, res) => {
  const { name, description, project_id } = req.body;
  const q = `UPDATE projects SET name = '${name}', description = '${description}' WHERE project_id = '${project_id}'`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("successfully updated the project!");
});

projectsRouter.delete("/:project_id", (req, res) => {
  const q = `DELETE FROM projects WHERE project_id = '${req.params.project_id}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

export default projectsRouter;
