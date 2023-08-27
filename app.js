const gameBoard = document.querySelector("#gameboard");

const infoplayer = document.querySelector("#infoPlayer");

const startCells = ["", "", "", "", "", "", "", "", ""];
let go = "circle";
infoplayer.innerText = "It is Circles Go.";

console.log(infoplayer);

function createBoard() {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.id = index;
    cellElement.classList.add("square");

    gameBoard.append(cellElement);

    cellElement.addEventListener("click", addGo);
  });
}

createBoard();

function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);

  go = go === "circle" ? "cross" : "circle";

  infoplayer.textContent = "It is now" + " " + go + "s turn.";

  e.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square");

  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombo.forEach((array) => {
    const circleWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    );
    if (circleWins) {
      infoPlayer.textContent = "Circle Wins!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });

  winningCombo.forEach((array) => {
    const crossWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("cross")
    );
    if (crossWins) {
      infoPlayer.textContent = "Cross Wins!";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  });
}
