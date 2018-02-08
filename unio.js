let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let unio = [];
for (let i = 0; i < arr.length; i++) {
  unio[i] = arr[i];
}
let k = arr.length;
for (let j = 0; j < arr2.length; j++) {
  let i = 0;
  while (i < arr.length && arr2[j] !== arr[i]) {
    i += 1;
  }
  if (i >= arr.length) {
    unio[k] = arr2[j];
    k += 1;
  }
}
console.log(unio);
