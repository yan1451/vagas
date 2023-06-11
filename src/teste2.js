const data = require("./fakeData");
const joi = require('./validator/joi');

module.exports = function (req, res) {

    const { name, job } = req.body;
    const { error } = joi.validate({ name, job });

    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    } 
    const newId = data.length + 1;
    const newUser = { id: newId, name, job}

    data.push(newUser);

    return res.status(201).send(newUser);

};