const data = require('./fakeData');
const joi = require('./validator/joi');


 /* PARA GERAÇÃO DO TOKEN BASTA ACESSAR A ROTA  GET/ user E PESQUISAR ALGUM USUARIO EXISTENTE 
    COPIE O TOKEN GERADO E COLOQUE NO AUTHORIZATION HEADER PARA CONSEGUIR PERMISSÃO PARA DELETAR E ATUALIZAR USUÁRIOS */

module.exports = function (req, res) {

    const { id } = req.params;
    const { name, job } = req.body;
    const { error } = joi.validate({ name, job });

    if (!id) return res.status(400).send({ message: 'id is required' });

    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = data.find(d => d.id === parseInt(id));

    if (user) {
        user["name"] = name;
        user["job"] = job;

        return res.send(user);

    } return res.status(404).send({ message: 'Usuário não encontrado' });

};