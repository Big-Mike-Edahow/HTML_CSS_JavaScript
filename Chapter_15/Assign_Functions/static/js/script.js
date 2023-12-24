// script.js

console.log("Hoisted: " + add(100, 200));

function add(numOne, numTwo) {
  return numOne + numTwo;
}

let addition = add;
console.log("Assigned: " + addition(32, 64));

let anon = function (numOne, numTwo) {
  let result = numOne + numTwo;
  return result;
};

console.log("Anonymous: " + anon(9, 1));

let iffy = (function () {
  let str = "Self Invoked Output";
  return str;
})();

console.log(iffy);

