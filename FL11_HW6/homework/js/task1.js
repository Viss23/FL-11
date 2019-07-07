let input=prompt('Enter coordinates of 3 points(a1,a2,b1,b2,c1,c2)','2,2,8,8,5,5');
const amountOfComas=5;
while( input.split(',').length -1 !==amountOfComas){
     input=prompt('You entered incorrect data, please try again. Enter coordinates of 3 points(a1,a2,b1,b2,c1,c2)');
 }
let coordinates=input.split(',');
const a1ArrayIndex=0;
const a2ArrayIndex=1;
const b1ArrayIndex=2;
const b2ArrayIndex=3;
const c1ArrayIndex=4;
const c2ArrayIndex=5;
 let a1=parseFloat(coordinates[a1ArrayIndex]);
 let a2=parseFloat(coordinates[a2ArrayIndex]);
 let b1=parseFloat(coordinates[b1ArrayIndex]);
 let b2=parseFloat(coordinates[b2ArrayIndex]);
 let c1=parseFloat(coordinates[c1ArrayIndex]);
 let c2=parseFloat(coordinates[c2ArrayIndex]);
 const divider=2
 if ( (a1+b1)/divider === c1 && (a2+b2)/divider === c2) {
     console.log(true);
 } else {
     console.log(false);
 }
