let firstcard = 11
let secondcard = 3

let sum = firstcard + secondcard

let hasblackJack = false
let isAlive = true
let message;
message = ""
function startGame(){
if(sum <=20){
  message = "you want draw a new card"
}else if(sum === 21){
  hasblackJack = true
  message = ("woohoo you win the game")
}else{
  isAlive = false
  message = ("you are out of the game")
}
console.log(message)
console.log(hasblackJack)
console.log(isAlive)}