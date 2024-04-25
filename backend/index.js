import express from "express";
import cors from "cors";
import ticketCommentsRouter from "./routes/ticket_comments.js";
import usersRouter from "./routes/users.js";
import ticketDevsRouter from "./routes/ticket_devs.js";
import projectsRouter from "./routes/projects.js";
import projectTicketsRouter from "./routes/project_tickets.js";
import projectTeamRouter from "./routes/project_team.js";
import projectMembersRouter from "./routes/project_members.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/project_members", projectMembersRouter);
app.use("/project_team", projectTeamRouter);
app.use("/project_tickets", projectTicketsRouter);
app.use("/ticket_devs", ticketDevsRouter);
app.use("/ticket_comments", ticketCommentsRouter);

app.listen(8800, () => {
  console.log("Connected");
});
