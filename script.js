const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbwYS3KKplAkE358GyceU5DJwMqol1LLPCCcrMru_L77K_qlpSucwVU3J-UsSqN84TP0UA/exec"; 

const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');

async function buscarValor() {
    try {
        counterDisplay.innerText = "Carregando...";
        const resposta = await fetch(`${URL_PLANILHA}?t=${Date.now()}`);
        const valor = await resposta.text();
        counterDisplay.innerText = (valor.trim() || "0") + " 😏";
    } catch (erro) {
        console.error(erro);
        counterDisplay.innerText = "Erro ao carregar ❌";
    }
}

async function salvarValor(novoValor) {
    await fetch(URL_PLANILHA, {
        method: 'POST',
        body: novoValor.toString()
    });
}

addBtn.addEventListener('click', async () => {
    let atual = parseInt(counterDisplay.innerText.replace(/\D/g, '')) || 0;
    let novo = atual + 1;
    counterDisplay.innerText = novo + " 😏";
    await salvarValor(novo);
});

buscarValor();

