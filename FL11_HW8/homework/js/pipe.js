function addOne(x) {
  return x + 1;
}

function pipe(number){
  for(let i=1;i<arguments.length;i++){
    number=arguments[i](number);
  }
  return number
}

console.log(pipe(2,addOne,addOne));