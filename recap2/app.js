let person = {
    name: "Je",
    age: 16,
    country: "Philippines"
}

function logData(){
    let logDataText
    logDataText = person.name + " is " + person.age + " years old and lives in " + person.country
    let personLogEl = document.querySelector("#person-el")
    personLogEl.textContent = logDataText   
}


logData()

let age = 16

let agePriceEl = document.querySelector("#agePrice-el")
let agePrice

if(age < 6){
    agePrice = "free"
}
else if(age > 6 && age <= 17){
    agePrice = "child discount"
}
else if(age >= 18 && age <= 26){
    agePrice = "student discount"
}
else if(age >= 27 && age <= 66){
    agePrice = "full price"
}
else{
    agePrice = "senior citizen discount"
}

agePriceEl.textContent = agePrice



let largeCountriesEl = document.querySelector("#largeCountries-el")
let largeCountries = [
    "China",
    "India",
    "USA",
    "Indonesia",
    "Pakistan"
]


for(let i = 0; i < largeCountries.length; i++){
    largeCountriesEl.innerHTML += "- " + largeCountries[i] + "<br>"
}

let largeCountriesRandomEl = document.querySelector("#largeCountriesRandom-el")
let largeRandomCountry = [
    "Tuvalu",
    "India",
    "USA",
    "Indonesia",
    "Monaco"
]

largeRandomCountry.pop()
largeRandomCountry.push("Pakistan")

largeRandomCountry.shift()
largeRandomCountry.unshift("China")

for(let i = 0; i < largeRandomCountry.length; i++){
    largeCountriesRandomEl.innerHTML += "- " + largeRandomCountry[i] + "<br>"
}


let scaryEl = document.querySelector("#scary-el")

let dayOfMonth = 13
let weekday = "Friday"

let dayMonth = 13
let dayWeek = "Friday"

if(dayMonth == dayOfMonth && dayWeek == weekday){
    scaryEl.textContent = "skeri shit"
}