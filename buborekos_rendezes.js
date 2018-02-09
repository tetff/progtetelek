let arr = [13, 246, 675, 123, 643, 8, 12, 63];
for (let i = arr.length; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
