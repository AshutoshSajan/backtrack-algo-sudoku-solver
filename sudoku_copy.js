// let board = [
//   <----------x-axis--------->

//   [7, 8, 0, 4, 0, 0, 1, 2, 0], 		// 	^
//   [6, 0, 0, 0, 7, 5, 0, 0, 9], 		// 	|
//   [0, 0, 0, 6, 0, 1, 0, 7, 8], 		// 	|
//   [0, 0, 7, 0, 4, 0, 2, 6, 0], 		// 	|
//   [0, 0, 1, 0, 5, 0, 9, 3, 0], 		// y -axis
//   [9, 0, 4, 0, 6, 0, 0, 0, 5], 		// 	|
//   [0, 7, 0, 3, 0, 0, 0, 1, 2], 		// 	|
//   [1, 2, 0, 0, 0, 7, 4, 0, 0], 		// 	|
//   [0, 4, 9, 2, 0, 6, 0, 0, 7], 		// 	v
// ];

let board = [
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

/*
     Logic To print the " | " for every third value of an array and print all values in one single line

	 e.g.

     [0, 0, 3, 0, 5, 6, 0, 8, 0].map((v, i) => {
         if (i % 3 === 0 && i != 0) {
             return v = "|  " + v;
         } else {
             return v
         }
     }).join("  ");
 */

function printBoard(board) {
  board.forEach((arr, i) => {
    // adding horizontal lines to generate the table
    if (i % 3 === 0 && i !== 0) {
      console.log("- - - - - - - - - - - - - - - -");
    }

    // adding vertical lines to generate the table
    let newArr = arr
      .map((v, i) => {
        if (i % 3 === 0 && i != 0) {
          return (v = "|  " + v);
        } else {
          return v;
        }
      })
      .join("  ");
    console.log(newArr);
  });
}

// function to check the availability of a number in rows, cols, and in 3 * 3 square of a given grid/board of sudoku
// x = x-axis for horizontal rows
// y = y-axis for vertical columns
function possible(y, x, num) {
  // checking the number availability vertically and horizontally in all rows and columns

  for (let i = 0; i < board.length; i++) {
    if (board[y][i] === num || board[i][x] === num) {
      return false;
    }
  }

  // checking the number availability vertically in columns
  // for (let i = 0; i < board.length; i++) {
  //   if (board[y][i] === num) {
  //     return false;
  //   }
  // }

  // // checking the number availability horizontally in rows
  // for (let i = 0; i < board.length; i++) {
  //   if (board[i][x] === num) {
  //     return false;
  //   }
  // }

  let x0 = Math.floor(x / 3) * 3;
  let y0 = Math.floor(y / 3) * 3;

  // checking the number availability in a 3*3 square of the given sudoku grid
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[y0 + i][x0 + j] === num) {
        return false;
      }
    }
  }
  return true;
}

// Recursive backtracking function to solve the sudoku grid
function solve(board) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      if (board[y][x] === 0) {
        for (let n = 1; n < 10; n++) {
          if (possible(y, x, n)) {
            board[y][x] = n;
            solve(board);
            board[y][x] = 0;
          }
        }
        return;
      }
    }
  }
  printBoard(board);
}

// Displaying the unsolved and solved sudoku board
console.log(
  `\n===============================
        Unsolved Board
===============================
`
);

printBoard(board);

console.log(
  `\n\n===============================
        Solved Board
===============================
`
);
solve(board);
