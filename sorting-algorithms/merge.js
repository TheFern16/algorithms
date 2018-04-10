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

*/

// LSORTED
// mergeSort(list);
  // base case: if list.length < 2, return;
  // break the list into havles L & R
  // Lsorted = mergeSort(L);
  // Rsorted = mergeSort(R);
  // return merge(Lsorted, Rsorted);

/*
stack trace
// mergeSort(list);
  // base case: if list.length < 2, return; // FALSE
  // break the list into havles L & R [34, 83, 10] [9,1,4];
  // Lsorted = mergeSort(L); [34,83,10];
  // Rsorted = mergeSort(R); [9,1,4];
  // return merge(Lsorted, Rsorted);

// mergeSort(list);
  // base case: if list.length < 2, return; // FALSE
  // break the list into havles L & R // [34] [83,10]
  // Lsorted = mergeSort(L); // [34];
  // Rsorted = mergeSort(R); // [83, 10];
  // return merge(Lsorted, Rsorted); [34] [10, 83] >>> [10,34,82];


// FINAL STACK
// mergeSort(list);
  // base case: if list.length < 2, return;
  // break the list into havles L & R
  // Lsorted = mergeSort(L); [10,34,83]
  // Rsorted = mergeSort(R); [1,4,9]
  // return merge(Lsorted, Rsorted) >>>> [1,4,9,10,43,83]

*/
function mergeSortRec(arr) {
  if (arr.length <= 1) return arr;

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);
  const leftSorted = mergeSortRec(left);
  const rightSorted = mergeSortRec(right);

  return merge(leftSorted, rightSorted);
}

function merge(l, r) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (result.length < (l.length + r.length)) {
    if (leftIndex === l.llength) {
      result = result.concat(r.slice(rightIndex));
    } else if (rightIndex === r.length) {
      result = result.concat(l.slice(leftIndex));
    } else if (l[leftIndex] <= r[rightIndex]) {
      result.push(l[leftIndex++]);
    } else {
      result.push(r[rightIndex++]);
    }
  }

  return result;
}