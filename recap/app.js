// Program 1
// Display Name

let fullNameDisplay = document.getElementById("full-name")

let firstName = "Je"
let lastName = "Dela Cruz"
let fullName = firstName + " " + lastName

fullNameDisplay.textContent = fullName

// Program 2
// Display Greetings | Functions

let fullGreetingDisplay = document.getElementById("greeting-name")

function greeting(){

    let name = "Je"
    let greeting = "Hello Master"
    let fullGreeting = greeting + " " + name

    fullGreetingDisplay.textContent = fullGreeting

}

greeting()

// Program 3
// Increment and Decrement

/*

Instructions:

Create 2 functions, add3Points() and remove1Point()
add or remove points from myPoints variable
Call the functions and it should logs out 10+

*/

let myPointsDisplay = document.getElementById("incDec-ment")

let myPoints = 3

function add3Points(){
    myPoints += 3
}
function remove1Point(){
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

myPointsDisplay.textContent = myPoints

// Program 4
// Btn Click | Something went wrong 

let errorMessage = document.getElementById("error-msg")

function purchaseError(){
    errorMessage.innerHTML = "<br><br><br>Something went wrong!";
    errorMessage.style.color = "crimson";
    errorMessage
}

// Program 5
// Btn Click | Simple calculator | No inputs

let num1 = 8
let num2 = 2
let total
let fullTotal = document.getElementById("total")

document.getElementById("number-1").innerText = num1
document.getElementById("number-2").innerText = num2

function addFunction(){
    total = num1 + num2
    fullTotal.innerText = "Total: " + total
}
function subtractFunction(){
    total = num1 - num2
    fullTotal.innerText = "Total: " + total
}
function multiplyFunction(){
    total = num1 * num2
    fullTotal.innerText = "Total: " + total
}

function divideFunction(){
    total = num1 / num2
    fullTotal.innerText = "Total: " + total
}

