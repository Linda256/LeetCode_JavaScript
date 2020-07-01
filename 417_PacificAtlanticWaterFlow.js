/**
 *
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, 
the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.

/*
Better Explaination
On a given 2-d array
Moving only up, down, left, or right
Advancing only to positions with values the same or lower as the current position value
Return All points where BOTH:
A path to the top || left sides of the 2-d array can be achieved
A path to the right || bottom sides of the 2-d array can be achieved

Explanation of solution array (using shortest paths):

[0, 4], value 5 -- Path to Pacific (Up) -- Path to Atlantic (Right)
[1, 3], value 4 -- Path to Pacific (Up, Up) -- Path to Atlantic (Right, Right)
[1, 4], value 4 -- Path to Pacific (Left, Up, Up) -- Path to Atlantic (Right)
[2, 2], value 5 -- Path to Pacific (Up, Up, Up) or (Left, Left, Left) -- Path to Atlantic (Right, Right, Right) or (Down, Down, Down)
[3, 0], value 6 -- Path to Pacific (Left) -- Path to Atlantic (Down, Down)
[3, 1], value 7 -- Path to Pacific (Left, Left) -- Path to Atlantic (Down, Down)
[4, 0], value 5 -- Path to Pacific (Left) -- Path to Atlantic (Down)
  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic


Points of discussion:

Points like [3, 4] with value 5 aren't included because water can flow to either the bottom or right sides of the map, but water going up or left eventually hits a wall and never is able to reach the Pacific Ocean.
IF point [1, 3] with value 4 was changed to a value of 3, then it would act like passage through the "ridge line" allowing many more points to reach the Pacific, and the solution array would be: [[0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 2], [2, 3], [3, 0], [3, 1], [3, 3], [3, 4], [4, 0]]

*/
/*
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  if (matrix.lenght === 0) {
    return [];
  }
  let pacific = [];
  let atlantic = [];

  for (let i = 0; i < matrix.length; i++) {
    pacific[i] = Array(matrix[0].length).fill(0);
    atlantic[i] = Array(matrix[0].length).fill(0);
  }

  //call dfs only from the oceans(top row, bottom row, left col, right col of the matrix)
  for (let col = 0; col < matrix[0].length; col++) {
    dfs(matrix, 0, col, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, matrix.length - 1, col, Number.MIN_SAFE_INTEGER, atlantic);
  }

  for (let row = 0; row < matrix.length; row++) {
    dfs(matrix, row, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, row, matrix[0].length - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (pacific[i][j] === 1 && atlantic[i][j] === 1) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

function dfs(matrix, row, col, preVal, ocean) {
  //1. check in the boundary
  if (row < 0 || col < 0 || row > matrix.length - 1 || col > matrix[0].length - 1) {
    return;
  }
  if (matrix[row][col] < preVal) {
    return;
  }
  if (ocean[row][col] === 1) {
    return;
  }
  //2. process clell:
  //   Mark the ocean cell to 1 as reachable from that ocean to anothe ocean
  ocean[row][col] = 1;
  //3. call dfs as needed
  dfs(matrix, row - 1, col, matrix[row][col], ocean);
  dfs(matrix, row + 1, col, matrix[row][col], ocean);
  dfs(matrix, row, col - 1, matrix[row][col], ocean);
  dfs(matrix, row, col + 1, matrix[row][col], ocean);
}

let matrix = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

console.log(pacificAtlantic(matrix));
