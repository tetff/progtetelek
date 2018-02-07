let j = 0;
let k = 0;
let innen = [1, -2, -3, -4, 5, -6, 7, -8, 9, -10];
let pozitiv = [];
let negativ = [];
for (let i = 0; i < innen.length; i++) {
  if (innen[i] < 0) {
    negativ[j] = innen[i];
    j += 1;
  } else {
    pozitiv[k] = innen[i];
    k += 1;
  }
}

console.log(pozitiv);
console.log(negativ);
