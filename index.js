const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log(`
        Teste
        1. eu falo oq tu é.
        2. Sair.
        `);
        rl.question('Digite o número da opção', (entrada) => {
            switch (entrada) {
                case '1':
                    console.log('Você é lindo maravilhoso!');
                    menu();
                    break;
                case '2':
                    console.log('Viado gay.');
                    rl.close();
                    break;
                default:
                    console.log('Valor incorreto.');
                    menu();
                    break;
            }
        });
}



menu();
