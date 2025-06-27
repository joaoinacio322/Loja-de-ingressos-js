function comprar(){
    let tiposIngressos = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(isNaN(quantidade) || quantidade <= 0){
        alert('Quantidade inválida');
        return;
    }

    if(tiposIngressos.value == 'pista'){
        comprarPista(quantidade);
    } else if (tiposIngressos.value == 'superior'){
        comprarSuperior(quantidade);
    } else if (tiposIngressos.value == 'inferior'){
        comprarInferior(quantidade);
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

function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdSuperior){
        alert('Quantidade insuficiente de ingressos para a Cadeira superior');
    }else{
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
} 

function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qtdInferior){
        alert('Quantidade insuficiente de ingressos para a Cadeira Inferior');
    }else{
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');

    }
}