/**
 * Simple Calculator Module
 * Practice project for learning Git/GitHub workflows
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Main execution
function main() {
  console.log("=== Simple Calculator ===");
  console.log(`5 + 3 = ${add(5, 3)}`);
  console.log(`10 - 4 = ${subtract(10, 4)}`);
  console.log(`6 * 7 = ${multiply(6, 7)}`);
  console.log(`20 / 4 = ${divide(20, 4)}`);
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, power };
