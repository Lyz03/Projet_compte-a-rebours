const Countdown = function (hours, minutes, seconds) {
    this.h = hours;
    this.min = minutes;
    this.sec = seconds;
    this.isValidTime = false;

    // HTML elements
    this.div = document.createElement('div');
    this.printTimeP = document.createElement('p');
    this.stopPlayButton = document.createElement('button');
    this.resetButton = document.createElement('button');

}

// chek if the input value is valid
Countdown.prototype.checkInput = function () {

    if (this.h.length === 2 && this.min.length === 2 && this.sec.length === 2) {
        if (parseInt(this.sec) > 59) {
            this.min = (parseInt(this.min) + 1).toString();
            this.sec -= 60;
        }
        if (parseInt(this.min) > 59) {
            this.h = (parseInt(this.h) + 1).toString();
            this.min -= 60;
        }

        if (parseInt(this.h) > 0 || parseInt(this.min) > 0 || parseInt(this.sec) > 0) {
            this.printTimeP.innerText = ` ${this.h.toString()} : ${this.min.toString()} : ${this.sec.toString()}`;
            this.isValidTime = true;
        }

    }
}

// create the HTML countdown
Countdown.prototype.createHtmlBase = function() {

    if (this.isValidTime) {
        document.body.appendChild(this.div);
        this.div.appendChild(this.printTimeP);

        this.stopPlayButton.innerText = 'Lancer';
        this.div.appendChild(this.stopPlayButton);

        this.resetButton.innerText = 'Réinitialiser';
        this.div.appendChild(this.resetButton);
    }

}


/*
let countUp = function () {
    timeout = setTimeout(() => {
        seconds.innerText = a.toString();
        a++;
        countUp()
    }, 1000)
};
countUp()

// How can you make it stop counting?
let stopCountUp = function () {
    clearTimeout(timeout);
    stopButton.removeEventListener("click", stopCountUp);
};

let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);
 */

const hInput = document.getElementById('h');
const mInput = document.getElementById('m');
const sInput = document.getElementById('s');

document.getElementById('submit').addEventListener("click", () => {
    let test = new Countdown(hInput.value, mInput.value, sInput.value);

    test.checkInput()
    test.createHtmlBase();
})

