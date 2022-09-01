const database = require("./database");

const getSkill = (req, res) => {
    database
        .query("select * from skill")
        .then(([skill]) => {
            res.json(skill);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving data from database");
        });
};

module.exports = {
    getSkill,
};