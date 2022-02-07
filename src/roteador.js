const express = require('express');
const { todosAlunos, obterUmAluno, cadastrarUmAluno, excluirAluno } = require('./controladores/controladorAlunos');
const { validarSenha } = require('./intermediarios');


const rotas = express();

rotas.use(validarSenha);

rotas.get('/alunos', todosAlunos);
rotas.get('/alunos/:id', obterUmAluno);
rotas.post('/alunos', cadastrarUmAluno);
rotas.delete('/alunos/:id', excluirAluno);



module.exports = rotas