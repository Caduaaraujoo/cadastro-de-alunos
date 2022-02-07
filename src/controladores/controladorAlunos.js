let { alunos, indentificadorAluno } = require('../dados/alunos');


const todosAlunos = (req, res) => {
    return res.status(200).json(alunos);
}

const obterUmAluno = (req, res) => {
    const { id } = req.params

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id)
    });

    if(!Number(id)){
        return res.status(400).json({
            mensagem: 'Id tem que ser um número válido'
        })
    }

    if(!alunoEncontrado){
        return res.status(404).json({
            mensagem: 'Aluno não encontrado'
        })
    }

    return res.status(200).json(alunoEncontrado)
}


const cadastrarUmAluno = (req, res) => {
    const {nome, sobrenome, idade, curso} = req.body

    if(!nome || !sobrenome || !idade || !curso){
        return res.status(400).json({
            mensagem: 'Todos os campus são obrigatórios'
        })
    }


    if(nome === " " || sobrenome === " " || curso === " "){
        return res.status(400).json({
            mensagem: 'Texto inválido'
        })
    }

    if(idade < 18){
        return res.status(400).json({
            mensagem: 'Idade não permitada'
        })
    }

    const alunoNovo = {
        id: indentificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso,
    }

    alunos.push(alunoNovo);

    return res.status(201).json(alunoNovo);
}


const excluirAluno = (req, res) => {
    const { id } = req.params;

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if(!Number(id)){
        return res.status(400).json({
            mensagem: 'Id tem que ser um número válido'
        })
    }

    if(!alunoEncontrado){
        return res.status(400).json({
            mensagem: 'O aluno a ser excluído não foi encontrado'
        })
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id);
    })

    return res.status(204).json()
}

module.exports = {
    todosAlunos,
    obterUmAluno,
    cadastrarUmAluno,
    excluirAluno
}