let firstCard = 1
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21 ) {
        message = "Congrats! You've got blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You lose!"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard(){
    console.log("drawing a new card")
    let card = 2
    sum += card
    renderGame()
}
