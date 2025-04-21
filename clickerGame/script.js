const display = document.getElementById("display");
let number = 0;

function add(x) {
    number += x;
    log();
}

function log() {
    display.innerHTML = number;
}