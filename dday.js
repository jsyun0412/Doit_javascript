var now = new Date(); // 오늘 날짜 정보
var firstday = new Date("2019-06-15"); // 처음 만난 날 날짜 정보 
var toNow = now.getTime(); // 오늘 날짜를 밀리초로 바꿈
var toFirst = firstday.getTime(); // 처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst; // 처음 만난 날과 오늘의 차이 (밀리값)
var passedDay = Math.round(passedTime/(1000*60*60*24)); // 밀리초를 날짜 수로 변환한 후 반올림함 
document.querySelector('#accent').innerText = passedDay + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    var future = toFirst + days*(1000*60*60*24); // 처음 만난 날에 100일을 더함 
    var someday = new Date(future); // Date 객체의 인스턴스 생성 
    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var date = someday.getDate();
    document.querySelector('#date'+days).innerText = year + "년" + month + "월" + date + "일";

}
