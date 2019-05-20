//Countdown function
function countdownTimer(){
    var rsp = [ "Go!", "Paper...", "Scissors..", "Rock."]
    var timeleft = 3.5;
    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = rsp[timeleft-.5]; // hack to make the rendering of the countdown look better
        timeleft -= 1;
        if(timeleft <= 0){
            document.getElementById("countdown").innerHTML = "Go!";
            clearInterval(downloadTimer);
            }
    }, 1000);
}

//Player gesture options

var gestureOptions = ["r", "s", "p"];
var rockCount = 0;
var scissorsCount = 0;
var paperCount = 0;

function playerPlayRock(num){
    if (num === 1){
        playerOneChoice = gestureOptions[0];
    }
    if (num === 2){
        playerTwoChoice = gestureOptions[0];
    }
    getMachineChoice(machineStrategySelection);
    return playerOneChoice;
}

function playerPlayScissors(num){
    if (num === 1){
        playerOneChoice = gestureOptions[1];
    }
    if (num === 2){
        playerTwoChoice = gestureOptions[1];
    }
    getMachineChoice(machineStrategySelection);
    return playerOneChoice;
}

function playerPlayPaper(num){
    if (num === 1){
        playerOneChoice = gestureOptions[2];
    }
    if (num === 2){
        playerTwoChoice= gestureOptions[2];
    }
    getMachineChoice(machineStrategySelection);
    return playerOneChoice;
}