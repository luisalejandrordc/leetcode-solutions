/**
 * @param {Function} fn
 * @param {...any} args
 * @return {any}
 * */
export function timedCall(fn, ...args) {
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return result;
}
