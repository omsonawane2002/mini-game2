let score = 0;
let intervalId;

// Get the width and height of the container
const containerWidth = document.getElementById("container").offsetWidth;
const containerHeight = document.getElementById("container").offsetHeight;

// Get the width and height of the butterfly image
const butterflyWidth = document.getElementById("butterfly").offsetWidth;
const butterflyHeight = document.getElementById("butterfly").offsetHeight;

// Move the butterfly to a random location every second
intervalId = setInterval(moveButterfly, 1000);

// Increment score when the butterfly is clicked
document.getElementById("butterfly").addEventListener("click", function() {
 score++;
 document.getElementById("scoreboard").innerHTML = "Score: " + score;
});

// Function to move the butterfly to a random location
function moveButterfly() {
 const butterfly = document.getElementById("butterfly");
 const randomX = Math.floor(Math.random() * (containerWidth - butterflyWidth));
 const randomY = Math.floor(Math.random() * (containerHeight - butterflyHeight));
 butterfly.style.top = randomY + "px";
 butterfly.style.left = randomX + "px";
}