const readline = require('readline');
const prompt = require('prompt-sync')();
const fs = require('fs');
const { exit } = require('process');
const tarefasArquivo = './tarefas.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefa = [];

function lerTarefas() {
    const dados = fs.readFileSync(tarefasArquivo, 'utf-8');
    tarefa = JSON.parse(dados);
};

function salvarTarefa(tarefa) {
    fs.writeFileSync('tarefas.json', JSON.stringify(tarefa, null, 2));
};

function criar() {
    lerTarefas();

    let nome = prompt('Digite o nome da tarefa: ');
    let descricao = prompt('Digite a descrição da tarefa: ');
    let prazo = prompt('Digite o prazo de entrega ano, mês e dia respectivamente: ');
    tarefa.push({
        id: tarefa.length + 1,
        nomeTarefa: nome,
        descricaoTarefa: descricao,
        prazoTarefa: prazo
    });
    //console.log(tarefa);
    salvarTarefa(tarefa);
    menu();

    /*rl.question('Digite o nome da tarefa: ', (nome) =>{
        rl.question('Digite a descrição da tarefa: ', (descricao) => {
            rl.question('Digite o prazo de entrega ano, mês e dia respectivamente: ', (prazo) => {
                tarefa.push({
                    id: tarefa.length + 1,
                    nomeTarefa: nome,
                    descricaoTarefa: descricao,
                    prazoTarefa: prazo
                });
                console.log(tarefa);
                salvarTarefa(tarefa);
                menu();
            });
        });
    });*/
};

function listar() {
    lerTarefas();
    //console.log(tarefa)
    tarefa.forEach((index) => {
        console.log(`
            --------------------------------
            ID: ${index.id}
            tarefa: ${index.nomeTarefa}
            descrição: ${index.descricaoTarefa}
            prazo: ${index.prazoTarefa}
            `);
    });
    console.log('           --------------------------------')
}

function editar() {
    listar();
    let opcao = prompt('Selecione qual tarefa você deseja alterar: ');
    let idEditar = parseInt(opcao);
    let novoNome = prompt('Digite o novo nome da tarefa: ');
    let novaDescricao = prompt('Digite a nova descrição: ');
    let novoPrazo = prompt('Digite o novo prazo: ');
    tarefa[idEditar - 1] = {
        id: opcao,
        nomeTarefa: novoNome,
        descricaoTarefa: novaDescricao,
        prazoTarefa: novoPrazo
    };
    //console.log(tarefa);
    salvarTarefa(tarefa);
    menu();

    /*rl.question('Selecione qual tarefa você deseja alterar: ', (entrada) => {
        let idEditar = parseInt(entrada);
        rl.question('Digite a alteração: ', (novoNome) => {
            tarefa[idEditar - 1] = {id: entrada, nomeTarefa: novoNome};
            console.log(tarefa);
            menu();
        })
    });*/
}

function deletar() {
    listar();
    let opcao = prompt('Selecione qual tarefa deseja deletar: ');
    let idDeletar = parseInt(opcao);
    //console.log(idDeletar);
    tarefa.splice(idDeletar - 1, 1);
    //console.log(tarefa);
    salvarTarefa(tarefa);
    menu();
    /*.question('Selecione qual tarefa deseja deletar: ', (entrada) => {
        let idDeletar = parseInt(entrada);
        console.log(idDeletar);
        tarefa.splice(idDeletar - 1, 1);
        console.log(tarefa);
        menu();
    })*/
}

function menu() {
    console.log(`
        Teste
        1. Criar
        2. Listar
        3. Editar
        4. Deletar
        5. Sair
        `);
        let opcao = prompt('Opção: ');
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

        /*rl.question('Opção: ', (entrada) => {
            switch (entrada) {
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
                    rl.close();
                    break;
                default:
                    console.log('Valor incorreto.');
                    rl.close();
                    break;
            }
        });*/
}

menu();
