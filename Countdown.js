const Countdown = function (hours, minutes, seconds) {
    this.h = hours;
    this.min = minutes;
    this.sec = seconds;

    // HTML elements
    this.div = document.createElement('div');
    this.printTimeP = document.createElement('p');
    this.resetButton = document.createElement('button');
    this.stopPlayButton = document.createElement('button');

    // create the HTML countdown
    this.createHtmlBase = function() {

        document.body.appendChild(this.div);

        this.div.appendChild(this.printTimeP);

        this.resetButton.innerText = 'Réinitialiser';
        this.div.appendChild(this.resetButton);

        this.stopPlayButton.innerText = 'Lancer';
        this.div.appendChild(this.stopPlayButton);
    }

    this.submitFunction = function () {
        this.printTimeP.innerText = ` ${this.h.toString()} : ${this.min.toString()} : ${this.sec.toString()}`
    }
}

const hInput = document.getElementById('h');
const mInput = document.getElementById('m');
const sInput = document.getElementById('s');

document.getElementById('submit').addEventListener("click", () => {
    let test = new Countdown(hInput.value, mInput.value, sInput.value);
    test.createHtmlBase();
    test.submitFunction();
})

