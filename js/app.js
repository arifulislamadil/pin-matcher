//Get random pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

//display random pin
function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;


}

//


document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;

    const calc = document.getElementById("typed-numbers");
    const previousCalc = calc.value;
    const newCalc = previousCalc + number;
    calc.value = newCalc;
})

