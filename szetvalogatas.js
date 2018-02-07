let j = 0;
let k = 0;
let innen = [1, 2, -3, -4, 5, -6, 7, -8, 9, -10];
let ide = [];
let is = [];
for (let i = 0; i < innen.length; i++) {
  if (innen[i] < 0) {
    ide[j] = innen[i];
    j += 1;
  } else {
    is[k] = innen[i];
    k += 1;
  }
}

console.log(is);
console.log(ide);
