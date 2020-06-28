/**
 Given a string path, where path[i] = 'N', 'S', 'E' or 'W', 
 each representing moving one unit north, south, east, or west, respectively. 
 You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return True if the path crosses itself at any point, that is, 
if at any time you are on a location you've previously visited. 
Return False otherwise.
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let y = 0;
  let x = 0;
  let visited = new Map();
  visited.set(x, [y]);
  for (let i = 0; i < path.length; i++) {
    switch (path[i]) {
      case "N":
        y++;
        break;
      case "S":
        y--;
        break;
      case "E":
        x++;
        break;
      case "W":
        x--;
        break;
    }

    if (visited.get(x)) {
      if (visited.get(x).indexOf(y) > -1) {
        return true;
      } else {
        visited.set(x, [...visited.get(x), y]);
      }
    } else {
      visited.set(x, [y]);
    }

    console.log("visited", visited);
  }
  return false;
};

//let path = "NESWW";
let path = "NES";
console.log(isPathCrossing(path));
