import { timedCall } from "../../include/utils.js";

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * */
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }, () => new Array(n));
  for (let c = 0; c < n; c++) dp[m - 1][c] = 1;
  for (let r = 0; r < m; r++) dp[r][n - 1] = 1;

  for (let r = m - 2; r >= 0; r--)
    for (let c = n - 2; c >= 0; c--) {
      dp[r][c] = dp[r + 1][c] + dp[r][c + 1];
    }

  return dp[0][0];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));

const foo = timedCall(uniquePaths, 100, 100);
console.log(foo);
