let a=parseFloat(prompt('Введіть довжину сторони а','5'));
let b=parseFloat(prompt('Введіть довжину сторони b','5'));
let c=parseFloat(prompt('Введіть довжину сторони c','5'));

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



