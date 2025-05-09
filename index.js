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
    rl.question('Digite qual item você deseja alterar: ', (entradaId) => {
        let idEditar = parseInt(entradaId)
        rl.question('Digite a alteração: ', (entradaNome) => {
            item[idEditar - 1] = {id: entradaId, nomeItem: entradaNome};
            console.log(item);
            menu();
        })
    });
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
                    break;
                case '2':
                    listar();
                    menu();
                    break;
                case '3':
                    editar();
                    break;
                case '4':
                    menu();
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
