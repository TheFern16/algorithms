//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function countDown(n = 0) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

//2. Next, try looping just like above except using recursion
function countDownRec(n = 0) {
  if (n === 0) {
    return n;
  } else {
    console.log(n);
    return countDownRec(n - 1);
  }
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base = 0, exp = 0, result = 1) {
  while (exp > 0) {
    result = result * (base);
    exp--;
  }
  return result;
}


//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function exponentRec(base = 0, exp = 0, result = 1) {
  if (exp === 0) {
    return result;
  } else {
    return exponentRec(base, exp - 1, result * base);
  }
}


//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr = [], num = 1, index = 0) {
  while (arr.length - 1 > index) {
    arr[index] = arr[index] * num;
    index++;
  }

  return arr;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
