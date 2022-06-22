const arr =[];
let cnsctNmbrs = [];

document.addEventListener("keydown", (e) => {
    const valuemap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '-', '*', '/', '+', 'Enter'];
    const keye = valuemap.find(function (i) {
      return i === e.key
    });
    if(keye){
        insertKey(keye);
        calculaterResult(keye)
        result.value += keye;
        result02.value += keye;
    }
})

// 화면에 입력값 받아서 띄우기
function viewResult(to) {
    document.getElementById('result').value = to;
    document.getElementById('result02').value = to;
}
  
// 연속된 숫자 및 연산기호 받아서 arr변수에 담기
function insertKey(keye){
    if (['-', '*', '/', '+', 'Enter'].includes(keye)) {
        arr.push(Number(cnsctNmbrs.join("")), keye);
        cnsctNmbrs = [];
      }else {
        cnsctNmbrs.push(keye);
      }
}

// 입력값에 플러스 or 마이너스가 있는지 확인
function hasPlusminers(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '+' || arr[i] === '-' ){
          return true;
        }
      }
      return false;
}

// 입력값에 곱하기 or 나누기가 있는지 확인
function hasMultiplydivision(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '*' || arr[i] === '/' ){
        }
      }
      return true;
}

// 곱하기 우선 연산 및 곱하기연산
function repeatMultiplydivision(){
    while(true){
        const firstCaseIndex = arr.findIndex((i) => ['*', '/'].includes(i))
            if(firstCaseIndex === -1){
              break;
            }
        let firarr = arr.splice(firstCaseIndex -1 ,3);
        const [fir, op, la] = firarr
        if(hasPlusminers()){      
            arr.push(op === '*' ? fir * la : fir / la);
        }else if(hasMultiplydivision()){
            result = (op === '*' ? fir * la : fir / la);
            viewResult(result)
        }
    }
}

// enter 눌렀을때 연산시작
function calculaterResult(keye){
    if(keye === "Enter"){
        arr.splice(-1,1)
        repeatMultiplydivision();
    }
}