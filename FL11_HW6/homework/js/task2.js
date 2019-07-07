let a=parseFloat(prompt('Enter length of a side','5'));
let b=parseFloat(prompt('Enter length of b side','5'));
let c=parseFloat(prompt('Enter length of c side','5'));

if (a+b<=c || b+c<=a ||a+c<=b){
    console.log('Triangle doesn’t exist');
} else{
if(a===b && b===c ){
    console.log('Eequivalent triangle');
} else if(a===b && a!==c || b===c && b!==a ||c===a && c!==b ){
    console.log('Isosceles triangle');
} else{
    console.log('Normal triangle');
}

}



