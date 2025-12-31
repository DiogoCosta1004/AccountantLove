const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');
const URL_PLANILHA = "1aQge4rQccfv1KO_oZw-LaBpbhrOk1zngJ-jJwFBAcmE"; 

async function buscarValor() {
    counterDisplay.innerText = "Carregando...";
    const resposta = await fetch(URL_PLANILHA);
    const valor = await resposta.text();
    counterDisplay.innerText = valor + " 😏";
}


async function salvarValor(novoValor) {
    await fetch(URL_PLANILHA, {
        method: 'POST',
        body: novoValor
    });
}

addBtn.addEventListener('click', async () => {
    let atual = parseInt(counterDisplay.innerText);
    let novo = atual + 1;
    counterDisplay.innerText = novo + " 😏"; 
    await salvarValor(novo); 
});

buscarValor();
