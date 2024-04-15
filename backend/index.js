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

app.get("/project_members/:project_id", (req, res) => {
  const members = `SELECT member FROM project_members WHERE project_id='${req.params.project_id}';`;
  db.query(members, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/project_team/:project_id", (req, res) => {
  const members = `SELECT * FROM users u JOIN project_members pm ON u.id = pm.member WHERE pm.project_id = '${req.params.project_id}';`;
  const notSelectedMembers = `SELECT u.id FROM users u WHERE NOT EXISTS (SELECT pm.member FROM project_members pm WHERE u.id = pm.member AND pm.project_id = '${req.params.project_id}')`;

  db.query(members + notSelectedMembers, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/project_tickets/:id", (req, res) => {
  const tickets = `SELECT id, title, description, author FROM project_tickets WHERE project_id='${req.params.id}';`;

  db.query(tickets, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

/*end of get */

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

app.post("/project_members", (req, res) => {
  const q = "INSERT INTO project_members (project_id, member) VALUES ?";
  const values = req.body;
  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/project_tickets", (req, res) => {
  const q = `INSERT INTO project_tickets (project_id, id, title, description, author) VALUES (?)`;
  const { project_id, id, title, description, author } = req.body;

  db.query(q, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

/*end of post */

app.delete("/projects/:id", (req, res) => {
  const q = `DELETE FROM projects WHERE id = '${req.params.id}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.delete("/project_members", (req, res) => {
  const { project_id, member } = req.body;
  const q = `DELETE FROM project_members WHERE project_id = '${project_id}' AND member = '${member}'`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("Successfully deleted!");
});

app.listen(8800, () => {
  console.log("Connected");
});
