let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    // Generate random number,
    let randomNumber = Math.floor(Math.random() * 4);
    // using random number to generate a random colour
    let randomChosenColour = buttonColours[randomNumber];
    // Push generated color to array
    gamePattern.push(randomChosenColour);

    // Setting a flash animation to the button with the generated colour
    setInterval(function() { $("#" + randomChosenColour).fadeOut(100).fadeIn(100); }, 900);

    // Creating an Audio object with its url set to the generated color's sound
    let buttonAudio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // Playing the sound file
    buttonAudio.play();
}


// Assigning a nodelist of all buttons to a variable,
let buttons = document.querySelectorAll(".btn");

// looping over the nodelist and for each element in it 
// adding an event listener that triggers a handler 
// function when the element is clicked.
buttons.forEach(el => el.addEventListener("click", event => {
    let userChosenColor = el.id;

    //Pushing the color of the button clicked to an array
    // storing the pattern of user clicked colors.
    userClickedPattern.push(userChosenColor);

}));




let gameStarted = false;
let level = 0;


// Starting the game when the user presses a key,
// if the game is not already started. Chaning the 
// header text to "Game started"
document.onkeydown = function() {
    if (gameStarted == false) {
        nextSequence();
        gameStarted = true;
        document.getElementById("level-title").innerHTML = "Game Started";
    };
};

function checkAnswer(currentLevel) {

}