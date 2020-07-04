/**
 130. Surrounded Regions
 Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. 
Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. 
Two cells are connected if they are adjacent cells connected horizontally or vertically.
*/

/*
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/*
check the first row, last row, first col, last col 4 parts
    if the value of the cell is "O"
        run dfs (update the grid: mark each cell of "O" on the 4 parts and the "O" connect to it to "W" )
loop throught the grid
    if it is "W",  change it  to "O"
    else if it is "O", change it to "X"
*/
var solve = function (grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "O" && (row === 0 || row === grid.length - 1 || col === 0 || col === grid[0].length - 1)) {
        dfs(row, col, grid);
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "W") {
        grid[row][col] = "O";
      } else if (grid[row][col] === "O") {
        grid[row][col] = "X";
      }
    }
  }

  return grid;
};

const dfs = (row, col, grid) => {
  if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1) {
    return;
  }
  if (grid[row][col] === "X" || grid[row][col] === "W") {
    return;
  }
  grid[row][col] = "W";

  dfs(row + 1, col, grid);
  dfs(row - 1, col, grid);
  dfs(row, col + 1, grid);
  dfs(row, col - 1, grid);
};

// let grid = [
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"],
// ];

// let grid = [
//   ["O", "O", "O"],
//   ["O", "O", "O"],
//   ["O", "O", "O"],
// ];

let grid = [
  ["O", "X", "X", "O", "X"],
  ["X", "O", "O", "X", "O"],
  ["X", "O", "X", "O", "X"],
  ["O", "X", "O", "O", "O"],
  ["X", "X", "O", "X", "O"],
];

console.log(solve(grid));
/*
  Answer
  [
    ["O", "X", "X", "O", "X"],
    ["X", "X", "X", "X", "O"],
    ["X", "X", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"],
  ];
  
  */
