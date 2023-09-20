const player = document.getElementById('player-selection')
const computer = document.getElementById('computer-selection')
const possiblePlayer = document.querySelectorAll(".buttonA");
const outcome3 = document.getElementById('outcome')
let playerPlay
let computerPlay
let outcomeBe
possiblePlayer.forEach(possiblePlay => possiblePlay.addEventListener('click', (e) => {
    playerPlay = e.target.id
    player.innerHTML = playerPlay
    computer2()
    computer.innerHTML = computerPlay
    outcome3.innerHTML = outcome()
}))
function computer2() {
    let computerPlayNumber = Math.floor(Math.random() * 5) + 1
    switch(computerPlayNumber) {
        case 1: 
            computerPlay = "Rock";
            break;
        case 2: 
            computerPlay = "Paper";
            break;
        case 3: 
            computerPlay = "Scissors";
            break;
        case 4: 
            computerPlay = "Lizard";
            break;
        case 5: 
            computerPlay = "Spock";
            break;
    }
}

function outcome(){
    if (playerPlay == "Rock") {
        if (computerPlay == "Paper") {
            return ("Paper conceals rock, YOU LOSE!")
        }
        else if (computerPlay == "Scissors") {
            return ("Rock crushes scissors, YOU WIN!")
        }
        else if (computerPlay == "Spock") {
            return ("Spock vaporizes rock, YOU LOSE!")
        }
        else if (computerPlay == "Lizard") {
            return ("Rock crushes lizard, YOU WIN!")
        }
        else {
            return("YOU TIE!")
        }
    }
    if (playerPlay == "Paper") {
        if (computerPlay == "Rock") {
            return ("Paper conceals rock, YOU WIN!")
        }
        else if (computerPlay == "Scissors") {
            return ("Scissors cut paper, YOU LOSE!")
        }
        else if (computerPlay == "Spock") {
            return ("Paper disproves Spock, YOU WIN!")
        }
        else if (computerPlay == "Lizard") {
            return ("Lizard eats paper, YOU LOSE!")
        }
        else {
            return("YOU TIE!")
        }
    }
    if (playerPlay == "Scissors") {
        if (computerPlay == "Paper") {
            return ("Scissors cut paper, YOU WIN!")
        }
        else if (computerPlay == "Rock") {
            return ("Rock crushes scissors, YOU LOSE!")
        }
        else if (computerPlay == "Spock") {
            return ("Spock vaporizes scissors, YOU LOSE!")
        }
        else if (computerPlay == "Lizard") {
            return ("Scissors decapitate lizard, YOU WIN!")
        }
        else {
            return("YOU TIE!")
        }
    }
    if (playerPlay == "Lizard") {
        if (computerPlay == "Rock") {
            return ("Rock crushes lizard, YOU LOSE!")
        }
        else if (computerPlay == "Scissors") {
            return ("Scissors decapitate lizard, YOU LOSE!")
        }
        else if (computerPlay == "Spock") {
            return ("Lizard poisons Spock, YOU WIN!")
        }
        else if (computerPlay == "Paper") {
            return ("Lizard eats paper, YOU WIN!")
        }
        else {
            return("YOU TIE!")
        }
    }
    if (playerPlay == "Spock") {
        if (computerPlay == "Rock") {
            return ("SPock vaporizes rock, YOU WIN!")
        }
        else if (computerPlay == "Scissors") {
            return ("Spock vaporizes scissors, YOU WIN!")
        }
        else if (computerPlay == "Lizard") {
            return ("Lizard poisons Spock, YOU LOSE!")
        }
        else if (computerPlay == "Paper") {
            return ("Paper disproves Spock, YOU LOSE!")
        }
        else {
            return("YOU TIE!")
        }
    }
}