function getNumbers(inputString){
  let array=inputString.split('');
  let result=[];
  for (let i=0;i<array.length;i++){
    let j=parseInt(array[i]);
    if (!isNaN(j)) {
      result.push(j);
    }
  }
  return result;
  }

  console.log(getNumbers('dsfds1fds232'));

function findTypes(){
  let result={}
  for (let i=0;i<arguments.length;i++){
    switch(typeof arguments[i]){
      case 'number':
        if(result.hasOwnProperty('number')){
          result['number']+=1;
        }else {
          result['number']=1;
        }
        break;
      case 'string':
        if(result.hasOwnProperty('string')){
          result['string']+=1;
        }else {
          result['string']=1;
        }
        break;
      case 'boolean':
        if(result.hasOwnProperty('boolean')){
          result['boolean']+=1;
        }else {
          result['boolean']=1;
        }
        break;
      case 'undefined':
        if(result.hasOwnProperty('undefined')){
          result['undefined']+=1;
        }else {
          result['undefined']=1;
        }
        break;
      case 'object':
            if(result.hasOwnProperty('object')){
              result['object']+=1;
            }else {
              result['object']=1;
            }
        break;
      case 'symbol':
        if(result.hasOwnProperty('symbol')){
          result['symbol']+=1;
        }else {
          result['symbol']=1;
        }
        break;
        default:result['unknowntype']='ERROR';
        break;
        
    }
    
  }
  return result;
}
const testValue=5;
console.log(findTypes(null,testValue,'hello','34'));

function executeForEach(arr,fun){
  for (let i=0;i<arr.length;i++){
      fun(arr[i]);
  }
}


function mapArray(arr, fun) {
  let result = [];
  executeForEach(arr, function (i) {
    result.push(fun(i));
  });
  return result;
}

function filterArray(arr, fun) {
  let result = [];
  executeForEach(arr, function (i) {
    if (fun(i)) {
      result.push(i);
    }
  });
  return result;
}

function showFormattedDate(date){
  const beginSlice=3;
let result= date.toDateString().slice(beginSlice);
return `Date: ${result}`
}

function canConvertToDate(date) {
  date= new Date(date);
 let dateStr= date.toString()
  return dateStr!=='Invalid Date';
}

function daysBetween(date1,date2){
  const msecInOneDay=86400000;
  let differenceInMsec=date2-date1;
   return Math.round(differenceInMsec/msecInOneDay);
}

function getAmountOfAdultPeople(data){
  const leapYearDivider=4;
  const commonYearDivider=100;
  const leapYearDivider2=400;
  let currentDate=new Date().getFullYear();
  let amountOfLeapsYear=0;
  for(let i=18;i!==0;i--){
    currentDate--
  if(currentDate%leapYearDivider===0 && currentDate%commonYearDivider!==0){
      amountOfLeapsYear+=1;
    } else if (currentDate %leapYearDivider2===0){
      amountOfLeapsYear+=1;
    }
 }
 let amountsDaysTo18YearsWithoutLeapDays=6570;
let amountsDaysTo18Years= amountsDaysTo18YearsWithoutLeapDays+amountOfLeapsYear;
 let filteredData=filterArray(data,(elem) => {
return daysBetween(Date.parse(elem[' birthday ']),Date.now())>amountsDaysTo18Years;
 })
 return filteredData.length;
}

function keys(obj){
  let arr=[];
  for (let i in obj){
    if (obj.hasOwnProperty(i)){
      arr.push(i);
    }
  }
return arr; 
}

function values(obj){
  let arr=[];
  for (let i in obj){
    if (obj.hasOwnProperty(i)){
      arr.push(obj[i]);
  }
}
return arr;
}
