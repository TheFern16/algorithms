/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function factorial(num = 1, result = 1) {
  if (num === 1) {
    return result;
  } else {
    return factorial(num -= 1, result = result * num);
  }
};