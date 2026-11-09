// Clean test module for Phoenix repository coverage tests: no user input, no sinks.
function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${String(name).trim()}`;
}

module.exports = { add, greet };
