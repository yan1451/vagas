const data = require("./fakeData");

 /* PARA GERAÇÃO DO TOKEN BASTA ACESSAR A ROTA  GET/ user E PESQUISAR ALGUM USUARIO EXISTENTE 
    COPIE O TOKEN GERADO E COLOQUE NO AUTHORIZATION HEADER PARA CONSEGUIR PERMISSÃO PARA DELETAR E ATUALIZAR USUÁRIOS */

// Para acessar a ROTA utilize o caminho /users/:id
module.exports = function (req, res) {

    const { id } = req.params;

    if (!id) return res.status(400).send({message: 'id is required'});

    const index = data.findIndex(item => item.id === parseInt(id));

    if (index !== -1) {
        data.splice(index, 1);
        return res.send('success');
    } return res.status(404).send({ error: 'Usuário não encontrado.' });

};