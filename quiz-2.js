var num1 = parseInt(prompt("비교할 첫 번째 숫자:"));
var num2 = parseInt(prompt("비교할 두 번째 숫자:"));
var result = which_is_bigger(num1,num2);
function which_is_bigger(a,b){
    if(a>b){
        alert(a+"가"+b+"보다 큽니다.");
    } else{
        alert(b+"가"+a+"보다 큽니다.");
    }
}
