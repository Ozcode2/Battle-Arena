// Initial health values
let hiroshimaHealth = 200;
let nagasakiHealth = 200;

// Flag variable to control attacks
let attacksEnabled = true;

// add code for attacking playerCharacter
const opponentCharacter = {
  attack: function () {
    if (attacksEnabled && nagasakiHealth > 0) {
      console.log("Opponent character attacks player character!");
      hiroshimaHealth -= 10;
      // add fight sounds
      document.getElementById("fightVoice").play();
      document.getElementById("punchSound").play();
    }
    // add fight sounds when hiroshimaHealth is zero
    document.getElementById("hiroshimaHealth").innerHTML = hiroshimaHealth;
    if (hiroshimaHealth == 0) {
      // add fight sounds
      document.getElementById("painSound").play();
      document.getElementById("RecordVoice").play();
    }
    if (hiroshimaHealth < 50) {
      document.getElementById("hiroshimaHealth").style.color = "tomato";
    }
  },
};

// set time interval for attacking opponent character
setInterval(function () {
  if (hiroshimaHealth > 0) {
    opponentCharacter.attack();
  }
}, 1500);

// add attack function for nagasaki
function attackNagasaki() {
  // Decrement Hiroshima's health
  if (attacksEnabled && nagasakiHealth > 0 && hiroshimaHealth != 0) {
    nagasakiHealth -= 10;
    // add fight sounds
    document.getElementById("fightVoice").play();
    document.getElementById("punchSound").play();
    // Update health display
    document.getElementById("nagasakiHealth").innerHTML = nagasakiHealth;

    // add fight sounds when nagasakiHealth is equal to zero
    if (nagasakiHealth == 0) {
      // add pain sound
      document.getElementById("RecordSound").play();
      document.getElementById("painSound").play();
    }
    if (nagasakiHealth < 50) {
      document.getElementById("nagasakiHealth").style.color = "tomato";
    }
  }
}

// add healing function for hiroshima
function healNagasaki() {
  // Increment Nagasaki's health
  if (
    attacksEnabled &&
    nagasakiHealth < 200 &&
    nagasakiHealth != 0 &&
    hiroshimaHealth != 0
  ) {
    nagasakiHealth += 10;
    // Update health display
    document.getElementById("nagasakiHealth").innerHTML = nagasakiHealth;
  }
  // add healing sound
  document.getElementById("Health").play();
}

// add healing function for hiroshima
function healingHiroshima() {
  if (
    attacksEnabled &&
    hiroshimaHealth < 200 &&
    hiroshimaHealth != 0 &&
    nagasakiHealth != 0
  ) {
    // increment hiroshimaHealth
    hiroshimaHealth += 10;

    // Update health display
    document.getElementById("hiroshimaHealth").innerHTML = hiroshimaHealth;
  }
  // add healing sound
  document.getElementById("Health").play();
}

// Game loop to check player health and declare winner
setInterval(() => {
  const hiroshimaHealthDisplay = document.getElementById("hiroshimaHealth");
  const nagasakiHealthDisplay = document.getElementById("nagasakiHealth");
  const winner = document.getElementById("winner");

  if (hiroshimaHealthDisplay.innerHTML === "0") {
    winner.innerHTML = "Nagasaki wins!";
  } else if (nagasakiHealthDisplay.innerHTML === "0") {
    winner.innerHTML = "Hiroshima wins!";
  }

  // clear winner after 1 second and then show it again
  setTimeout(() => {
    winner.innerHTML = "";
  }, 500);
}, 1000);

// add function that will show what happens when start button is clicked
function start() {
  hiroshimaHealth = 200;
  nagasakiHealth = 200;
  // Update health display
  document.getElementById("hiroshimaHealth").innerHTML = hiroshimaHealth;
  document.getElementById("nagasakiHealth").innerHTML = nagasakiHealth;
  // add game sound
  document.getElementById("Start").play();
}

// Pause all attacks
function pause() {
  attacksEnabled = false;
}

function play(){
  attacksEnabled = true;
}

