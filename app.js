let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Randomize computer
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, compChoice){    
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;

    result_p.innerHTML = `${convertToWords(userChoice)} ${smallUserWord} beats ${convertToWords(compChoice)} ${smallCompWord}. You win!`;

    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {userChoice_div.classList.remove('green-glow');}, 300);

}

function lose(compChoice, userChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    compScore++;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${convertToWords(compChoice)} ${smallCompWord} beats ${convertToWords(userChoice)} ${smallUserWord} . You lost!`;
    document.getElementById(userChoice).classList.add("green-glow");

}

function draw(){
    result_p.innerHTML = "It's a tie!";
}

//game logic
function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(compChoice, userChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

//main function for game
function main() {
    //Event listeners
    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });
}

main();