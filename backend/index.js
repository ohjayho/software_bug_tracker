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

app.get("/project_tickets", (req, res) => {
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

app.get("/project_tickets/:project_id", (req, res) => {
  const tickets = `SELECT * FROM project_tickets WHERE project_id='${req.params.project_id}' ORDER BY created_at DESC;`;
  db.query(tickets, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/ticket_devs/:ticket_id", (req, res) => {
  const devs = `SELECT assigned_dev FROM ticket_devs WHERE ticket_id='${req.params.ticket_id}';`;
  db.query(devs, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/ticket_comments/:ticket_id", (req, res) => {
  const q = `SELECT * FROM ticket_comments WHERE ticket_id = '${req.params.ticket_id}' ORDER BY created_at DESC`;
  db.query(q, (err, data) => {
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
  const q = `INSERT INTO project_tickets (ticket_id, project_id, title, description, author, time_estimate, type, priority, status) VALUES (?)`;
  const {
    ticket_id,
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
    ticket_id,
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

app.post("/ticket_devs", (req, res) => {
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

app.post("/ticket_comments", (req, res) => {
  const comment = req.body;
  const q =
    "INSERT INTO ticket_comments (comment_id, ticket_id, author, description) VALUES (?)";
  db.query(q, [comment], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("comment added!");
});

/*end of post */

app.put("/projects", (req, res) => {
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

app.put("/project_tickets", (req, res) => {
  const {
    ticket_id,
    title,
    description,
    time_estimate,
    type,
    priority,
    status
  } = req.body;

  const q = `UPDATE project_tickets SET title = '${title}', description = '${description}', time_estimate = '${time_estimate}', type = '${type}', priority = '${priority}', status = '${status}' WHERE ticket_id = '${ticket_id}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });

  console.log("successfully updated the ticket!");
});

app.put("/ticket_devs/:ticket_id", (req, res) => {
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

/*end of put */

app.delete("/projects/:project_id", (req, res) => {
  const q = `DELETE FROM projects WHERE project_id = '${req.params.project_id}'`;

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

app.delete("/ticket_comments/:comment_id", (req, res) => {
  const q = `DELETE FROM ticket_comments WHERE comment_id = '${req.params.comment_id}'`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("Successfully delted the comment!");
});

app.listen(8800, () => {
  console.log("Connected");
});
