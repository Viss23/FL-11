function isInteger(n){
  return n % 1 === 0 && Number(n) === n;
}

console.log(isInteger(4));
console.log(isInteger(4.5));
console.log(isInteger('4'));