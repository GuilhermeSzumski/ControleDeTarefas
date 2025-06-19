const fs = require('fs');
const tarefasArquivo = require('../tarefas.json');

//Função de ler arquivo .JSON das tarefas e passar para a variável
function lerTarefas() {
    const dados = fs.readFileSync(tarefasArquivo, 'utf-8');
    tarefa = JSON.parse(dados);
};

//Função de salvar os dados da váriavel tarefa dentro do arquivo .JSON das tarefas
function salvarTarefa(tarefa) {
    fs.writeFileSync('tarefas.json', JSON.stringify(tarefa, null, 2));
};

module.exports = { lerTarefas, salvarTarefa };