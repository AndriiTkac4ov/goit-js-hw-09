const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let intervalId = null;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
    btnStart.disabled = true,
    intervalId = setInterval(() => { changeBGColor() }, 1000)
}

function onBtnStop() {
    btnStart.disabled = false,
    clearInterval(intervalId)
}

function changeBGColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}