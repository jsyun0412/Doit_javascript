var now = new Date();
var firstday = new Date("2019-06-16");

var toNow = now.getTime();
var toFirst = firstday.getTime();
var passedTime = toNow-toFirst;
var passedDay = Math.round(passedTime/(1000*60*60*24));

document.querySelector("#accent").innerText
= "♥"+ passedDay + "일"+"♥";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    var future = toFirst + days*(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var day = someday.getDate();
    document.querySelector("#date"+days).innerText = year+"년"+month+"월"+day+"일";
}
