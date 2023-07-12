// ______________________________________________________

// ______________________________________________________

// const squareCountsSelect = document.querySelector("[name='squareCounts']");
// const btnStart = document.querySelector("#btn-start");

// const gridContainer = document.querySelector(".grid-container");

// btnStart.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   const squareCounts = parseInt(squareCountsSelect.value);

//   console.log("valore scelto", squareCounts);

//   const gridList = createGrid(squareCounts);

//   console.log(gridList);

//   printGrid(gridContainer, gridList);
// }

// function createSingleSquare(squareContent, squareCounts) {
//   const square = document.createElement("div");

//   const squaresPerRow = Math.sqrt(squareCounts);

//   square.classList.add("grid-square");
//   square.textContent = squareContent;
//   square.style.flexBasis = `calc(100% / ${squaresPerRow})`;

//   square.addEventListener("click", function () {
//     square.classList.toggle("bg-success");
//   });

//   return square;
// }

// function createGrid(squaresNumber) {
//   const grid = [];

//   for (let i = 0; i < squaresNumber; i++) {
//     const newSquare = createSingleSquare("sqr" + i, squaresNumber);

//     grid.push(newSquare);
//   }

//   return grid;
// }

// function printGrid(container, squaresList) {
//   container.innerHTML = "";

//   for (let i = 0; i < squaresList.length; i++) {
//     container.append(squaresList[i]);
//   }
// }
// ______________________________________________________

// ______________________________________________________

document
  .getElementById("generaGriglia")
  .addEventListener("click", generaGriglia);

function generaGriglia() {
  const griglia = document.getElementById("griglia");
  griglia.innerHTML = "";

  const numCells = 100;
  const cellsPerRow = 10;

  const grigliaContainer = document.createElement("div");
  grigliaContainer.classList.add("griglia-container");
  griglia.appendChild(grigliaContainer);

  for (let i = 1; i <= numCells; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.textContent = i;
    cella.addEventListener("click", function () {
      coloraCella(cella);
    });
    grigliaContainer.appendChild(cella);

    if (i % cellsPerRow === 0) {
      const lineBreak = document.createElement("br");
      grigliaContainer.appendChild(lineBreak);
    }
  }
}

function coloraCella(cella) {
  cella.style.backgroundColor = "lightblue";
}
