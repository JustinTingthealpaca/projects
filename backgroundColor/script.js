const body = document.getElementById("body");
const letters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function color(color) {
    body.style.backgroundColor = color;
}

function drawLetter(amount, list) {
    for (let i = 0; i<=amount; i++) {
        list += letters[Math.floor((Math.random()*16))];
        console.log(list);
    }
    console.log(list);
    return list;
}

var rndColor;
function randomColor(color) {
    rndColor = "#" + drawLetter(5,"");
    body.style.backgroundColor = rndColor;
    console.log(rndColor);
}