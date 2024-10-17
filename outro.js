let listaDePedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
let id = listaDePedidos.length > 0 ? listaDePedidos[listaDePedidos.length - 1].id + 1 : 1; // Continuar a sequência de IDs

function adicionarPedido() {
    let nomeCliente = prompt("Digite seu nome completo:");

    // Escolha do produto
    let produtoEscolhido;
    let produto = parseInt(prompt(
        "DIGITE O NÚMERO DO PRODUTO: \n \n" +
        "1 - Bolo\n" +
        "2 - Brigadeiro\n" +
        "3 - Caseirinho\n" +
        "4 - Copo da Felicidade\n" +
        "5 - Cupcake\n" +
        "6 - Donuts"
    ));
    
    // Definindo o nome do produto com base na escolha do número
    switch(produto) {
        case 1: 
            produtoEscolhido = "Bolo";
            break;
        case 2:
            produtoEscolhido = "Brigadeiro";
            break;
        case 3:
            produtoEscolhido = "Caseirinho";
            break;
        case 4: 
            produtoEscolhido = "Copo da Felicidade";
            break;
        case 5:
            produtoEscolhido = "Cupcake";
            break;
        case 6:
            produtoEscolhido = "Donuts";
            break;
        default:
            alert("Produto inválido.");
            return;
    }

    // Definir quantidade
    let quantidade = parseInt(prompt("Digite a quantidade:"));

    // Criar o pedido e adicionar à lista
    const pedido = {
        id: id++, // Incrementa o ID automaticamente
        nomeCliente: nomeCliente,
        produto: produtoEscolhido,
        quantidade: quantidade
    };
    
    listaDePedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(listaDePedidos)); // Salva os pedidos no LocalStorage

    alert(`Pedido de ${produtoEscolhido} adicionado com sucesso!`);

    // Perguntar se deseja finalizar
    let finalizar = prompt("Deseja finalizar o pedido? (Sim/Não)").toLowerCase();
    if (finalizar === 'sim') {
        listarPedidos();
    } else {
        adicionarPedido();
    }
}

function listarPedidos() {
    if (listaDePedidos.length === 0) {
        console.log("Nenhum pedido na lista.");
    } else {
        listaDePedidos.forEach((pedido) => {
            console.log(`ID: ${pedido.id} | Cliente: ${pedido.nomeCliente} | Produto: ${pedido.produto} | Quantidade: ${pedido.quantidade}`);
        });
    }
}

function removerPedido(id) {
    listaDePedidos = listaDePedidos.filter(pedido => pedido.id !== id);
    localStorage.setItem('pedidos', JSON.stringify(listaDePedidos)); // Atualiza o LocalStorage após remover
    console.log(`Pedido ${id} removido.`);
}

// Recuperar e listar pedidos já salvos ao carregar a página
listarPedidos();
