let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ker = 5;
let i = 0;
while (i < array.length && array[i] != ker) {
    i += 1;
}
if (i < array.length) {
    console.log("Megtalálva!");
} else {
    console.log("Nincs benne!");
}