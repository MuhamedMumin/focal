const args = process.argv.slice(2);
const num1 = Number(args[0]);
const num2 = Number(args[1]);
let sum = function(num1, num2) {
  return num1 + num2;
};
const result = sum(num1, num2);
console.log(result);
