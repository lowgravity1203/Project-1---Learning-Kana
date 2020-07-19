console.log('sanity check')





const cards = document.querySelector(".kana-game");
let hasFlipped = false;
let lockCards = false;
let choices = []


function flipCard (eventObject) {
    if (eventObject.target.classList.contains("kana-game")) return;
    
    if (choices.length === 3) {
        checkForMatch1()
    }

    if (lockCards) return;

    if (eventObject.target === choices[0]) return;
console.log(eventObject.target)

    eventObject.target.parentElement.classList.add('flip') 
    choices.push(eventObject.target.parentElement)

    if (choices.length === 2) {
        checkForMatch()
    }
    if (choices.length === 3) {
        checkForMatch1()
    }

   
}


function checkForMatch () {
    let isMatch = choices[0].dataset.framework === choices[1].dataset.framework &&
        choices[1].dataset.framework === choices[2].dataset.framework;
    isMatch? disableCards() : reflipCards()
}



function disableCards() {
    choices[0].removeEventListener('click', flipCard);
    choices[1].removeEventListener('click', flipCard);
    
}

function disableCards1() {
    choices[2].removeEventListener('click', flipCard);
}

function reflipCards() {
    lockCards = false;
    setTimeout( () => {
        choices[0].classList.remove('flip');
        choices[1].classList.remove('flip');
        choices[2].classList.remove('flip')
        choices = []
        disableCards()
    }, 1500);
}

 cards.addEventListener('click', flipCard);






   