let arr = [4, 7, 2, 8, 5, 1, 3, 231, 23, 32];
let min = 0;
for (let i = 0; i < arr.length; i++) {
  min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  if (i !== min) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}
console.log(arr);
