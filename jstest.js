/*GAME SELECTOR*/

/*ROCKPAPERGAME*/

/*const goUserChoice = (userChoice) => {
    userChoice = userChoice.toLowerCase();
}*/
var rowOpciones = document.getElementById("bt");
var restore = document.getElementById("ganar");
var jugado = true;
let gano = 0;
var aleatorio = Math.floor(Math.random() * 3);
var imagenUser = document.getElementById("imagenA");
var imagenPC = document.getElementById("imagenB");
var choicerstart = document.getElementById("winner");
var pickachoice = document.getElementById("choicehidden");

function playmeAgain() {
  window.location.reload();
}

function computerChoice() {
  if (aleatorio === 0) {
    return "rock";
  } else if (aleatorio === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const computerImage = () => {
  if (aleatorio === 0) {
    imagenPC.setAttribute("src", "./img/rps/rock.png");
  } else if (aleatorio === 1) {
    imagenPC.setAttribute("src", "./img/rps/paper.png");
  } else {
    imagenPC.setAttribute("src", "./img/rps/scissors.png");
  }
};

function clickRock() {
  if (jugado) {
    imagenUser.setAttribute("src", "./img/rps/rock.png");
    console.log(computerChoice());
    tellWinner("rock", computerChoice());
    gameOver();
    computerImage();
    jugado = false;
  }
}

function clickPaper() {
  if (jugado) {
    imagenUser.setAttribute("src", "./img/rps/paper.png");
    console.log(computerChoice());
    tellWinner("paper", computerChoice());
    gameOver();
    computerImage();
    jugado = false;
  }
}

function clickScissors() {
  if (jugado) {
    imagenUser.setAttribute("src", "./img/rps/scissors.png");
    console.log(computerChoice());
    tellWinner("scissors", computerChoice());
    gameOver();
    computerImage();
    jugado = false;
  }
}

const tellWinner = (choiceU, choiceC) => {
  if (choiceU === choiceC) {
    return (gano = 2);
  }
  if (choiceU === "rock") {
    if (choiceC === "paper") {
      return (gano = 1);
    } else {
      return (gano = 0);
    }
  }
  if (choiceU === "paper") {
    if (choiceC === "scissors") {
      return (gano = 1);
    } else {
      return (gano = 0);
    }
  }
  if (choiceU === "scissors") {
    if (choiceC === "rock") {
      return (gano = 1);
    } else {
      return (gano = 0);
    }
  }
};

function gameOver() {
  pickachoice.style.display = "none";
  choicerstart.style.display = "inline";
  showWinner();
}

function showWinner() {
  switch (gano) {
    case 0:
      rowOpciones.style.display = "none";
      restore.innerHTML = `<div class="col-12" style="font-size:25px;background-color:#282c34; color:white" align="center">YOU WON!</div>`;
      break;
    case 1:
      rowOpciones.style.display = "none";
      restore.innerHTML = `<div class="col-12" style="font-size:25px;background-color:#282c34; color:white" align="center">YOU LOST!</div>`;
      break;
    default:
      rowOpciones.style.display = "none";
      restore.innerHTML = `<div class="col-12" style="font-size:25px;background-color:#282c34; color:white" align="center">IT IS A TIE</div>`;
      break;
  }

  /*if (gano === 0) {
    return (rowOpciones.innerHTML = `<div class="col-12" style="font-size:25px;background-color:#282c34; color:white" align="center">YOU WON!</div>`);
  } else if (gano === 1) {
    return (rowOpciones.innerHTML = `<div class="col-12" style="font-size:25px;background-color:#282c34; color:white" align="center">YOU LOST!</div>`);
  } else {
    return (rowOpciones.innerHTML = `<div class="col-12" style="font-size:25px;background-color:#282c34; color:white" align="center">IT IS A TIE</div>`);
  }*/
}

/**/
