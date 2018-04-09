//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function countDown(number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  }
}

//2. Next, try looping just like above except using recursion
function countDownRec(number) {
  if (number === 0) {
    return `Finished Counting Down`;
  } else {
    console.log(number);
    return countDownRec(number - 1);
  }
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  let currentVal = base;
  let numberOfExpo = 1;
  while (numberOfExpo < expo) {
    currentVal = currentVal * base;
    numberOfExpo++;
  }
  return currentVal;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function exponentRec(base, expo) {
  let result = 1;

  (function rec(currentExp) {
    if (currentExp === 0) {
      return;
    } else {
      result = result * base;
      return rec(currentExp - 1);
    }
  })(expo);

  return result;
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
