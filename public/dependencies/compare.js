//Compare player1, player2 or machine answers together
function compare(choice1, choice2) {
    if (choice2 == "Spock"){
        document.getElementById("countdown").innerHTML = "Spock refutes you, loser!";
        console.log("Player 1 Loses! SPock always wins!");
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