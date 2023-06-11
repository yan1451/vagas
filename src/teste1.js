const data = require("./fakeData");
const jwt = require('jsonwebtoken');

let counter = 0;
let lastUser = null;

const getUser = (req, res, next) => {

    const secretKey = 'your_secret_key';    
    const { name } = req.query;
    const user = data.find((item) => item.name === name);

    if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado!" });
    }

    if (lastUser !== user) {
        resetCounter();
        lastUser = user;
    }
    
    // TOKEN É GERADO AQUI!
    const token = jwt.sign(user, secretKey)

    incrementCounter(user);

    return res.status(200).send({user, token});
};

const resetCounter = () => {
    counter = 0;
};

const incrementCounter = (user) => {
    if (!user.read) {
        user.read = counter;
    }

    user.read++,
    counter++;

};

const getUsers = (req, res, next) => {

    res.status(200).send(data);

};

module.exports = {
    getUser,
    getUsers,
};
