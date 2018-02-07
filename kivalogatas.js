let j = 0;
let innen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ide = [];
for (let i = 0; i < innen.length; i++) {
  if ((innen[i] % 2) === 0) {
    ide[j] = innen[i];
    j += 1;
  }
}

console.log(ide);
