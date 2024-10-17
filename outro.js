// let listaDePedidos = [];

// // const pedido = {
// //     id: id,
// //     nomeCliente: nomeCliente,
// //     produto: produto,
// //     quantidade: quantidade
// // };

// function adicionarPedido() {
//     let nomeCliente = prompt("Digite seu nome completo:");
//     // let produto = parseInt(prompt("DIGITE O NÚMERO DO PRODUTO: \n \n 1 - Bolo\n 2 - Brigadeiro\n 3 - Caseirinho\n 4 - Copo da Felicidade\n 5 - Cupcake\n 6 - Donuts"));
//     // switch(produto) {
//     //     case 1: 
//     //     produto.push(pedido)

//     //     case 2:
//     //         produto.push(pedido)

//     //     case 3:
//     //         produto.push(pedido)

//     //     case 4: 
//     //         produto.push(pedido)
    
//     //     case 5:
//     //         produto.push(pedido)
    
//     //     case 6:
//     //         produto.push(pedido)
//     // }

//     let quantidade = parseInt(prompt("Digite a quantidade:"));
// }

// function listarPedidos() {
//     if (listaDePedidos.length === 0) {
//         console.log("Nenhum pedido na lista.");
//     } else {
//         listaDePedidos.forEach((pedido) => {
//             console.log(`ID: ${pedido.id} | Cliente: ${pedido.nomeCliente} | Produto: ${pedido.produto} | Quantidade: ${pedido.quantidade}`);
//         });
//     }
// }

// function removerPedido(id) {
//     listaDePedidos = listaDePedidos.filter(pedido => pedido.id !== id);
//     console.log(`Pedido ${id} removido.`);
// }

// adicionarPedido(1, "Esmael Abreu", "Bolo de Chocolate", 2);


// listarPedidos();

// removerPedido(2);

// listarPedidos();

// Supondo que você tenha um método para gerar um ID (pode ser um número aleatório ou uma contagem)
let id = id; // Exemplo de ID aleatório
let nomeCliente = prompt("Digite o nome do cliente:");
let produto = parseInt(prompt("DIGITE O NÚMERO DO PRODUTO: \n \n 1 - Bolo\n 2 - Brigadeiro\n 3 - Caseirinho\n 4 - Copo da Felicidade\n 5 - Cupcake\n 6 - Donuts"));
let quantidade = parseInt(prompt("Quantos itens você deseja?"));

const pedido = {
    id: id,
    nomeCliente: nomeCliente,
    produto: produto,
    quantidade: quantidade
};

// Exibe o pedido no console
console.log(pedido);
