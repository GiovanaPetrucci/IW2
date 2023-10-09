document.getElementById('formularioCompra').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('inputEmail3').value;
    const metodoPagamento = document.querySelector('input[name="metodoPagamento"]:checked');
    const parcelas = document.getElementById('parcelas').value;

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!nome || !email || !metodoPagamento || parcelas === "Selecione as Parcelas") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Agora você pode prosseguir com a lógica para exibir o método de pagamento selecionado e outros detalhes.
    const metodoSelecionado = metodoPagamento.value;

    switch(metodoSelecionado) {
        case 'debito':
            console.log("Método de Pagamento: Cartão de Débito");
            break;
        case 'credito':
            console.log("Método de Pagamento: Cartão de Crédito");
            break;
        default:
            console.log("Método de Pagamento Desconhecido");
    }

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Número de Parcelas:", parcelas);

    alert("Compra realizada com sucesso!");
});