var itemList = []; // 빈 배열 생성 
var addBtn = document.querySelector('#add') //#add인 요소를 가져와 addBtn으로 저장 
addBtn.addEventListener("click",addList); //addBtn을 클릭하면 addList 함수 실행 

function addList(){ //항목을 추가하는 함수 
    var item = document.querySelector('#item').value; //텍스트 필드 내용 가져옴 
    if (item != null){
        itemList.push(item); // itemList 배열 끝에 item 추가 
        document.querySelector('#item').value=""; //id="item"인 요소 값 지움 (텍스트 필드 비우기)
        document.querySelector('#item').focus(); // 텍스트 필드에 focus()함수 적용 -> 텍스트 필드 안에 커서 갖다놓음
    }
    showList(); //목록을 표시하는 showList() 함수 실행 
}

function showList(){ //목록을 화면에 표시하는 함수
    var list ="<ul>"; // list 변수에 <ul>태그 저장 
    for (var i = 0; i<itemList.length;i++){ //배열 요소마다 반복
        list += "<li>" + itemList[i] + "<span class='close' id="+i+">X</span></li>"; // 각 요소를 <li>~</li>로 묶음
    }
    list += "</ul>" //목록을 끝내는 </ul> 태그 저장 

    document.querySelector('#itemList').innerHTML = list; //list 변숫값 표시

    var remove = document.querySelectorAll(".close"); //삭제 버튼을 변수로 저장, 배열형태가 됨 

    for(var i=0; i<remove.length; i++){ // remove 배열의 모든 요소 확인
        remove[i].addEventListener("click",removeList); // 요소를 클릭하면 removeList() 실행
    }
}

function removeList(){ // 삭제 
    var id = this.getAttribute("id"); // this(누른 삭제 버튼)의 id값을 가져와서 id 변수에 저장함
    itemList.splice(id,1); // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
    showList(); // 변경된 itemList 배열을 다시 화면에 표시 
}