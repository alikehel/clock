let hours = document.querySelector('.hours');
let mins = document.querySelector('.mins');
let secs = document.querySelector('.secs');

let timestamp = Date.now();
let date = new Date(timestamp);
let secsTime = date.getSeconds();
let minsTime = date.getMinutes();
let hoursTime = date.getHours();

let secsRotate = -90 + secsTime * 6;
let minsRotate = -90 + minsTime * 6;
let hoursRotate = -90 + hoursTime * 30;

console.log(secsRotate);
console.log(minsRotate);
console.log(hoursRotate);

secs.style.transform='rotate(' + secsRotate + 'deg)';
mins.style.transform='rotate(' + minsRotate + 'deg)';
hours.style.transform='rotate(' + hoursRotate + 'deg)';

setInterval(function(){
    secsRotate+=6;
    secs.style.transform='rotate(' + secsRotate + 'deg)';
},1000);

setInterval(function(){
    minsRotate+=.1;
    mins.style.transform='rotate(' + minsRotate + 'deg)';
},1000);

setInterval(function(){
    hoursRotate+=.008333333333;
    hours.style.transform='rotate(' + hoursRotate + 'deg)';
},1000);