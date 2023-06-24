let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

console.log(cards)

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13) + 1
    
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()  
}

function renderGame(){
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

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

    if(sum === 0 || sum >= 21){

    }
    else{
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
