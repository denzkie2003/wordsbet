// Load window
window.addEventListener('load', startGame);

let seconds = document.getElementById('seconds');
let givenWords = document.getElementById('given-words');
let message = document.getElementById('message');
let inputWords = document.getElementById('wordInput');
let currentTime = document.getElementById('currentTime');
let currentScore = document.getElementById('currentScore');
let countarray = document.getElementById('countarray');

// Global Variables
var score = 0;
var time = 60;
var gamePlay;

currentTime.innerHTML = time;
seconds.innerHTML = time;

const wordsArray = ["cool", "hard", "cold", "genius", "program", "beautiful", "handsome", "scorpion", "dragon", "pretty","hardcore","pro","idiot","lame","chicken","cow","car","animal","human","sad","ugly","dirty","karrot","mango","devil","evel","speech","scratch","pencil","freak","thanks","thank you","alumni","special","tick","stick","dog","another","world","universe","approach","deny","with","calm","stink","speed","catch","balance","zero","number","codes","clean","heat","hot","fire","stone","diamond","petch","spike","strike","blame","centiped","test","courage","spell","witch","down","up","left","right","head","body","mountain","second","minute","hour","love","nail","foot","ear","heaven","inferno","eternal","flame","life","lifespan","leave","behind","smell","cockroach","kilometer","centimeter","long","short","file","distance","thing","side","lane","sculpture","sacred","heirloom","scared","miniac","sanctuary","shame","land","home","homeland","earth","earthquake"
];

countarray.innerHTML = wordsArray.length;
// Starg Game
function startGame() {
   // Randome Words Function
   randomWords(wordsArray);
   // Check Input if not undefined, start match making
   inputWords.addEventListener('input', matchWords);
   //Set interval timer
   setInterval(countDown, 1000);
   //Check game status
   setInterval(checkGame, 50);
}

// Matching Words
function matchWords() {
   if(allMatch()) {
      gamePlay = true;
      randomWords(wordsArray);
      inputWords.value = "";
      score++;
   }
   currentScore.innerHTML = score;
}
//Output Match
function allMatch() {
   if (inputWords.value === givenWords.innerHTML) {
      message.innerHTML = "Correct!";
      return true;
   } else {
      message.innerHTML = "";
      return false;
   }
}
// Randomize Words
function randomWords(wordsArray) {
   const random_words = Math.floor(Math.random() * wordsArray.length)+1;

   givenWords.innerHTML = wordsArray[random_words];
}

// Start Countdown
function countDown() {
   if (time > 0) {
      time--;
   } else if (time === 0) {
      gamePlay = false;
   }
   currentTime.innerHTML = time;
}
//Game Status
function checkGame() {
   if (!gamePlay && time === 0) {
      message.innerHTML = "Game Over!";
      inputWords.value = "Refresh The Page To Start Again"
      inputWords.disabled = true;
   }
}