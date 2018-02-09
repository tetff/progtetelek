let arr = [13, 246, 675, 123, 643, 8, 12, 63];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  max = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[max]) {
      max = j;
    }
  }
  if (max !== i) {
    let temp = arr[i];
    arr[i] = arr[max];
    arr[max] = temp;
  }
}
console.log(arr);
