function comprar(){
    let tiposIngressos = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tiposIngressos.value == 'pista'){
        comprarPista(quantidade);

    }

}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > qtdPista){
        alert('Quantidade insuficiente de ingressos para a Pista');
    }else{
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');

    }
}
