const prompt = require('prompt-sync')();
const { exit } = require('process');
const { criar, listar, editar, deletar } = require('./src/tarefasController.js');
const { espacamento } = require('./src/utils.js');

//Variável tarefa sendo declarada
let tarefa = [];

//Função que abre uma tela de menu
function menu() {
    console.log(`
        ========== Gerenciar Tarefas ==========
        Escolha uma opção:
        1. Criar
        2. Listar
        3. Editar
        4. Deletar
        5. Sair
        =======================================
        `);
        let opcao = prompt('Opção: ');

        //Direciona qual função chamar a partir do valor escolhido
        switch (opcao) {
            case '1':
                criar();
                break;
            
            case '2':
                listar();
                menu();
                break;

            case '3':
                editar();
                break;

            case '4':
                deletar();
                break;

            case '5':
                exit();
        
            default:
                console.log('Valor incorreto!');
                menu();
                break;
        }
}

espacamento();  //Chama a função de espaçamento para deixar o terminal mais limpo
menu();     //chama a função menu

module.exports = { tarefa };