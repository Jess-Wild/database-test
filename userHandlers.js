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

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("delete from user where id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the users");
    });
}; 

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    nickname,
    firstname,
    lastname,
    email,
    password,
    city,
    experience,
    description,
  } = req.body;
  database
    .query(
      "update user set nickname = ?, firstname = ?, lastname = ?, email = ?, password= ?, city = ?, experience= ?, description= ? where id = ?",
      [
        nickname,
        firstname,
        lastname,
        email,
        password,
        city,
        experience,
        description,
        id,
      ]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the users");
    });
};

const postUser = (req, res) => {
  const {
    nickname,
    firstname,
    lastname,
    email,
    password,
    city,
    experience,
    description,
  } = req.body;
  database
    .query(
      "INSERT INTO user(nickname, firstname, lastname, email, password, city, experience, description ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nickname,
        firstname,
        lastname,
        email,
        password,
        city,
        experience,
        description,
      ]
    )
    .then(([result]) => {
      res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the users");
    });
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
  updateUser,
};
