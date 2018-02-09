let arr = [13, 246, 675, 123, 643, 8, 12, 63, 888];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j <= arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
