const gameContainer = document.getElementById("game");
const restart = document.getElementById("restart");
let numOfCards = 0;
let points = 0;
let lowestScore = 0;
let cardOne, cardTwo;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (numOfCards === 0){
    event.target.style.pointerEvents = 'auto';
    cardOne = event.target;
    cardOne.style.transform = "rotateY(180deg)";
    cardOne.style.backgroundColor = event.target.classList;
    numOfCards++;
  }
  else if (numOfCards === 1){
    points++;
    cardTwo = event.target;
    cardTwo.style.transform = "rotateY(180deg)";
    cardTwo.style.backgroundColor = event.target.classList;
    console.log(cardOne.classList.value, cardTwo.classList.value);
    if (cardOne.classList.value !== cardTwo.classList.value){
      setTimeout(function () {
      cardOne.style.transform = "rotateY(180deg)";
      cardTwo.style.transform = "rotateY(180deg)";
      cardOne.style.backgroundColor = "darkgrey";
      cardTwo.style.backgroundColor = "darkgrey";
      event.target.style.pointerEvents = 'auto';
      numOfCards = 0;
      }, 1500);
      event.target.style.pointerEvents = 'none';
      numOfCards++;
    }
    else {
        cardOne = '';
        cardTwo = '';
        numOfCards = 0;
    }
    document.getElementById("points").innerText = points;
  }
}
// when the DOM loads
createDivsForColors(shuffledColors);

restart.addEventListener("click", function() {
  points = 0;
  document.getElementById("points").innerText = points;
  document.getElementById("game").innerHTML = "";
  let shuffledColors = shuffle(COLORS);
  createDivsForColors(shuffledColors);
});
