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

/*
 check the cycle of the prerequisite using DFS
    make map to store the vetex and its edeges {v->[]}
    start from v, for each v's edge, 
      if e===v return false
      else map.get(e) to get the edges for each e, if v is in the edges return false
 Basic rule, to throught each child and nested child of a vetex, if the any child == vetex, return false

 */
var canFinish1 = function (numCourses, prerequisites) {
  let map = new Map();
  for (let [v, e] of prerequisites) {
    map.has(v) ? map.set(v, [...map.get(v), e]) : map.set(v, [e]);
  }

  for (let [v, e] of map) {
    let visited = [v];
    let queue = [v];
    while (queue.length > 0) {
      let curr = queue.pop();
      let currE = map.get(curr);
      if (currE !== undefined) {
        for (let p of currE) {
          if (visited.indexOf(p) === -1) {
            queue.push(p);
            visited.push(p);
          }
          if (p === v) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

/******* topilogical  *********/
//count the indegree of earch prerequisite courses put each count to indegree array
//push the courses with no edge into a stack, count++ for each push
//while the stack is not empty
//pop a course from stack as curr,
//loop through
//if pre[i][0] === curr, decrease indegree of indegree[pre[i][1]] by 1
// if indegree[pre[i][1]]===0,
//push indegree[pre[i][1]] into stack
//count++
//return count >= numCourses
var canFinish = function (numCourses, prerequisites) {
  let count = 0;
  let indegree = new Array(numCourses).fill(0);
  let stack = [];

  let map = new Map();
  for (let [v, e] of prerequisites) {
    map.has(e) ? map.set(e, [...map.get(e), v]) : map.set(e, [v]);
  }

  for (let c of prerequisites) {
    indegree[c[0]]++;
  }

  console.log("indegree", indegree);

  indegree.forEach((d, i) => {
    if (d === 0) {
      stack.push(i);
      count++;
    }
  });
  console.log("map", map);
  console.log("count:", count);
  while (stack.length != 0) {
    let curr = stack.pop();
    console.log("curr", curr);
    if (map.has(curr)) {
      let edges = map.get(curr);
      for (let e of edges) {
        indegree[e]--;
        if (indegree[e] === 0) {
          stack.push(e);
          count++;
        }
      }
    }
  }
  return count >= numCourses;
};
// let numCourses = 3;
// let prerequisites = [
//   [1, 0],
//   [0, 2],
//   [2, 1],
// ];

let numCourses = 2;
let prerequisites = [[0, 1]];

// let numCourses = 3;
// let prerequisites = [
//   [1, 0],
//   [2, 0],
//   [0, 2],
// ];

// let numCourses = 3;
// let prerequisites = [
//   [1, 0],
//   [1, 2],
//   [0, 1],
// ];

console.log(canFinish(numCourses, prerequisites));
