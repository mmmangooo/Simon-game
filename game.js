let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;


// Starting the game when the user presses a key,
// if the game is not already started. Changing the 
// header text to "Game started"
document.onkeydown = function() {
    if (gameStarted == false) {

        document.getElementById("level-title").innerHTML = "Game Started";
        setTimeout(function() { nextSequence() }, 2000);

        gameStarted = true;
    };
};

// Assigning a nodelist of all buttons to a variable,
let buttons = document.querySelectorAll(".btn");

// looping over the nodelist and for each element in it 
// adding an event listener that triggers a handler 
// function when the element is clicked.
buttons.forEach(el => el.addEventListener("click", event => {
    let userChosenColor = el.id;

    animatePress(userChosenColor);
    playSound(userChosenColor);

    //Pushing the color of the button clicked to an array
    // storing the pattern of user clicked colors.
    userClickedPattern.push(userChosenColor);

    //Calling checkAnswer to see if the user clicked the right button
    checkAnswer(userClickedPattern.length - 1);
}));

// Checking if the buttons clicked by the user are the same as the ones listed in 
// the game pattern, and if so triggering the nextSequense function when the user
// has finished the entire sequence
function checkAnswer(currentLevel) {

    // Checking if the last user clicked button is the same as the last in the gamepattern
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("success");
            //Checking if the length of the userClickedPattern array is the same as the length of the gamePattern array
        if (gamePattern.length == userClickedPattern.length) {
            setTimeout(function() { nextSequence() }, 1000);

        }
    } else {
        console.log("fail");
        playSound("wrong");
        document.body.classList.add("game-over");

        document.getElementById("level-title").innerHTML = "Game over, press a key to restart";

        setTimeout(function() {
            document.body.classList.remove("game-over");
        }, 2000);

        startOver();
    }


}


function nextSequence() {

    //Resetting userClickedPattern to an empty array
    userClickedPattern = [];

    level++;
    document.getElementById("level-title").innerHTML = "Level " + level;

    // Generate random number,
    let randomNumber = Math.floor(Math.random() * 4);
    // using random number to generate a random colour
    let randomChosenColour = buttonColours[randomNumber];
    // Push generated color to array
    gamePattern.push(randomChosenColour);

    animateColor(randomChosenColour);
    playSound(randomChosenColour);

}




function startOver() {
    gameStarted = false;
    gamePattern = [];
    level = 0;
}

function animateColor(color) {
    // Setting a flash animation to the button with the generated colour
    setTimeout(function() { $("#"+color).fadeOut(200).fadeIn(200); }, 1200);
}

function playSound(name) {
    // Creating an Audio object with its url set to the generated color's sound
    let buttonAudio = new Audio("sounds/" + name + ".mp3");
    // Playing the sound file
    buttonAudio.play();
}

function animatePress(color) {
        // Setting an animation to the button when clicked
        document.getElementById(color).classList.add("pressed");
        setTimeout(function() {
            document.getElementById(color).classList.remove("pressed");
        }, 200);

}