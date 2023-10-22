
const audio_pregame = document.querySelector("#audio-pregame")
const start_button = document.querySelector("#play-button")
const guessButton = document.querySelector("#guess-button")
const start_button_screen = document.querySelector(".before-start")
const game_screen = document.querySelector(".after-start")
const victory_screen = document.querySelector(".victory-screen")
const defeat_screen = document.querySelector(".defeat-screen")
let life = document.querySelector(".lifes")
let bulls_text = document.querySelector("#bulls")
let cows_text = document.querySelector("#cows")
let valorInput;
let rounds = 10
let randomNumber = random_number()
let cows;
let bulls;


// pré-jogo
start_button.onclick = () =>{
    start_button_screen.style.display = "none";
    showScreen();
    life.innerHTML = rounds
    audio_pregame.src = "music/Slower-Tempo-2020-03-22_-_8_Bit_Surf_-_FesliyanStudios.com_-_David_Renda.mp3"
    audio_pregame.volume = 0.2
}

// jogo
guessButton.onclick = () => {
    let guess = document.getElementById("guess-input").value;
    let result = check_guess(randomNumber, guess);

    console.log("teste 0.5")
    console.log(randomNumber)
    cows = 0;
    bulls = 0;
    if(rounds == 0) defeatScreen();

    if(result){
        victoryScreen();
    }else{
        rounds--;
        life.innerHTML = rounds
        update_bulls_cows(String(randomNumber), guess);
        bulls_text.innerHTML = bulls
        cows_text.innerHTML = cows
        document.getElementById("guess-input").value =  "";
     }
  }


// funções auxiliares-----------------------------------------
function random_number(){
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

function showScreen(){
    game_screen.style.display = "block";
}

function victoryScreen(){
    game_screen.style.display = "none";
    victory_screen.style.display = "block";
}

function defeatScreen(){
    game_screen.style.display = "none";
    defeat_screen.style.display = "block";
}

 function game_start(){
     document.querySelector(".lifes").innerHTML = rounds;

}

function update_bulls_cows(realNumber, guess){
    for(let i = 0; i < 4; i++){
        if(guess[i] == realNumber[i]){
            bulls++;
        }

        if(realNumber.includes(guess[i])){
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



