/*
*
There are a total of numCourses courses you have to take, labeled from 0 
to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to 
first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, 
is it possible for you to finish all courses?

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. 
             So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to 
             take course 0 you should
             also have finished course 1. So it is impossible.

             Constraints:

The input prerequisites is a graph represented by a list of edges, 
not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0 || prerequisites.length === 1) {
    return true;
  }
  let map = new Map();
  for (let [v, e] of prerequisites) {
    if (map.has(v)) {
      map.set(v, [...map.get(v), e]);
    } else {
      map.set(v, [e]);
    }
  }

  for (let [v, e] of map) {
    let visited = [v];
    let queue = [v];
    while (queue.length > 0) {
      let curr = queue.pop();
      let arrE = map.get(curr);
      if (arrE !== undefined) {
        for (let n of arrE) {
          if (visited.indexOf(n) === -1) {
            queue.push(n);
            visited.push(n);
          }
          if (n === v) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

// let numCourses = 3;
// let prerequisites = [
//   [1, 0],
//   [0, 2],
//   [2, 1],
// ];

// let numCourses = 3;
// let prerequisites = [
//   [1, 0],
//   [2, 0],
//   [0, 2],
// ];

let numCourses = 3;
let prerequisites = [
  [1, 0],
  [1, 2],
  [0, 1],
];

console.log(canFinish(numCourses, prerequisites));
