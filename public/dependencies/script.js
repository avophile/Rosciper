//Countdown function
function countdownTimer(){
    var timeleft = 3.5;
    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeleft-.5; // hack to make the rendering of the countdown look better
        timeleft -= 1;
        if(timeleft <= 0){
            document.getElementById("countdown").innerHTML = "Go!";
            clearInterval(downloadTimer);
            }
    }, 1000);
}

//Player1&2 and machine choices
//var machineInput = getMachineInput();
var player1choice = ["r", "s", "p"];
var player2choice = ["r", "s", "p"];

function playRock(num){
    if (num === 1){
        playerOneChoice = player1choice[0];
    }
    if (num === 2){
        playerTwoChoice = player2choice[0];
    }
    playGame(playerOneChoice);
    return playerOneChoice;
}

function playScissors(num){
    if (num === 1){
        playerOneChoice = player1choice[1];
    }
    if (num === 2){
        playerTwoChoice = player2choice[1];
    }
    playGame(playerOneChoice);
    return playerOneChoice;
}

function playPaper(num){
    if (num === 1){
        playerOneChoice = player1choice[2];
    }
    if (num === 2){
        playerTwoChoice= player2choice[2];
    }
    playGame(playerOneChoice);
    return playerOneChoice;
}

function playGame(playerOneChoice){
    var machineInput = getMachineInput(4);   
    compare(playerOneChoice, machineInput);
}

function getMachineInput(strategyNum){
    executeMachineStrategy(strategyNum);
}

//Compare player1, player2 or machine answers together
function compare(choice1, choice2) {
    if (choice2 == "Spock"){
        document.getElementById("countdown").innerHTML = "Spock refutes you, loser!";
        console.log("Player 1 Loses! Spock always wins!");
    } else {
            console.log(choice1 + choice2);
            switch(choice2) {
                case "r":
                document.getElementById("start_button").src = "dependencies/images/rock_opponent.png";
                break;
                case "s":
                document.getElementById("start_button").src = "dependencies/images/scissors_opponent.png";
                break;
                case "p":
                document.getElementById("start_button").src = "dependencies/images/paper_opponent.png";
                break;
            }
            switch(choice1 + choice2) {
                case "rs":
                case "pr":
                case "sp":
                document.getElementById("countdown").innerHTML = "You win!";
                setTimeout(function(){ 
                    document.getElementById("countdown").innerHTML = "Ready?"; 
                    document.getElementById("start_button").src = "dependencies/images/start_button.jpg";
                    }, 3000);
                console.log("Player 1 Wins!");
                break;
                case "rp":
                case "ps":
                case "sr":
                document.getElementById("countdown").innerHTML = "You lose!";
                setTimeout(function(){ 
                    document.getElementById("countdown").innerHTML = "Ready?"; 
                    document.getElementById("start_button").src = "dependencies/images/start_button.jpg";
                    }, 3000);
                console.log("Player 2 Wins!");
                break;
                case "rr":
                case "pp":
                case "ss":
                document.getElementById("countdown").innerHTML = "It's a tie!";
                setTimeout(function(){ 
                    document.getElementById("countdown").innerHTML = "Ready?";
                    document.getElementById("start_button").src = "dependencies/images/start_button.jpg";
                    }, 3000);
                console.log("Draw!");
                break;
            }
    }
}

function setMachineStrategy(strategyNum) {
    console.log("The player made the computer deploy strategy number " + strategyNum + ".");
    return executeMachineStrategy(strategyNum);
}

//Function to make computer choose
function executeMachineStrategy(strategyNum) {
    console.log("The computer has executed strategy number " + strategyNum + ".");
    switch (strategyNum) {
        case 1:
            getRock();
            console.log("dumb as a rock");
            break;
        case 2:
            getScissors();
            console.log("stupid as scissors");
            break;
        case 3:
            getPaper();
            console.log("pathetic as paper");
            break; 
        case 4:
            getMachineRandomChoice();
            console.log("Average random idiot");
            break;
        case 5:
            trackAndCounterOpponentPreviousChoice(choice1);
            break;
        case 6:
            decayPreviousChoiceValues(choice1);
            break;
        default:
            getSpock();
    }
}


//init comparison
compare(playerOneChoice, machineInput);

// Function computer plays spock and wins automatically
function getSpock(){
    var choices = ["Spock!"];
    return choices[0];
}

// Function computer chooses rock
function getRock() {
    var choices = ["r", "s", "p"];
    return choices[0];
}

// Function computer chooses scissors
function getScissors() {
    var choices = ["r", "s", "p"];
    return choices[1];
}

// Function computer chooses paper
function getPaper() {
    var choices = ["r", "s", "p"];
    return choices[2];
}

// Function to randomize computer choice
function getMachineRandomChoice() {
    var choices = ["r", "s", "p"];
    var rng = Math.floor(Math.random()*3);
    return choices[rng];
}

// Function to track and counter opponents previous choices 
function trackAndCounterOpponentPreviousChoice(choice1){
    var previousChoices = [rockCount, paperCount, scissorsCount];
    console.log("The previous choices were " + previousChoices);

    if (choice1 === "r"){
        rockCount += 1;
    } else if (choice1 === "s"){
	    paperCount += 1;
    } else if (choice1 === "p"){
        scissorsCount += 1;
    }

    if ((rockCount > paperCount) && (rockCount > scissorsCount)){ // counters with the choice that beats the choice opponent picks the most frequently
        return "p"; // paper beats rock
    } else if (paperCount > scissorsCount){
        return "s"; // scissors beats paper
    } else {
        return "r"; // rock beats scissors
    }
}

//  Function with a decaying score. It is more influenced by recent outcomes than past ones and adapts to a slowly changing opponent. It also reduces the score of the move that would have lost. So, for example, if the opponent played rock, the score for paper would increase, but the score for scissors would decrease.
function decayPreviousChoiceValues(choice1){
    if (!choiceRatings){
        let rockRating = 0;
        let scissorsRating = 0;
        let paperRating = 0;
        let choiceRatings = [rockRating, scissorsRating, paperRating];
        console.log("The choice ratings are initialized: " + choiceRatings);
    } else {
        rockRating *= 0.95;
        scissorsRating *= 0.95;
        paperRating *= 0.95;
        
        if (choice1 === "r"){
            paperRating += 0.1;
            scissorsRating -= 0.1;
        } else if (choice1 === "s"){
            rockRating += 0.1;
            paperRating -= 0.1;
        } else if (choice1 === "p"){
            scissorsRating += 0.1;
            rockRating -= 0.1;
        }
        console.log("The choice ratings are: " + choiceRatings);
        let randNum = ((random.random())*(math.exp(rockRating))+(math.exp(scissorsRating))+(math.exp(paperRating))); // TODO translate from Python!

        if (randNum < (math.exp(rockRating))){
            return "r";
        } else if ((randNum < (math.exp(rockRating))) && (randNum < (math.exp(paperRating)))){
            return "p";
        } else {
            return "s";
        } 
    }
} 


