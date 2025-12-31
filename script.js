const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbwVlx6v45u-78tEQ3pWT2BYvHI1GKtvuTwgt-W5vE9RL0TSt92veD33DCPrRE1j23ryxg/exec"; 

const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');

async function buscarValor() {
    try {
        counterDisplay.innerText = "Carregando...";
        
        const resposta = await fetch(`${URL_PLANILHA}?t=${Date.now()}`);
        const valor = await resposta.text();
        
        const numero = valor.trim() === "" ? "0" : valor.trim();
        counterDisplay.innerText = numero + " 😏";
    } catch (erro) {
        console.error("Erro ao buscar:", erro);
        counterDisplay.innerText = "Erro ao carregar ❌";
    }
}


async function salvarValor(novoValor) {
    try {
        await fetch(URL_PLANILHA, {
            method: 'POST',
            mode: 'no-cors', 
            headers: {
                'Content-Type': 'text/plain',
            },
            body: novoValor.toString()
        });
        console.log("Comando de salvar enviado: " + novoValor);
    } catch (erro) {
        console.error("Erro ao salvar:", erro);
    }
}

addBtn.addEventListener('click', async () => {

    let atual = parseInt(counterDisplay.innerText.replace(/\D/g, '')) || 0;
    let novo = atual + 1;
    
    counterDisplay.innerText = novo + " 😏";
    
    await salvarValor(novo);
});

buscarValor();
