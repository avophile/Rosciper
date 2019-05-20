// player chooses machine strategy
function selectMachineStrategy(num){
    machineStrategySelection=num;
    console.log("The player selected strategy number " + machineStrategySelection + " for the machine.");
    return machineStrategySelection;
}

// machine's strategy is implemented to produc machine's choice
function getMachineChoice(num){ 
    machineStrategyFunctionNumber = num;
    strategiesxxx= ["zero", "one", "two", "three","four"];
    let n = strategiesxxx[num];
    console.log("machineStrategyFunctionNumber is " + num + " and n is " + n + "."); 
    machineChoice = machineStrategyFunctions.call(n);   // why is .num not a function?
    console.log("machineChoice is " + machineChoice)
    compare(playerOneChoice, machineChoice);
}   

var machineStrategyFunctions = { // array stores all the machines strategies

    // Function 0: computer plays Spock and wins automatically
    0: function getSpock (){
        return "Spock!";
    },

    // Function 1: computer chooses rock
    one: function getRock() {
        var choices = ["r", "s", "p"];
        console.log("r");
        return choices[0];
    },

    // Function 2: computer chooses scissors
    two: function getScissors() {
        var choices = ["r", "s", "p"];
        return choices[1];
    },

    // Function 3: computer chooses paper
    three: function getPaper () {
        var choices = ["r", "s", "p"];
        return choices[2];
    },

    // Function 4: to randomize computer choice
    four: function getMachineRandomChoice () {
        var choices = ["r", "s", "p"];
        var rng = Math.floor(Math.random()*3);
        return choices[rng];
    },

    // Function 5: to track and counter opponents previous choices 
    5: function trackAndCounterOpponentPreviousChoice (choice1){
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
    },

    //  Function 6: with a decaying score. It is more influenced by recent outcomes than past ones and adapts to a slowly changing opponent. It also reduces the score of the move that would have lost. So, for example, if the opponent played rock, the score for paper would increase, but the score for scissors would decrease.
    6: function decayPreviousChoiceValues (choice1){
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
    },

    // Function 7: computer plays FU and wins automatically
    7: function getFU (){
        var choices = ["FU!"];
        return choices;
    }
};

