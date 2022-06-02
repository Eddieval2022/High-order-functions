const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};
console.log(doMaths(3));
console.log(doMaths(3)(7, multiply));
console.log(doMaths(3)(7, add));
console.log(doMaths(3)(7, subtract));
console.log(doMaths(3)(7, divide));
