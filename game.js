var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    // Generate random number,
    var randomNumber = Math.floor(Math.random() * 4);
    // using random number to generate a random colour
    var randomChosenColour = buttonColours[randomNumber];
    // Push generated color to array
    gamePattern.push(randomChosenColour);
    
    // Setting a flash animation to the button with the generated colour
    setInterval(function() {$("#" +randomChosenColour).fadeOut(100).fadeIn(100); }
, 900);

// Creating an Audio object with its url set to the generated color's sound
let buttonAudio = new Audio("sounds/" +randomChosenColour +".mp3");
// Playing the sound file
buttonAudio.play();
}

let gameStarted = false;
let level = 0;

document.onkeypress = function() {
    if (gameStarted == false) {
    nextSequence();
    gameStarted = true;
    document.getElementsById("level-title").innerHTML = "Game Started";
    };
};

