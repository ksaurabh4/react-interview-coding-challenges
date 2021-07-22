//using 2 pointers (Input array must be sorted)

function countUniqueValues(P) {
  if (P.length === 0) {
    return 0;
  }
  let i = 0;
  for (var j = 1; j < P.length; j++) {
    if (P[i] !== P[j]) {
      i++;
      P[i] = P[j];
    }
  }
  return i + 1;
}

//test case
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 6, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-1, -2, -2, -3, 0, 1]));
