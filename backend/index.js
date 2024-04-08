import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0117",
  database: "software_bug_tracker",
  multipleStatements: true
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/projects", (req, res) => {
  const q = "SELECT * FROM projects ORDER BY created_at DESC;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/dashboard/project/:id", (req, res) => {
  const members = `SELECT member FROM project_members WHERE project_id='${req.params.id}';`;
  const tickets = `SELECT id, title, description, author FROM project_tickets WHERE project_id='${req.params.id}'`;
  db.query(members + tickets, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/dashboard/project/:id/project_tickets", (req, res) => {
  const tickets = `SELECT * FROM tickets_info WHERE project_id='${req.params.id}'`;
  db.query(tickets, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/users", (req, res) => {
  const q = "INSERT INTO users (id, pw) VALUES (?)";

  const { id, pw } = req.body;
  const values = [id, pw];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("successfully created!");
});

app.post("/projects", (req, res) => {
  const q =
    "INSERT INTO projects (id, name, description , author_id) VALUES (?)";

  const { id, name, description, author_id } = req.body;
  const values = [id, name, description, author_id];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/project_members", (req, res) => {
  const q = "INSERT INTO project_members (project_id,member) VALUES (?)";

  const { project_id, member } = req.body;
  const values = [project_id, member];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected");
});
