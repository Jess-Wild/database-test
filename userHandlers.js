const database = require("./database");

const getUser = (req, res) => {
  database
    .query("select * from user")
    .then(([user]) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUser,
};
