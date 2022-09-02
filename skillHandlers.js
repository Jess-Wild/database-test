const database = require("./database");

const getSkill = (req, res) => {
    database
    .query(" SELECT user.*, JSON_ARRAY(JSON_OBJECTAGG(name, type)) AS skills FROM user_skill INNER JOIN user ON user_id=user.id INNER JOIN skill ON skill_id=skill.id GROUP BY user_id")
        .then(([skill]) => {
            res.json(skill);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving data from database");
        });
};

const deleteSkill = (req, res) => {
    const id = parseInt(req.params.id);
    database
      .query("delete from skill where id = ?", [id])
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("Not Found");
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error deleting the skill");
      });
  };

  const updateSkill = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, type } = req.body;
    database
      .query("update skill set name= ?, type= ? where id = ?", [(name, type, id)])
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("Not Found");
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error editing the skill");
      });
  };

  const postSkill = (req, res) => {
    const { name, type } = req.body;
    database
      .query("INSERT INTO skill(name, type ) VALUES (?, ?)", [name, type])
      .then(([result]) => {
        res.location(`/skill/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error saving the skill");
      });
  };

module.exports = {
    getSkill,
    deleteSkill,
    updateSkill,
    postSkill,
};