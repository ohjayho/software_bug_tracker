import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0117",
  database: "software_bug_tracker",
  multipleStatements: true
});

export default db;
