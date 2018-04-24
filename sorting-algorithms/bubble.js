/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

function bubbleSort(arr = [], sorted = false) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      sorted = true;
    }
  }

  return sorted === true ? bubbleSort(arr, false) : arr;
}
