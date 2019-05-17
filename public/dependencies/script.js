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

//Function to randomise computer choice
function getMachineInput() {
    var choices = ["r", "s", "p"];
    var rng = Math.floor(Math.random()*3);
    return choices[rng];
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
    var machineInput = getMachineInput();
    compare(playerOneChoice, machineInput);
}

function playScissors(num){
    if (num === 1){
        playerOneChoice = player1choice[1];
    }
    if (num === 2){
        playerTwoChoice = player2choice[1];
    }
    var machineInput = getMachineInput();
    compare(playerOneChoice, machineInput);
}

function playPaper(num){
    if (num === 1){
        playerOneChoice = player1choice[2];
    }
    if (num === 2){
        playerTwoChoice= player2choice[2];
    }
    var machineInput = getMachineInput();   
    compare(playerOneChoice, machineInput);
}

//Compare player1, player2 or machine answers together
function compare(choice1, choice2) {
    if (choice2 == "Spock"){
        document.getElementById("countdown").innerHTML = "Spock refutes you loser!";
        console.log("Player 1 Loses! SPock always wins!");
    } else {
            console.log(choice1 + choice2);
            switch(choice1 + choice2) {
                case "rs":
                case "pr":
                case "sp":
                document.getElementById("countdown").innerHTML = "You win!";
                
                console.log("Player 1 Wins!");
                breasetTimeout(function(){ document.getElementById("countdown").innerHTML = "Ready?"; }, 3000);k;
                case "rp":
                case "ps":
                case "sr":
                document.getElementById("countdown").innerHTML = "You lose!";
                setTimeout(function(){ document.getElementById("countdown").innerHTML = "Ready?"; }, 3000);
                console.log("Player 2 Wins!");
                break;
                case "rr":
                case "pp":
                case "ss":
                document.getElementById("countdown").innerHTML = "It's a tie!";
                setTimeout(function(){ document.getElementById("countdown").innerHTML = "Ready?"; }, 3000);
                console.log("Draw!");
                break;
            }
    }
}

//init comparison
compare(playerOneChoice, machineInput);