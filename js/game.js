
const start_button = document.querySelector("#play-button")
const guessButton = document.querySelector("#guess-button")
const start_button_screen = document.querySelector(".before-start")
const game_screen = document.querySelector(".after-start")
let bulls_text = document.querySelector("#bulls")
let cows_text = document.querySelector("#cows")
let valorInput;
let rounds = 10
let randomNumber = random_number()
let cows;
let bulls;



start_button.onclick = () =>{
    start_button_screen.style.display = "none";
    showScreen();
}

guessButton.onclick = () => {
    let guess = document.getElementById("guess-input").value;
     let result = check_guess(randomNumber, guess);

     console.log("teste 0.5")
     console.log(randomNumber)
     cows = 0;
     bulls = 0;
     if(rounds == 0) defeatScreen();
     console.log("teste 1")

     if(result){
         victoryScreen();
         console.log("teste 2")
     }else{
        console.log("teste 3")
        console.log(typeof(guess))
          rounds--;
          update_bulls_cows(randomNumber, guess);
          document.getElementById("guess-input").value =  "";
     }
  }


function random_number(){
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

function showScreen(){
    game_screen.style.display = "block";
}

 function game_start(){
     document.querySelector(".lifes").innerHTML = rounds;

}

function update_bulls_cows(realNumber, guess){
    for(let i = 0; i < 4; i++){
        if(guess[i] == realNumber[i]){
            bulls++;
        }

        if(realNumber.indexOf(guess[i]) !== -1){
            cows++;
        }
    }
}

function check_guess(realNumber, guess){
    if(realNumber ==  guess){
        return true;
    }
    return false;
}



