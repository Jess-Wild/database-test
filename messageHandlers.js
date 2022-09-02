const database = require("./database");
const getMessage = (req, res) => {
  database
  .query("SELECT u.*, JSON_ARRAYAGG(text) AS messages FROM user AS u JOIN message As m ON m.user_id = u.id GROUP BY u.id ")
    .then(([message]) => {
      res.json(message);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
const deleteMessage = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("delete from message where id = ?", [id])
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
const updateMessage = (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;
  database
    .query("update message set text= ? where id = ?", [text, id])
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
const postMessage = (req, res) => {
  const { text } = req.body;
  database
    .query("INSERT INTO message(text ) VALUES (?)", [text])
    .then(([result]) => {
      res.location(`/message/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the users");
    });
};
module.exports = {
  getMessage,
  deleteMessage,
  updateMessage,
  postMessage,
};