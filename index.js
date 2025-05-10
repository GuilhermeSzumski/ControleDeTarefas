const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let item = []

function criar() {
    rl.question('Digite o que deseja cadastrar: ', (entrada) =>{
        item.push({id: item.length + 1, nomeItem: entrada});
        console.log(item);
        menu();
    })
}

function listar() {
    item.forEach((index) => {
        console.log(`--------------------------------\nID: ${index.id}\nItem: ${index.nomeItem}`);
    });
    console.log('--------------------------------')
}

function editar() {
    listar();
    rl.question('Selecione qual item você deseja alterar: ', (entrada) => {
        let idEditar = parseInt(entrada);
        rl.question('Digite a alteração: ', (novoNome) => {
            item[idEditar - 1] = {id: entrada, nomeItem: novoNome};
            console.log(item);
            menu();
        })
    });
}

function deletar() {
    listar();
    rl.question('Selecione qual item deseja deletar: ', (entrada) => {
        let idDeletar = parseInt(entrada);
        console.log(idDeletar);
        item.splice(idDeletar - 1, 1);
        console.log(item);
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
