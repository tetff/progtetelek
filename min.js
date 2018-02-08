let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [45, 896, 358, 564, 24, 6, 842, 845, 8234, 120];

function min (arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
console.log(min(arr1));
console.log(min(arr2));
