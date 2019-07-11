function formatTime(min){
  const oneDayInMins=1440;
  const oneHourInMins=60;
  let days=0;
  let hours=0
  if (min>oneDayInMins){
    days=parseInt(min/oneDayInMins,10);
    min-=days*oneDayInMins;
  }
  if (min>oneHourInMins){
    hours=parseInt(min/oneHourInMins,10);
    min-=oneHourInMins*hours;
  }
  return `${days} day(s) ${hours} hour(s) ${min} minute(s)  `
}

console.log(formatTime(14442));
console.log(formatTime(63350541));