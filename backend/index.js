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
  const q = "SELECT * FROM projects";
  db.query(q, (err, data) => {
    console.log("hey", err, data);
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected");
});
