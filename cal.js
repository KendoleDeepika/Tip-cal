let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");

let errorMessage = document.getElementById("errorMessage");

let button = document.getElementById("calculateButton");

button.onclick = function() {
    let userInput = billAmount.value;
    let percentageInput = percentageTip.value;
    if (userInput === '') {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else if (percentageInput === '') {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else {
        errorMessage.textContent = "";
        let calculatedTip = (percentageInput / 100) * userInput
        tipAmount.value = calculatedTip;
        let totalValue = parseInt(userInput) + parseInt(calculatedTip)
        totalAmount.value = totalValue;
    }
}