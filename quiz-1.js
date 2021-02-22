var num1 = parseInt(prompt("첫번째 수를 입력하세요:"));
var num2 = parseInt(prompt("두번째 수를 입력하세요:"));
var result = sumMulti(num1,num2);
function sumMulti(a,b){
    if (a==b) {
        var sum = a*b;
        return sum;
    } else {
        var sum = a+b;
        return sum;
    }
}
document.write(result);