const alertCloseBtn = document.querySelector('#crossBtn');
const privacyPolicyText = document.querySelector('.privacyPolicy');
const alertBox = document.querySelector('#alertBox');
const form = document.querySelector('#form');

const date = document.querySelector('#date');
const luckyNo = document.querySelector('#luckyNo');

const output = document.querySelector('.output');

const outputSuccess = `<div class="label">Hurray!!You are a lucky person!</div><img width="100%" height="500px" src="/success.png" alt="image">`
const outputFail=`<div class="label">Oops!!Your birthday is not a lucky number!</div><img width="100%" height="500px" src="/fail.jpg" alt="image">`
//Event Listeners

alertCloseBtn.addEventListener('click', (e)=>{
    alertBox.style.display = "none";
});

privacyPolicyText.addEventListener('click', (e)=>{
    alertBox.style.display= "flex";
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const dateData = ((date.value).split('-')).join("");
    let sum = 0;
    for (letter of dateData){
        sum = sum + Number(letter);
    }
    const luckyNoData = Number(luckyNo.value);
    if(sum%luckyNoData === 0){
        output.innerHTML = outputSuccess;
    } else {
        output.innerHTML = outputFail
    }
});