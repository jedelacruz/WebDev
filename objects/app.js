let person = {
    name: "Je",
    age: "16",
    address: "Philippines, SPL Brgy Langgam",
    isHandsome: true,
    hobbies: ["singing, drawing, coding"]
}

let nameEl = document.querySelector("#name-el")
let ageEl = document.querySelector("#age-el")
let addressEl = document.querySelector("#address-el")
let isHandsome = document.querySelector("#handsome-el")
let hobbiesEl = document.querySelector("#hobbies-el")

nameEl.textContent = person.name
ageEl.textContent = person.age
addressEl.textContent = person.address
isHandsome.textContent = person.isHandsome
hobbiesEl.textContent = person.hobbies

let hotel = {
    name: "banana king hotels",
    price: 100,
    isGood: true,
    furnitures: ["sofa" , "bed" , "etc"]
}

let hotelName = document.querySelector("#hotelName-el")
let hotelPrice = document.querySelector("#hotelPrice-el")
let hotelGood = document.querySelector("#hotelGood-el")
let hotelFurnitures = document.querySelector("#hotelFurnitures-el")

hotelName.textContent = hotel.name
hotelPrice.textContent = hotel.price
hotelGood.textContent = hotel.isGood
hotelFurnitures.textContent = hotel.furnitures

console.log(hotel.name)
console.log(hotel.furnitures.length)