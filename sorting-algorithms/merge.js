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





*/