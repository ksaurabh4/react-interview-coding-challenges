//Frequency Counter

//-------Problem 1 (anagram)----------
function validAnagram(A, B) {
  if (A.length !== B.length) {
    return false;
  }

  let objA = {};
  let objB = {};
  for (let i = 0; i < A.length; i++) {
    objA[A[i]] = (objA[A[i]] || 0) + 1;
  }

  for (let i = 0; i < B.length; i++) {
    objB[B[i]] = (objB[B[i]] || 0) + 1;
  }
  console.log("check1", Object.keys(objA).length, Object.keys(objB).length);
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }
  console.log("check2", Object.keys(objA).length, Object.keys(objB).length);
  for (let key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  console.log("check3");

  return true;
}

//Test cases

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "pza"));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));

// -------problem 2 (anagram)--------

function sameFrequency(a, b) {
  a = a.toString();
  b = b.toString();
  if (a.length !== b.length) return false;
  let objA = {};
  let objB = {};
  for (let i = 0; i < a.length; i++) {
    objA[a[i]] = (objA[a[i]] || 0) + 1;
  }
  for (let j = 0; j < b.length; j++) {
    objB[b[j]] = (objB[b[j]] || 0) + 1;
  }
  if (Object.keys(objA).length !== Object.keys(objB).length) return false;
  for (let key in objA) {
    if (objA[key] !== objB[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

// ----problem 3 (check duplicates) Frequency method----

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  console.log(collection);
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));

// ----problem 3 (check duplicates) pointers method----

function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
