// Função de criar nova tarefa
function criar() {
    lerTarefas();   //Chama a função lerTarefas para utilizar o array do arquivo .JSON

    //recebe os dados da nova tarefa
    let nome = prompt('Digite o nome da tarefa: ');
    let descricao = prompt('Digite a descrição da tarefa: ');
    let prazo = prompt('Digite o prazo de entrega ano, mês e dia respectivamente: ');
    
    //adiciona os novos dados dentro da array de tarefas
    if (prazo.length == 8) {
        tarefa.push({
            nomeTarefa: nome,
            descricaoTarefa: descricao,
            prazoTarefa: prazo
        });
    } else {
        console.log('O prazo deve ser informado no formato AAAA-MM-DD');2
        menu();
    }

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
        index.prazoTarefa = index.prazoTarefa.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'); // Formata o prazo para AAAA-MM-DD
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