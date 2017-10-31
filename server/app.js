const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;

var users = require("./routes/users.json");
var commits = require("./routes/commits.json");

app.use(
  cors({
    origin: "http://localhost:8080"
  })
);

app.get("/", (req, res) => {
  res.send("Type /users for users and /commits for commits");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/commits", (req, res) => {
  res.send(commits);
});

app.listen(3000, () => {
  console.log(`listen on port ${PORT}`);
});
