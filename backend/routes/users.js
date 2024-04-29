import express from "express";
import cors from "cors";
import db from "../dbConfig.js";

const usersRouter = express.Router();

usersRouter.use(express.json());
usersRouter.use(cors());

usersRouter.get("/", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

usersRouter.post("/", (req, res) => {
  const q =
    "INSERT INTO users (id, first_name, last_name, username, pw, email, phone) VALUES (?)";

  const { id, first_name, last_name, username, pw, email, phone } = req.body;
  const values = [id, first_name, last_name, username, pw, email, phone];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
  console.log("successfully created!");
});

export default usersRouter;
