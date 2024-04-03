import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0117",
  database: "software_bug_tracker"
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

app.post("/projects", (req, res) => {
  const q = "INSERT INTO projects (id, name, description , members) VALUES (?)";

  const { id, name, description, members } = req.body;
  const values = [id, name, description, members];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });

  // db.query(q, (err, data) => {
  //   console.log("abc", err, data);
  //   if (err) return res.json(err);
  //   return res.json(data);
  // });
});

app.listen(8800, () => {
  console.log("Connected");
});
