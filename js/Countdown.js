const Countdown = function (hours, minutes, seconds) {
    this.h = hours;
    this.min = minutes;
    this.sec = seconds;
    this.isValidTime = false;

    // HTML elements
    this.div = document.createElement('div');
    this.printTimeP = document.createElement('p');
    this.playButton = document.createElement('button');
    this.stopButton = document.createElement('button')
    this.resetButton = document.createElement('button');

}

// print the timer
Countdown.prototype.printTime = function () {
    this.printTimeP.innerText = ` ${this.h.toString()} : ${this.min.toString()} : ${this.sec.toString()}`;
}

// sec or/and min equal to zero
Countdown.prototype.isZero = function () {

    if (parseInt(this.sec) === -1) {
        this.min = (parseInt(this.min) - 1).toString();
        this.sec = 59;
    }

    if (parseInt(this.min) === -1) {
        this.h = (parseInt(this.h) - 1).toString();
        this.min = 59;
    }
}

// chek if the input value is valid
Countdown.prototype.checkInput = function () {

    this.isZero()

    if (this.h.length < 3 && this.min.length < 3 && this.sec.length < 3) {

        if (parseInt(this.h) > 0 || parseInt(this.min) > 0 || parseInt(this.sec) > 0) {

            // too much seconds
            if (parseInt(this.sec) > 60) {
                this.sec = parseInt(this.sec) - 60;
                this.min = parseInt(this.min) + 1;
            }

            // too much minutes
            if (parseInt(this.min) > 60) {
                this.min = parseInt(this.min) - 60;
                this.h = parseInt(this.h) + 1;
            }

            this.printTime();
            this.isValidTime = true;
        }
    }


}

// create the HTML countdown
Countdown.prototype.createHtmlBase = function() {

    if (this.isValidTime) {
        document.body.appendChild(this.div);
        this.div.appendChild(this.printTimeP);

        this.playButton.innerText = 'Lancer';
        this.div.appendChild(this.playButton);
        this.playButton.addEventListener("click", () => this.setCountdown());

        this.stopButton.innerText = "Stop";
        this.div.appendChild(this.stopButton);
        this.stopButton.addEventListener("click", () => this.stopCountdown());

        this.resetButton.innerText = 'Effacer';
        this.div.appendChild(this.resetButton);
        this.resetButton.addEventListener("click", () => this.div.remove());
    }

}

// set the countdown
let timeout = null;
Countdown.prototype.setCountdown = function () {
    if (!(parseInt(this.h) === 0 && parseInt(this.min) === 0 && parseInt(this.sec) === 0)) {
        timeout = setTimeout(() => {
            this.sec = (parseInt(this.sec) - 1).toString()
            this.isZero();
            this.printTime();
            this.setCountdown();
        }, 1000)
    }

}

// stop the countdown
Countdown.prototype.stopCountdown = function () {
    clearTimeout(timeout);
}
