require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Coucou !");
};

app.get("/", welcome);

const userHandlers = require("./userHandlers");
const skillHandlers = require("./skillHandlers");
const messageHandlers = require("./messageHandlers");

app.get("/users", userHandlers.getUser);
app.post("/users", userHandlers.postUser);
app.put("/users/:id", userHandlers.updateUser);
app.delete("/users/:id", userHandlers.deleteUser);

app.get("/users/skills", skillHandlers.getSkill);
app.post("users/skills", skillHandlers.postSkill);
app.delete("users/skills", skillHandlers.deleteSkill);
app.put("users/skills/:id", skillHandlers.updateSkill);

app.get("/users/messages", messageHandlers.getMessage);
app.post("/users/messages", messageHandlers.postMessage);
app.put("/users/messages/:id", messageHandlers.updateMessage);
app.delete("/users/messages/:id", messageHandlers.deleteMessage);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});