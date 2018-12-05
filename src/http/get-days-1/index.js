let plus = (x, y) => x + y;
let solvePart1 = seq => seq.reduce(plus, 0);

let solvePart2 = seq => {
  let visited = {};
  let plusAndTrack = (x, y) => {
    var sum = plus(x, y);
    if (!!visited[sum]) {
      return { found: sum, sum };
    } else {
      visited[sum] = true;
      return { found: null, sum };
    }
  };

  let result = { found: null, sum: 0 };
  while (result.found === null)
  {
    result = seq.reduce(
      (state, x) => state.found !== null
        ? state
        : plusAndTrack(state.sum, x),
      result);
  }
  return result.found;
};

exports.handler = async function http() {
  var seq = require('./day1.json')
  return {
    type: 'text/html; charset=utf8',
    body: `
    <h1>Day 1</h1>
    Part 1 solution: ${solvePart1(seq)}</br>
    Part 2 solution: ${solvePart2(seq)}
    `
  }
}