const readline = require('readline');
const prompt = require('prompt-sync')();
const fs = require('fs');
const { exit } = require('process');
const tarefasArquivo = './tarefas.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Variável tarefa sendo declarada
let tarefa = [];

//Função de ler arquivo .JSON das tarefas e passar para a variável
function lerTarefas() {
    const dados = fs.readFileSync(tarefasArquivo, 'utf-8');
    tarefa = JSON.parse(dados);
};

//Função de salvar os dados da váriavel tarefa dentro do arquivo .JSON das tarefas
function salvarTarefa(tarefa) {
    fs.writeFileSync('tarefas.json', JSON.stringify(tarefa, null, 2));
};

// Função de criar nova tarefa
function criar() {
    lerTarefas();   //Chama a função lerTarefas para utilizar o array do arquivo .JSON

    //recebe os dados da nova tarefa
    let nome = prompt('Digite o nome da tarefa: ');
    let descricao = prompt('Digite a descrição da tarefa: ');
    let prazo = prompt('Digite o prazo de entrega ano, mês e dia respectivamente: ');
    
    //adiciona os novos dados dentro da array de tarefas
    tarefa.push({
        //id: tarefa.length + 1,
        nomeTarefa: nome,
        descricaoTarefa: descricao,
        prazoTarefa: prazo
    });

    salvarTarefa(tarefa);   //Chama a função salvarTarefas com a variável tarefas atualizada (sobrescreve a array antiga com a atualizada)
    console.log('Tarefa criada com sucesso!');
    espacamento();  //Chama a função de espaçamento para deixar o terminal mais limpo
    menu();     //Retorna ao menu

};

//Função de listar tarefas
function listar() {
    lerTarefas();       //Chama a função ler tarefas para receber a array das tarefas
    espacamento();  //Chama a função de espaçamento para deixar o terminal mais limpo

    //busca os dados da array e lista cada campo de forma individual e organizado
    tarefa.forEach((index, id) => {
        console.log(`           ==================================
            ID: ${id + 1}
            tarefa: ${index.nomeTarefa}
            descrição: ${index.descricaoTarefa}
            prazo: ${index.prazoTarefa}`);
    });
    console.log('           ==================================');
}

//Função de editar uma tarefa específica
function editar() {

    listar();   //Chama a função listar para mostrar opções disponiveis de tarefas para realizar a edição

    let opcao = prompt('Selecione qual tarefa você deseja alterar: ');      //Recebe o id de qual tarefa será editada

    //recebe os valores da tarefa editada
    let idEditar = parseInt(opcao);
    let novoNome = prompt('Digite o novo nome da tarefa: ');
    let novaDescricao = prompt('Digite a nova descrição: ');
    let novoPrazo = prompt('Digite o novo prazo: ');

    //Adiciona os valores editados à tarefa específica
    tarefa[idEditar - 1] = {
        //id: opcao,
        nomeTarefa: novoNome,
        descricaoTarefa: novaDescricao,
        prazoTarefa: novoPrazo
    };

    salvarTarefa(tarefa);   //Salva os dados atualizados
    espacamento();  //Chama a função de espaçamento para deixar o terminal mais limpo
    console.log('Tarefa editada com sucesso!');
    menu();     //Retorna ao menu
}

//Função de deletar tarefa
function deletar() {
    listar();       //Chama a função de listar

    let opcao = prompt('Selecione qual tarefa deseja deletar: ');   //Recebe o id da tarefa a ser editada
    let idDeletar = parseInt(opcao);    //Converte o valor em string para inteiro
    tarefa.splice(idDeletar - 1, 1);    //Remove o tarefa selecionada
    salvarTarefa(tarefa);   //salva as tarefas atualizadas sem a tarefa deletada
    espacamento();  //Chama a função de espaçamento para deixar o terminal mais limpo
    console.log('Tarefa deletada com sucesso!');
    menu();     //retorna ao menu
};

function espacamento() {
    for (let index = 0; index < 20; index++) {
        console.log('\n');
    };
};

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
