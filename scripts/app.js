console.log('sanity check')




//create an eventListener for `ready` button
    //when clicked button changes from `ready` to `match`
    //also h1 message will change
    // all card elements will change to ./images/back.png

//create eventListener for all cards (bubble?)
    //when card is clicked it flips over 
    //only 3 cards can be face up at any given time 
    //clicking on faceUp card will return it to faceDown position

//create eventListener for `match` button
    //once clicked, check will initiate to determine if 3 faceUp cards are a match
        // if check === true - display message "Great Job! That's a match!"
        // else if check === false - display message "Not quite. Try again!"
            // if check === true change 3 cards opacity to zero
            // else if check === false return 3 cards to face down position

//when are 5 matches have been correctly made message should appear 
// - "Congratulations! you know your Japanese vowels!"
    //reset all cards to faceDown position?

//flip a card when clicked
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
        checkMatch1()
    }

    //  if (!hasFlipped) {
    //      hasFlipped = true;
    //      firstCard = choices[0];
    //      return;
    //  }
}

function checkForMatch () {
    if (choices[0].dataset.framework === choices[1].dataset.framework) {
        console.log('the first two match')
    } else {
        console.log('they dont match')
        reflipCards()
    }
}

function checkMatch1 () {
    if (choices[1].dataset.framework === choices[2].dataset.framework) {
        console.log('All three match!')
    } else {
        console.log('They dont match')
        reflipCards()
    }
}

function reflipCards() {
    lockCards = false;
    setTimeout( () => {
        choices[0].classList.remove('flip');
        choices[1].classList.remove('flip');
        choices[2].classList.remove('flip')
        choices = []
    }, 1500);
}

// function reflipCards1() {
//     lockCards = false;
//     setTimeout( () => {
//         choices[2].classList.remove('flip');
//          choices = []
//     }, 1500)
// }

// function checkForMatch () {
    // let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    // isMatch? disableCards() : 
// }


//problem starts here
// once the firstCard is turned over we need to make sure we move to second card
//try making firstCard an empty array?





//    secondCard = this;

//    checkMatch() 

//     thirdCard = this;
//     lockCards = true;

//     checkMatch1()

// function checkMatch () {
//     console.log(firstCard, secondCard, thirdCard)
//     if (firstCard.dataset.framework === secondCard.dataset.framework) {
//         stickCards(firstCard);
//         stickCards(secondCard);
//         console.log('working2')
//         return;
        
//     }
//     reflipCards ();
    
// }

// function checkMatch1 () {
//     if (firstCard.dataset.framework == secondCard.dataset.framework && secondCard.dataset.framework === thirdCard.dataset.framework) {
//         stickCards();
        
//     }
//     reflipCards();
// }

// function stickCards (card) {
//     console.log(card)
//     card.removeEventListener('click', flipCard);
// //     secondCard.removeEventListener('click', flipCard);
// //     thirdCard.removeEventListener('click', flipCard);
//  }

// function reflipCards() {
//     lockCards = true;
//     setTimeout( () => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');
//         thirdCard.classList.remove('flip');
//         resetCards()
//     }, 1500);
// }

// function resetCards () {
//     [hasFlipped, lockCards] = [false,false];
//     [firstCard, secondCard, thirdCard] = [null, null];
// }
// (function shuffle() {
//     cards.forEach(card => {
//         let randomShuf = Math.floor(Math.random() * 12);
//         card.style.order = randomShuf;
//     });
// }) ();
// }

 cards.addEventListener('click', flipCard);





//everything below this was first try and did NOT work well

    //h1 needs to be able to change from original message to 
//different message when `ready` button is clicked

//create 3 container elements
    //containerEng - for English vowels
// let containerEng = document.createElement('div');
// containerEng.setAttribute('class', 'container');

// //containerHira - for hiragana vowels
// let containerHira = document.createElement('div');
// containerHira.setAttribute('class', 'container');

// // containerKata - for katakana vowels
// let containerKata = document.createElement('div');
// containerKata.setAttribute('class', 'container')
        //needs to be in a horizontal row above the following 2    
    

//append the 3 container elements to the DOM
// document.appendChild(containerEng);
//document.append(containerHira);
// document.append(containerKata);

//create card elements
    //for containerEng - cardA, cardE, cardI, cardO, cardU
// let cardA = document.createElement('img');
// cardA.setAttribute('class', 'cardA'); // break here need to get some generic images to see if this works
// cardA.setAttribute('src', './images/cardA.HEIC');

// let cardE = document.createElement('img');
// cardE.setAttribute('class', 'cardB');
// cardE.setAttribute('src', './images/cardE.HEIC');

// let cardI = document.createElement('img');
// cardI.setAttribute('class', 'cardI');
// cardI.setAttribute('src', './images/cardI.HEIC');

// let cardO = document.createElement('img');
// cardO.setAttribute('class', 'cardO');
// cardO.setAttribute('src', './images/cardO.HEIC');

// let cardU = document.createElement('img');
// cardU.setAttribute('class', 'cardU');
// cardU.setAttribute('src', './images/cardU.HEIC');


    //for containerHira - cardHira1、cardHira2, cardHira3, cardHira4, cardHira5
// let cardHira1 = document.createElement('img');
// cardHira1.setAttribute('class', 'cardHira1');
// cardHira1.setAttribute('src', './images/cardHira1.HEIC');

// let cardHira2 = document.createElement('img');
// cardHira2.setAttribute('class', 'cardHira2');
// cardHira2.setAttribute('src', './images/cardHira2.HEIC');

// let cardHira3 = document.createElement('img');
// cardHira3.setAttribute('class', 'cardHira3');
// cardHira3.setAttribute('src', './images/cardHira3.HEIC');

// let cardHira4 = document.createElement('img');
// cardHira4.setAttribute('class', 'cardHira4');
// cardHira4.setAttribute('src', './images/cardHira4.HEIC')

// let cardHira5 = document.createElement('img');
// cardHira5.setAttribute('class', 'cardHira5');
// cardHira5.setAttribute('src', './images/cardHira5.HEIC');

//     //for containerKata - cardKata1, cardKata2, cardKata3, cardKata4, cardKata5
// let cardKata1 = document.createElement('img');
// cardKata1.setAttribute('class', 'cardKata1');
// cardKata1.setAttribute('src', './images/cardKata1.HEIC');

// let cardKata2 = document.createElement('img');
// cardKata2.setAttribute('class', 'cardKata2');
// cardKata2.setAttribute('src', './images/cardKata2.HEIC');

// let cardKata3 = document.createElement('img');
// cardKata3.setAttribute('src', 'cardKata3');
// cardKata3.setAttribute('class', './images/cardKata3.HEIC');

// let cardKata4 = document.createElement('img');
// cardKata4.setAttribute('class', 'cardKata4');
// cardKata4.setAttribute('src', './images/cardKata4.HEIC');

// let cardKata5 = document.createElement('img');
// cardKata5.setAttribute('class', 'cardKata5');
// cardKata5.setAttribute('src', './images/cardKata5.HEIC');


//should the card elements be stored as an array?

//append cards to respective container elements

//create match button