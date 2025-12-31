const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const resetBtn = document.getElementById('resetBtn');

// Carrega o valor inicial do localStorage (converte string para número)
let count = parseInt(localStorage.getItem('sexCounter')) || 0;

// Exibe o valor ao carregar a página
updateDisplay();

// Evento para somar
addBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// Evento para diminuir
subBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

// Evento para resetar
resetBtn.addEventListener('click', () => {
    if(confirm("Tem certeza que deseja zerar a contagem de 2026?")) {
        count = 0;
        updateDisplay();
    }
});

// Função única para atualizar a tela e salvar no navegador
function updateDisplay() {
    counterDisplay.innerText = count + " 😏"; 
    localStorage.setItem('sexCounter', count);
}
