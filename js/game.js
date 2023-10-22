
const start_button = document.querySelector("#play-button")
const guessButton = document.querySelector("#guess-button")
const start_button_screen = document.querySelector(".before-start")
const game_screen = document.querySelector(".after-start")
let bulls_text = document.querySelector("#bulls")
let cows_text = document.querySelector("#cows")
let valorInput;
let rounds = 10



start_button.onclick = () =>{
    start_button_screen.style.display = "none"
    showScreen()
}







function guessNumber(){
    return document.getElementById("#guess-input")
}

function random_number(){
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}


function showScreen(){
    game_screen.style.display = "block"
}

 function game_start(){
     document.querySelector(".lifes").innerHTML = rounds

     

}



