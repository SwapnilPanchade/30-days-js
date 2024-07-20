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
  if (b !== 0) {
    return a / b;
  } else {
    console.error("Cannot divide by zero");
    return null;
  }
}

console.log("Add: " + add(5, 3));
console.log("Subtract: " + subtract(5, 3));
console.log("Multiply: " + multiply(5, 3));
console.log("Divide: " + divide(5, 3));

// now writing program for assingment operators

function assignSum(a, b) {
  return (a += b);
}

function assignSub(a, b) {
  return (a -= b);
}

// let's write the script for comparision operator

function comparision(a, b) {
  if (a >= b) {
    return " either a is greater than b or equal to b";
  }
  if (a <= b) {
    return " either a is smaller than b or equal to b";
  }
  if (a == b) {
    return " a is equal to b";
  }
}

//let's find the greater number using ternery operator

function terneryOperator(a, b) {
  return a > b ? a : b;
}

// let's find the greatest number among 3 numbers

function greatestNumber(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}
