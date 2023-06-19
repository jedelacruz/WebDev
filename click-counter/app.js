let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = -1

function increment() {

    count += 1
    countEl.innerText = count 

}

function save(){

    let saverClicks = "Saves: " + count + "\n"
    saveEl.innerText += saverClicks 
    count = 0
    countEl.innerText = count
}

increment()
save()
