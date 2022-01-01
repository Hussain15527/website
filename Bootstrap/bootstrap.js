let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let firstcard = 11
let secondcard = 2

let sum = firstcard + secondcard
let cards = [firstcard,secondcard]
let hasblackJack = false
let isAlive = true
let message;
message = ""
function startGame(){
    renderGame()
}
function renderGame(){
    if(sum <=20){
    message = "Do you want draw a new card?"
    }else if(sum === 21){
    hasblackJack = true
    message = ("woohoo you win the game")
    }else{
    isAlive = false
    message = ("you are out of the game")
    }
    cardEl.textContent ="Cards: "+ cards
    sumEl.textContent = "Sum: "+sum
    messageEl.textContent = message
    // console.log(message)
    // console.log(hasblackJack)
    // console.log(isAlive)
}
function newCard(){
    card = 3
    sum +=card
    cards.push(card)
    renderGame()
}
