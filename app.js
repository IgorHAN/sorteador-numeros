function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    
    let sorteados = []; //array-lista
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    let numeroTela = document.getElementById("resultado");
    numeroTela.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>  `
}

function obterNumeroAleatorio(min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min ;
}


