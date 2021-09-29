class Calculator {
    constructor() {

    }

    captureClick() {
        document.addEventListener('click', e => {
            this.el = e.target;
            if(this.el.classList.contains('btn')) this.addNumLed(this.el);
            if(this.el.classList.contains('clean')) this.cleanLed();
            if(this.el.classList.contains('del')) this.del();
            if(this.el.classList.contains('account')) this.account();

        })
    };

    addNumLed(_el) {
        if(document.querySelector('.led').innerText.length >= 8) return;
        document.querySelector('.led').innerHTML += this.el.innerText;
       
    };

    cleanLed() {
        document.querySelector('.led').innerHTML = ' ';
    }

    del() {
        this.numbersLed = document.querySelector('.led').innerText;
        document.querySelector('.led').innerHTML = this.numbersLed.slice(0, this.numbersLed.length -1 )
    }

    account() {
        document.querySelector('.led').innerHTML = eval(document.querySelector('.led').innerText)
    }
}

let calculator = new Calculator();
calculator.captureClick()
