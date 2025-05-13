const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefa = []

function criar() {
    rl.question('Digite o nome da tarefa: ', (nome) =>{
        rl.question('Digite a descrição da tarefa: ', (descricao) => {
            rl.question('Digite o prazo de entrega ano, mês e dia respectivamente: ', (prazo) => {
                tarefa.push({
                    id: tarefa.length + 1,
                    nomeTarefa: nome,
                    descricaoTarefa: descricao,
                    prazoTarefa: prazo
                });
                console.log(tarefa);
                menu();
            });
        });
    });
};

function listar() {
    tarefa.forEach((index) => {
        console.log(`
            --------------------------------\n
            ID: ${index.id}\n
            tarefa: ${index.nomeTarefa}\n
            descrição: ${index.descricaoTarefa}\n
            prazo: ${index.prazo}
            `);
    });
    console.log('           --------------------------------')
}

function editar() {
    listar();
    rl.question('Selecione qual tarefa você deseja alterar: ', (entrada) => {
        let idEditar = parseInt(entrada);
        rl.question('Digite a alteração: ', (novoNome) => {
            tarefa[idEditar - 1] = {id: entrada, nomeTarefa: novoNome};
            console.log(tarefa);
            menu();
        })
    });
}

function deletar() {
    listar();
    rl.question('Selecione qual tarefa deseja deletar: ', (entrada) => {
        let idDeletar = parseInt(entrada);
        console.log(idDeletar);
        tarefa.splice(idDeletar - 1, 1);
        console.log(tarefa);
        menu();
    })
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
        rl.question('Opção: ', (entrada) => {
            switch (entrada) {
                case '1':
                    criar();
                    menu();
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
        });
}

menu();
