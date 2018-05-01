/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

general plan

mergesortRec
  if arr.length === 1 return arr;
  split the array into two halves
  left = arr.slice(0, arr.length / 2);
  right = arr.slice(arr.length / 2)

  sortLeft = split the two halfs again
  sortRight = split the two halfs again

  return whatever is returned from merge

sortAndMerge(left, right)
  // result
  // leftIndex
  // rightIndex
  // base case (while the result length is < the lenght of the two arrays) keep going
    // if the left index === the length of the left array
      // then we know that we have gone through all of the left array
      // therefore we can concat the rest of the right[rightIndex] to the result array
      // this completes the while loop
    // else if the right index === the length of the right array
      // then we know that we have gone through all of the right array
      // therefore we can concat the rest of the left[leftIndex] to the result array
      // this completes the while loop
    // else if left[leftIndex] <= right[rightIndex]
      // push the left value into the result array (we always want the lower value)\
      // increment the leftIndex
      // while loop goes back around
    // else
      // push the right value into the result array (we always want the lower value)
      // increment the rightIndex
      // while loop goes back around


*/
function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  const lSorted = mergeSortRec(left);
  const rSorted = mergeSortRec(right);

  return sortAndMerge(lSorted, rSorted);
}

function sortAndMerge(l, r) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (result.length < (l.length + r.length)) {
    if (leftIndex === l.length) {
      result = result.concat(r.slice(rightIndex));
    } else if (rightIndex === r.length) {
      result = result.concat(l.slice(leftIndex));
    } else if (l[leftIndex] <= r[rightIndex]) {
      result.push(l[leftIndex]);
      leftIndex++;
    } else {
      result.push(r[rightIndex]);
      rightIndex++;
    }
  }

  return result;
}
