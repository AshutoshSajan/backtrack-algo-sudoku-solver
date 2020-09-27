// node js sudoku solving app using nodejs

let grid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

function showGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (i % 3 === 0) {
      console.log("- - - - - - - - - - - - - - - - - -");
    }

    let result = grid[i]
      .map((num, i, arr) => {
        if (i % 3 === 0) {
          return " |   " + num;
        } else if (i === 8) {
          return num + " |   ";
        } else {
          return num;
        }
      })
      .join(" ");
    console.log(result);
  }
  console.log("- - - - - - - - - - - - - - - - - -");
}

function isPossibleToAddNum(grid, col, row, num) {
  grid.forEach((arr, i) => {
    arr.forEach((val) => {
      // check row
      // checking each number of a specific row
      // here grid[y] = [0, 3, 0, 4, 0, 0, 8, 9, 0]
      if (grid[col][i] === num && row !== i) {
        return false;
      }

      // check column
      // checking each number of a specific col
      // here grid[0 to 8] = num, which is a number at a specific index of each array
      if (grid[i][row] === num && col !== i) {
        return false;
      }
    });
  });

  let x0 = Math.floor(col / 3) * 3;
  let y0 = Math.floor(row / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(grid[y0 + i][x0 + j], "grid[y0 + i][x0 + j]");
      if (grid[y0 + i][x0 + j] === num) {
        return false;
      }
    }
  }
  return true;
}

console.log(isPossibleToAddNum(grid, 4, 4, 4));

function solve(gird) { }

showGrid(grid);
