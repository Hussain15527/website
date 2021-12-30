let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
function increment() {
  count = count +1
  countEl.innerText = count
}
function save() {
  let countStr =" " +count + " - "
  saveEl.textContent += countStr
}



// let welcomeEl = document.getElementById("welcome-el")

// let name = "modassir"
// let greeting= "welcome back"

// welcomeEl.innerText = name+greeting
// welcomeEl.innerText = welcomeEl.innerText + "😈"
