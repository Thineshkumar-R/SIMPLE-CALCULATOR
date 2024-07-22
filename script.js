function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}

function deleteChar() {
    let screen = document.getElementById('calculator-screen');
    screen.value = screen.value.slice(0, -1);
}

function appendValue(value) {
    document.getElementById('calculator-screen').value += value;
}

function calculateResult() {
    let screen = document.getElementById('calculator-screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}
