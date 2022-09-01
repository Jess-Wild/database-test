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

app.get("/users", userHandlers.getUser);
<<<<<<< HEAD
app.get("/users/skills", skillHandlers.getSkill);
=======
app.get("/users/skill", skillHandlers.getSkill);
>>>>>>> 0417861a74c0d9d68304cdf872eea8f1a8868a13

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});