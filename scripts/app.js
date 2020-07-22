console.log('sanity check')





const cards = document.querySelector(".kana-game");
let hasFlipped = false;
let lockCards = false;
let choices = []
let playedCards = []
let deck = []

function flipCard (eventObject) {
    if (eventObject.target.classList.contains("kana-game")) return;
    

    if (eventObject.target === choices[0]) return;
        console.log(eventObject.target)

    eventObject.target.parentElement.classList.add('flip') 
    choices.push(eventObject.target.parentElement)
    if (choices.length >= 2) {
        checkForMatch()

        if (playedCards.length === 12) {
            resetCards()
        }
    }
}

function checkForMatch () {
    console.log('check matchng working')

    if (choices[0].dataset.framework !== choices[1].dataset.framework ||
        (choices[2] && choices[1].dataset.framework !== choices[2].dataset.framework)) {
            reflipCards()
    } else if (choices[2]) {
        disableCards()
    }
}

function disableCards() {
    choices.forEach( (choice) => {
        playedCards.push(choice)
        choice.removeEventListener('click', flipCard)
    })
    console.log('disable cards working')
    choices = []
}


function reflipCards() {
    setTimeout( () => {
        choices.forEach( (choice) => {
            console.log('choice working')
            choice.classList.remove('flip')
        } )
        console.log('reflip working')
        choices = []
    }, 1500);
}


function resetCards() {
    setTimeout ( () => {
    playedCards.forEach( (playedCard) => {
        playedCard.classList.add('flip')
        playedCard.classList.remove('flip')
        console.log('reset cards working')
    })
        cards.addEventListener('click', flipCard);
        choices = []
       playedCards = []
    }, 1500);
}

function shuffle () {
    deck = document.querySelectorAll(".mem-cards")
    trackingArray = []
    while (trackingArray.length < deck.length) {
        Math.floor(Math.random() * deck.length)
        trackingArray.push(deck)
    }
    //tracking array
    //math.random to select index 
    //while length of tracking array is less than length of tracking array keep randomly 
}

//addEventListener
//shuffle function

// document.addEventListener('DOMContentLoaded', function(){
//     if (playedCards.length === 3) {
//         resetCards()
//         }


// })

cards.addEventListener('click', flipCard);






   