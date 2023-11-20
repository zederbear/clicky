var data = {
    money: 0,
    upgrades: 1
}

function moreMoney() {
    data.money += upgrades;
    updateScreen();
}

function updateScreen() {
    document.getElementById('moneyNum').innerHTML = data.money
}