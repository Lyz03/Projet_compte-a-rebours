const hInput = document.getElementById('h');
const mInput = document.getElementById('m');
const sInput = document.getElementById('s');

document.getElementById('submit').addEventListener("click", () => {
    let newCountdown = new Countdown(hInput.value, mInput.value, sInput.value);

    newCountdown.checkInput()
    newCountdown.createHtmlBase();
})