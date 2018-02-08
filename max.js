let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [45, 896, 358, 564, 24, 6, 842, 845, 8234, 120];

function max (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(max(arr1));
console.log(max(arr2));
