console.log('sanity check')





const cards = document.querySelector(".kana-game");
let hasFlipped = false;
let lockCards = false;
let choices = []


function flipCard (eventObject) {
    if (eventObject.target.classList.contains("kana-game")) return;
    

    if (eventObject.target === choices[0]) return;
        console.log(eventObject.target)

    eventObject.target.parentElement.classList.add('flip') 
    choices.push(eventObject.target.parentElement)

    if (choices.length >= 2) {
        checkForMatch()
    }
}

function checkForMatch () {
    console.log('check matchng working')
    let isMatch = choices[0].dataset.framework === choices[1].dataset.framework &&
        choices[1].dataset.framework === choices[2].dataset.framework;
    isMatch? disableCards() : reflipCards()
    console.log('what is happening')
}

function disableCards() {
    choices.forEach( (choice) => choice.removeEventListener('click', flipCard))
    console.log('disable cards working')
}


function reflipCards() {
    setTimeout( () => {
        choices.forEach( (choice) => {
            console.log('choice working')
            choice.classList.remove('flip')
            choice.addEventListener('click', flipCard)  
        } )
        console.log('reflip working')
        choices = []
    }, 1500);
}

 cards.addEventListener('click', flipCard);






   