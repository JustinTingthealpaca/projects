const display = document.getElementById("display");
const button1Page = document.getElementById("button1Page");
const costAmount1 = document.getElementById("costAmount1");
const increaseButtonValueBy1Button = document.getElementById("increaseButtonValueBy1Button");
let money = 0;
let amount = 1;

//upgrade work
let increaseButtonValueBy1 = {
    displayName: "+1 CLICK",
    cost: 10,
    opeartion: "Increases Money per Click by 1!"
}


function button(x) {
    if (x == 0) {
        if (increaseButtonValueBy1.cost <= money) {
            money -= increaseButtonValueBy1.cost;
            increaseButtonValueBy1.cost = increaseButtonValueBy1.cost * 1.5;
            amount++;
        }
    }

    log();
}

function add() {
    money += amount;
    log();
}

function log() {
    display.innerHTML = Math.floor(money);
    updateShop();
}

//update shop
function updateShop() {
    //first button
    costAmount1.innerHTML = Math.floor(increaseButtonValueBy1.cost);
}