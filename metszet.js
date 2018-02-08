let i = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let metszet = [];
let k = 0;
for (i = 0; i < arr.length; i++) {
  let j = 0;
  while (j < arr2.length && arr2[j] !== arr[i]) {
    j += 1;
  }
  if (j < arr2.length) {
    metszet[k] = arr[i];
    k += 1;
  }
}
console.log(metszet);
