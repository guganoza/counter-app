let countEL = document.getElementById("count-el")


let count = 0

function increment(){
    count += 1
    countEL.textContent = count
}

let saveEl = document.getElementById("save-el")


function save() {
    let saver = count + " - " 
    saveEl.textContent += saver
    count = 0
    countEL.textContent = count
}