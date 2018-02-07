var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function osszegzes() {
    let summ = 0;
    for (i = 0; i <= array.length-1; i++) {
        summ += array[i];
    }
    return summ;
}
console.log(osszegzes());