/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

function insertionSort(arr = [], result = []) {
  // selects the first element in the array and pushes it into the correct order
  // if arr.length === 0
    // return result;
  // let firstValue = arr.splice(0, 1);
  // if (result.legth === 0)
    // result.push(firstValue);
    // insertionSort(arr, result);
  // iterate through the length of the result array
    // if firstValue > arr[i]
      // let before = arr.slice(0, i);
      // let after = arr.slice(i, result.length - 1);
      // return insertionSort(arr,  [before, after])


}