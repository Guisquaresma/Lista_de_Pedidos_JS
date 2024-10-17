let listaDePedidos = [];

function adicionarPedido(id, nomeCliente, produto, quantidade) {
    const pedido = {
        id: id,
        nomeCliente: nomeCliente,
        produto: produto,
        quantidade: quantidade
    };
    listaDePedidos.push(pedido);
    console.log(`Pedido de ${produto} para ${nomeCliente} adicionado!`);
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
    console.log(`Pedido ${id} removido.`);
}

adicionarPedido(1, "Esmael Abreu", "Bolo de Chocolate", 2);
adicionarPedido(2, "Marina Almeida", "Bolo temático da Barbie", 1);
adicionarPedido(3, "Cleissiane Fonseca", "Cupcake", 4);
adicionarPedido(4, "Yuri Matheus", "Copo da Felicidade", 1);

listarPedidos();

removerPedido(2);

listarPedidos();
