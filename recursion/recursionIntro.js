//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function countDown(n = 0) {
  while (n > 0) {
  	console.log(n);
  	n -= 1;
  }
}	

//2. Next, try looping just like above except using recursion
function countDownRec(n = 0) {
	if (n > 0) {
		return countDownRec(n -= 1);
	} else {
		console.log(n);
		return
	}
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base = 1, exp = 1) {
	let remainingCycles = exp >= 1 ? exp : 1;
	let remainder = base >= 1 ? exp : 1;
	while(remainingCycles > 0) {
		console.log(remainder);
		remainder = remainder * base;
		remainingCycles--
	}
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base = 1, exp = 1, result = base, cycles = exp) {
	if (cycles > 0) {
		return recursiveExponent(base, exp, result *= base, cycles -= 1)
	} else {
		return result
	}
}


//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr = [], num = 1, index = 0) {
	while (index < arr.length - 1) {
		if (typeof arr[index] === 'number' && isNaN(arr[index]) === false) {
			arr[index] = arr[index] * num;			
		}
		index++;
	}
	return arr;		
}


//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
