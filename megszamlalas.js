let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counter = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    counter += +1;
  }
}
console.log(counter);
