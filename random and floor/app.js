// string arrays

let myResumeVar = document.querySelector("#resume-el")

let myResume = [
    "Je Dela Cruz",
    "16 years old",
    "I've been coding since I was 14",
    "I am a consistent w honors student that has 90+ average",
    "I am a hardworking and kind person"
]

myResumeVar.textContent = myResume[0]

// complex arrays

let meVar = document.querySelector("#me-el")

let me = [
    "Je Dela Cruz",
    16,
    likesPizza = true
]

meVar.textContent = me[1]

// add and removing items from arrays

let cardsVar = document.querySelector("#cardPush-el")
let cards = [7, 4]

cards.push(6)

cardsVar.textContent = cards

// adding & delete  arrays ex#1

let messagesVar = document.querySelector("#messagesPush-el")

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.pop(messages)
messages.push(newMessage)

messagesVar.innerHTML = messages

