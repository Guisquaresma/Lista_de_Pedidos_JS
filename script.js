let listaDePedidos = [];
let id = 1;

function adicionarPedido() {
    let nomeCliente = prompt("Digite seu nome completo:");

    let produtoEscolhido;
    let precoProduto = 0;
    let produto = parseInt(prompt(
        "DIGITE O NÚMERO DO PRODUTO: \n \n" +
        "1 - Bolo - R$47,00\n" +
        "2 - Brigadeiro - R$2,50\n" +
        "3 - Caseirinho - R$28,00\n" +
        "4 - Copo da Felicidade - R$20,00\n" +
        "5 - Cupcake - R$8,50\n" +
        "6 - Donuts - R$7,50"
    ));

    switch(produto) {
        case 1:
            produtoEscolhido = "Bolo";
            precoProduto = 47;
            break;
        case 2:
            produtoEscolhido = "Brigadeiro";
            precoProduto = 2.5;
            break;
        case 3:
            produtoEscolhido = "Caseirinho";
            precoProduto = 28;
            break;
        case 4:
            produtoEscolhido = "Copo da Felicidade";
            precoProduto = 20;
            break;
        case 5:
            produtoEscolhido = "Cupcake";
            precoProduto = 8.5;
            break;
        case 6:
            produtoEscolhido = "Donuts";
            precoProduto = 7.5;
            break;
        default:
            alert("Produto inválido.");
            return;
    }

    let saborEscolhido;
    switch(produtoEscolhido) {
        case "Bolo":
            saborEscolhido = prompt(
                "Escolha o sabor do Bolo: \n" +
                "1 - Chocolate\n" +
                "2 - Cenoura\n" +
                "3 - Limão"
            );
            switch(parseInt(saborEscolhido)) {
                case 1: saborEscolhido = "Chocolate"; break;
                case 2: saborEscolhido = "Cenoura"; break;
                case 3: saborEscolhido = "Limão"; break;
                default: alert("Sabor inválido."); return;
            }
            break;

        case "Brigadeiro":
            saborEscolhido = prompt(
                "Escolha o sabor do Brigadeiro: \n" +
                "1 - Tradicional\n" +
                "2 - Branco\n" +
                "3 - Morango"
            );
            switch(parseInt(saborEscolhido)) {
                case 1: saborEscolhido = "Tradicional"; break;
                case 2: saborEscolhido = "Branco"; break;
                case 3: saborEscolhido = "Morango"; break;
                default: alert("Sabor inválido."); return;
            }
            break;

        case "Caseirinho":
            saborEscolhido = prompt(
                "Escolha o sabor do Caseirinho: \n" +
                "1 - Baunilha\n" +
                "2 - Chocolate\n" +
                "3 - Doce de Leite"
            );
            switch(parseInt(saborEscolhido)) {
                case 1: saborEscolhido = "Baunilha"; break;
                case 2: saborEscolhido = "Chocolate"; break;
                case 3: saborEscolhido = "Doce de Leite"; break;
                default: alert("Sabor inválido."); return;
            }
            break;

        case "Copo da Felicidade":
            saborEscolhido = prompt(
                "Escolha o sabor do Copo da Felicidade: \n" +
                "1 - Morango\n" +
                "2 - Chocolate\n" +
                "3 - Prestígio"
            );
            switch(parseInt(saborEscolhido)) {
                case 1: saborEscolhido = "Morango"; break;
                case 2: saborEscolhido = "Chocolate"; break;
                case 3: saborEscolhido = "Prestígio"; break;
                default: alert("Sabor inválido."); return;
            }
            break;

        case "Cupcake":
            saborEscolhido = prompt(
                "Escolha o sabor do Cupcake: \n" +
                "1 - Baunilha\n" +
                "2 - Red Velvet\n" +
                "3 - Chocolate"
            );
            switch(parseInt(saborEscolhido)) {
                case 1: saborEscolhido = "Baunilha"; break;
                case 2: saborEscolhido = "Red Velvet"; break;
                case 3: saborEscolhido = "Chocolate"; break;
                default: alert("Sabor inválido."); return;
            }
            break;

        case "Donuts":
            saborEscolhido = prompt(
                "Escolha o sabor do Donuts: \n" +
                "1 - Chocolate\n" +
                "2 - Creme\n" +
                "3 - Morango"
            );
            switch(parseInt(saborEscolhido)) {
                case 1: saborEscolhido = "Chocolate"; break;
                case 2: saborEscolhido = "Creme"; break;
                case 3: saborEscolhido = "Morango"; break;
                default: alert("Sabor inválido."); return;
            }
            break;
    }

    let quantidade = parseInt(prompt("Digite a quantidade:"));

    let total = precoProduto * quantidade;

    const pedido = {
        id: id++, 
        nomeCliente: nomeCliente,
        produto: `${produtoEscolhido} de ${saborEscolhido}`,
        quantidade: quantidade,
        total: total
    };
    
    listaDePedidos.push(pedido);
    alert(`Pedido de ${produtoEscolhido} de ${saborEscolhido} adicionado com sucesso! Total: R$${total.toFixed(2)}`);

    let finalizar = prompt("Deseja finalizar o pedido? (Sim/Não)").toLowerCase();
    if (finalizar === 'sim') {
        listarPedidos();
    } else {
        adicionarPedido();
    }
}

function listarPedidos() {
    if (listaDePedidos.length === 0) {
        console.log("Nenhum pedido realizado.");
    } else {
        let totalGeral = 0;
        listaDePedidos.forEach((pedido) => {
            console.log(`ID: ${pedido.id} \n Cliente: ${pedido.nomeCliente} \n Produto: ${pedido.produto} \n Quantidade: ${pedido.quantidade} \n Total: R$${pedido.total.toFixed(2)}`);
            totalGeral += pedido.total;
        });
        console.log(`Total Geral: R$${totalGeral.toFixed(2)}`);
    }
}

function removerPedido(id) {
    listaDePedidos = listaDePedidos.filter(pedido => pedido.id !== id);
    console.log(`Pedido ${id} removido.`);
    listarPedidos();
}

adicionarPedido();
