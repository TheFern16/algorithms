/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
  // reduce the array
    // if array.isArray
      // return res.concat(flatten(arr))
    // else
      // res.concat(val);
      // return res;
  return arr.reduce((res, val) => {
    if (Array.isArray(val)) {
      return res.concat(flatten((val)));
    } else {
      return res.concat(val);
    }
  }, []);
}