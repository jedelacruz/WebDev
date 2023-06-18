let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = -1

function increment() {

    count = count + 1
    countEl.innerText = count 
    console.log(count)

}

increment()

function save(){

    saveEl.innerText  = count
    console.log(count)
    
}

save()
