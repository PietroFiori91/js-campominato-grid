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

//PRIMA FUNZIONE PER GENERARE GRIGLIA

function generaGriglia() {
  const griglia = document.getElementById("griglia");
  griglia.innerHTML = "";

  //COSTANTI NUMERO CELLE E MAX NUM. PER RIGA

  const numCells = 100;
  const cellsPerRow = 10;

  //CREO ELEMENT GRIGLIA

  const grigliaContainer = document.createElement("div");
  grigliaContainer.classList.add("griglia-container");
  griglia.appendChild(grigliaContainer);

  //CICLO FOR + CREO ELEMENT CELLA

  for (let i = 1; i <= numCells; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.textContent = i;

    //ADD EVENT LISTENER CLICK - COLORO CELLA

    cella.addEventListener("click", function () {
      coloraCella(cella);
    });

    //INSERISCO CELLA IN CONTAINER

    grigliaContainer.appendChild(cella);

    //LINE BREAK PER MANDARE A CAPO OGNI 10 CELLE

    if (i % cellsPerRow === 0) {
      const lineBreak = document.createElement("br");
      grigliaContainer.appendChild(lineBreak);
    }
  }
}

//FUNZIONE COLORA CELLA

function coloraCella(cella) {
  cella.style.backgroundColor = "lightblue";
}
