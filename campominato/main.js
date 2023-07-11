document
  .getElementById("generaGriglia")
  .addEventListener("click", generaGriglia);

function generaGriglia() {
  const griglia = document.getElementById("griglia");
  griglia.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.textContent = i;
    cella.addEventListener("click", coloraCella);
    griglia.appendChild(cella);

    // squarePerRow = 25;
    // cella.style.flexBasis = `calc(100% / ${squarePerRow})`;

    // square.textContent = squareContent;
    // square.style.flexBasis = `calc(100% / ${squaresPerRow})`;
  }
}

function coloraCella() {
  this.style.backgroundColor = "lightblue";
  console.log("Cella cliccata: " + this.textContent);
}

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
