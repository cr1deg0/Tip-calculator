const inputBill = document.querySelector('#bill');
const inputTip = document.querySelectorAll('input[name="tip"]');
const inputCustomTip = document.querySelector('#custom-tip');
const inputPeople = document.querySelector('#people');
const errorMessage = document.querySelector('.error-message');
const resetButton = document.querySelector('button[type="reset"]');

const outputTipAmountPerson = document.querySelector('#tip-amount');
const outputTotalAmountPerson = document.querySelector('#total-amount');

let billAmount = '';
let tipAmount = '';
let customTipAmount = '';
let peopleAmount ='';

inputBill.addEventListener('input', getBillAmount);
inputTip.forEach(item => item.addEventListener('input', getTipAmount));
inputCustomTip.addEventListener('input', getCustomTipAmount);
inputCustomTip.addEventListener('blur', hideCustomTipAmount);
inputPeople.addEventListener('input', getPeopleAmount);
resetButton.addEventListener('click', resetOutput);

function renderResult(bill, tip, people) {
    const tipPerPerson = ((bill * tip)/ (people * 100));
    const totalPerPerson = (bill/people) + tipPerPerson;
    outputTipAmountPerson.textContent = `$${tipPerPerson.toFixed(2)}`;
    outputTotalAmountPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
}

function calculateResult() {
    if (billAmount && tipAmount && peopleAmount) {
        renderResult(billAmount, tipAmount, peopleAmount);
        resetButton.disabled = false;
    } else if (billAmount && customTipAmount && peopleAmount){
        renderResult(billAmount, customTipAmount, peopleAmount);
        resetButton.disabled = false;
    }
}
function getBillAmount(e) {
    billAmount = parseInt(e.target.value);
    calculateResult();
}
function getTipAmount(e){
    if (!e.target.value) {
        e.target.style.display = 'none';
        const label = e.target.nextElementSibling;
        label.style.display = 'none';
        inputCustomTip.style.display="block";
        inputCustomTip.focus();
        tipAmount = '';
    } else {
        tipAmount = parseInt(e.target.value);
    }
    calculateResult();
}
function getCustomTipAmount(e) {
    customTipAmount = parseInt(e.target.value);
    calculateResult();
}
function hideCustomTipAmount(e) {
    customTipAmount = '';
    e.target.style.display = 'none';
    inputTip[5].nextElementSibling.style.display = 'block';
}
function getPeopleAmount(e) {
    if (e.target.value === '0') {
        errorMessage.style.display = 'inline';
    } else {
        errorMessage.style.display = 'none';
        peopleAmount = parseInt(e.target.value);
    }
    calculateResult();
}

function resetOutput(){
    outputTipAmountPerson.textContent = '$0.00';
    outputTotalAmountPerson.textContent = '$0.00';
}
