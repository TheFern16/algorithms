/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

// [3,7,6,1,2,5,4];
// 3 < 4 ? true
// pivotLoc index 1

// 7 < 4 ? false
// swap 4 with 7
// and then swap 4 with 5
// [3,5,6,1,2,4,7];

// 5 < 4 ? false
// swap 4 with 5
// and then swap 4 with 2

// 2 < 4 ? true
// pivotLocation index 2

// 6 < 4 ? false
// swap 4 with 6
// swap 4 with 1

// is the element in the pivot location less than 4? we can finish

// 1st stack
// partition(arr, low, high)
  // choose last element to pivot // arr[arr.ln] = 4

  // keep track of index of pivotLocation // 0
  // init as low

  // for i, loop from low to high  // 0 to arr.length
    // if current arr[i] <= pivot  // 3 <= 4 ? true
      // swap pivotLocation and i  // nothing happens here
      // increment pivotLocation // pivotLocation++ (now 1);

// 2nd stack
// partition(arr, low, high)
  // choose last element to pivot // arr[arr.ln] = 4

  // keep track of index of pivotLocation // 0
  // init as low

  // for i, loop from low to high  // 0 to arr.length
    // if current arr[i] <= pivot  // 7 <= 4 ? false
      // swap pivotLocation and i  // nothing happens here
      // increment pivotLocation // nothing happens here
    // else
      // save 4 in a variable
      // swap arr[arr.ln-1] with arr[i]
      // move 5 to i, move 4 to arr.ln-1-i;


/*
  [3,7,6,1,2,5,4];
  [3,4,6,1,2,5,7]; arr[pivotLoc] swaped with arr[pivot]
  [3,5,6,1,2,4,7]; arr[pivot was decremented by 1] then swaped with arr[pivotLoc]

  partition(arr, low, high)
    pivotLocation = low
    pivot = high
    loop from low to High
      if (arr[pivotLocation] < pivot)
        pivotLocation++;
      else
        swap arr[pivotLocation] with arr[pivot];
        swap arr[pivot] with
*/
function swap(arr, low, high) {

}

function partition(arr, low, high) {
  var pivot = high;
  var pivotLocation = low;
  for (var i = low; i < high; i++) {
    if (arr[i] <= arr[pivot]) {
      swap(arr, pivotLocation, i);
      pivotLocation++;
    }
  }
}









