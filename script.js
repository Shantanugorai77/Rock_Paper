// Initialize scores
let userScore = 0;
let compScore = 0;

// Cache the DOM elements (store them in variables for easy access)
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Function to get the computer's random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to handle a win
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `Your ${userChoice} beats their ${computerChoice}. You win! 🔥`;
    // Add a green glow to the button you clicked
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500);
}

// Function to handle a loss
function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Their ${computerChoice} beats your ${userChoice}. You lose. 💩`;
    // Add a red glow
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

// Function to handle a draw
function draw(userChoice) {
    result_p.innerHTML = `You both chose ${userChoice}. It's a draw. 🤝`;
    // Add a gray glow
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 500);
}

// The main game function
function game(userChoice) {
    const computerChoice = getComputerChoice();
    // Use a switch statement to compare choices
    switch (userChoice + computerChoice) {
        // Cases where the user wins
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        // Cases where the user loses
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        // Cases where it's a draw
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

// Add event listeners to the buttons
function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}

// Run the main function to start the game
main();