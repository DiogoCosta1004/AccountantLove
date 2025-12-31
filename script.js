const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');

let count = localStorage.getItem('sexCounter') || 0;
counterDisplay.innerText = count;

addBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    if(confirm("Tem certeza que quer zerar o contador?")) {
        count = 0;
        updateDisplay();
    }
});

function updateDisplay() {
    counterDisplay.innerText = count + "😏"; 
    localStorage.setItem('sexCounter', count);
}