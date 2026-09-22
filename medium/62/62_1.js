const DIRECTIONS = [
  [0, 1],
  [1, 0],
];

let count;

/**
 * @param {number} m
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @param {number[][]} memo
 * */
function unique(m, n, x, y, memo) {
  if (memo[x][y] === undefined) {
    let count = 0;
    for (dir of DIRECTIONS) count += unique(m, n, x + dir[0], y + dir[1], memo);
    memo[x][y] = count;
  }
  return memo[x][y];
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * */
var uniquePaths = function (m, n) {
  const memo = Array.from({ length: m }, () => new Array(n));
  for (let c = 0; c < n; c++) memo[m - 1][c] = 1;
  for (let r = 0; r < m; r++) memo[r][n - 1] = 1;
  return unique(m, n, 0, 0, memo);
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(100, 100));
