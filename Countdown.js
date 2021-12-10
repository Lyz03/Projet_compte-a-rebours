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

// print the timer
Countdown.prototype.printTime = function () {
    this.printTimeP.innerText = ` ${this.h.toString()} : ${this.min.toString()} : ${this.sec.toString()}`;
}

// more than 59 for sec and min
Countdown.prototype.isSup = function () {
    if (this.h.length === 2 && this.min.length === 2 && this.sec.length === 2) {
        if (parseInt(this.sec) > 59) {
            this.min = (parseInt(this.min) + 1).toString();
            this.sec -= 60;
        }
        if (parseInt(this.min) > 59) {
            this.h = (parseInt(this.h) + 1).toString();
            this.min -= 60;
        }
    }
}

// chek if the input value is valid
Countdown.prototype.checkInput = function () {

    this.isSup()

        if (parseInt(this.h) > 0 || parseInt(this.min) > 0 || parseInt(this.sec) > 0) {
            this.printTime();
            this.isValidTime = true;
        }

}

// create the HTML countdown
Countdown.prototype.createHtmlBase = function() {

    if (this.isValidTime) {
        document.body.appendChild(this.div);
        this.div.appendChild(this.printTimeP);

        this.stopPlayButton.innerText = 'Lancer';
        this.div.appendChild(this.stopPlayButton);
        this.stopPlayButton.addEventListener("click", () => this.setCountdown());

        this.resetButton.innerText = 'Réinitialiser';
        this.div.appendChild(this.resetButton);
    }

}

// set the countdown
let timeout = null;
Countdown.prototype.setCountdown = function () {
     timeout = setTimeout(() => {
         this.sec = (parseInt(this.sec) + 1).toString()
         this.isSup();
         this.printTime();
         this.setCountdown();
     }, 1000)
}

// stop the countdown
Countdown.prototype.stopCountdown = function () {
    clearTimeout(timeout);
}


const hInput = document.getElementById('h');
const mInput = document.getElementById('m');
const sInput = document.getElementById('s');

document.getElementById('submit').addEventListener("click", () => {
    let test = new Countdown(hInput.value, mInput.value, sInput.value);

    test.checkInput()
    test.createHtmlBase();
})

