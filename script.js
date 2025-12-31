const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const resetBtn = document.getElementById('resetBtn');

let count = parseInt(localStorage.getItem('sexCounter')) || 0;

updateDisplay();

addBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

subBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener('click', () => {
    if(confirm("Tem certeza que deseja zerar a contagem de 2026?")) {
        count = 0;
        updateDisplay();
    }
});

function updateDisplay() {
    counterDisplay.innerText = count + " 😏"; 
    localStorage.setItem('sexCounter', count);
}
