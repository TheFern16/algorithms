//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function countDown(num = 0) {
  while (num > 0) {
    console.log(num);
    num--;
  }
}

//2. Next, try looping just like above except using recursion
function countDownRec(num = 0) {
  console.log(num);
  return num === 0 ? num : countDownRec(num-1);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base = 1, exp = 1) {
  let result = 1;
  while(exp > 0) {
    result = base * result;
    exp--;
  }

  return result;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function exponentRec(base = 1, exp = 1, result = 1) {
  return exp === 0 ? result : exponentRec(base, exp - 1, result * base);
}


//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

