let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];
let results;

// Bizzare Functions

function includes1to9(subsection) {
  const numberLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let currentNum = 0;
  let results = 0;
  for (i = 0; i < numberLine.length; i++) {
    currentNum = subsection[i];
    if (!numberLine.includes(subsection[i])) {
      return false;
    } else {
      numberLine.splice(numberLine.indexOf(currentNum), 1);
    }
  }
  return true;
}
function getRow(puzzle, rowIndex) {
  let currentRow = puzzle[rowIndex];
  console.log(currentRow);
  return currentRow;
}
function getColumn(puzzle, colIndex) {
  let currentCol = [];
  for (let i = 0; i < 9; i++) {
    currentCol.push(puzzle[colIndex][i]);
  }
  return currentCol;
}
function getSection(puzzle, xVal, yVal) {
  let currentSection = [];
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      currentSection.push(puzzle[yVal * 3 + i][xVal * 3 + j]);
    }
  }
  return currentSection;
}

function sudokuIsValid(puzzle) {
  for (let l = 0; l < 9; l++) {
    if (!includes1to9(getRow(puzzle, l))) {
      return false;
    }
  }

  for (let k = 0; k <= 8; k++) {
    if (!includes1to9(getColumn(puzzle, k))) {
      return false;
    }
  }
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      if (!includes1to9(getSection(puzzle, i, j))) {
        return false;
      }
    }
  }
  return true;
}
console.log(sudokuIsValid(puzzle));
