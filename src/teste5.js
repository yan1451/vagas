const data = require('./fakeData');

module.exports = function (req, res) {

    const { name } = req.query;

    const user = data.find((item) => item.name === name);

    if (!user) {
        return res.send('Usuario não existe ou não foi informado!');

    } return res.send(`Usuário ${user.name} foi lido ${!user.read ? 0 : user.read} vezes.`);

};
