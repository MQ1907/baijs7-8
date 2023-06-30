let outputArray = [];

function addInteger(number) {
  let inputNumber = number;
  if (typeof inputNumber === "string") {
    inputNumber = inputNumber.split(",");
    for (let i = 0; i < inputNumber.length; i++) {
      inputNumber[i] = +inputNumber[i];
     outputArray.push(inputNumber[i]);
      console.log("output");
    }
  }
 document.getElementById("output").innerHTML = outputArray;
}

function add() {
  let inputNumber = document.getElementById("input-number").value;
  addInteger(inputNumber);
}

// CÂU 1 
function sumArray(){
  let sum = 0
for (let i = 0 ; i < outputArray.length ; i++){
  if(outputArray[i] > 0){
    sum += outputArray[i]
  }
  
}
document.getElementById("output-sum").innerHTML = sum

}


// CÂU 2 
function countArr(){
  let count = 0
  for (let i = 0 ;i < outputArray.length  ; i++ ) {
  if(outputArray[i] > 0 ){
    count += 1 
  }
}
  document.getElementById("output-count").innerHTML = count
}


// CÂU 3 
function minArr() {
  let min = 0
  for ( let i = 0 ; i < outputArray.length ; i++){
    if ( min > outputArray[i]){
      min = outputArray[i]
      min_index = i
    }
  }
  document.getElementById("output-min").innerHTML = min
}


// CÂU 4 
function evenminArr(){
  let evenmin = outputArray[0]
  for(let i = 0 ; i < outputArray.length ; i++){
    if(outputArray[i] > 0 && outputArray[i] < evenmin){
     evenmin = outputArray[i]
      
    }
  }
  document.getElementById("output-evenmin").innerHTML = evenmin
}


//CÂU 5
function evenArr(){
  let even = 0
  for (let i = 0 ; i < outputArray.length ; i++){
    if(outputArray[i]%2 ===0){
      even = outputArray[i]
    }
  }
  document.getElementById("output-even").innerHTML = even
}

// CÂU 6 
function transPositionNumber() {
  // input đầu vào. vì chỉ mục bắt đầu từ 0 nên giá trị đầu vào - 1
  let inputPosition1 = +document.getElementById("transPosition1").value - 1;
  let inputPosition2 = +document.getElementById("transPosition2").value - 1;
  let numberPosition1 = 0;
  let numberPosition2 = 0;

  // gắn thuộc tính chỉ mục đầu vô cho 2 biến
  numberPosition1 = outputArray[inputPosition1];
  numberPosition2 = outputArray[inputPosition2];

  // Điều kiện để 2 position được điền 
  if (
    typeof numberPosition1 !== "undefined" &&
    typeof numberPosition2 !== "undefined"
  ) {
    outputArray.splice(inputPosition1, 1, numberPosition2);

    outputArray.splice(inputPosition2, 1, numberPosition1);
  }

  document.getElementById("output-transPosition").style.background = "#EAECF0";
  document.getElementById("output-transPosition").innerHTML = outputArray;
}





// CÂU 7
function compare2(){
  function compareArr (a,b){
  return a - b  
  }
outputArray.sort(compareArr)
document.getElementById("output-compare").innerHTML = outputArray
}

// CÂU 8 
function isPrime(n){ 
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function firstPrime() {
  let outputInteger = null;

  for (let j = 0; j < outputArray.length; j++) {
    if (isPrime(outputArray[j])) {
      outputInteger = outputArray[j]
      break
    }
  }

  if(outputInteger === null){
    outputInteger = -1
  }
   
  


  document.getElementById("output-firstPrime").style.background = "#EAECF0";
  document.getElementById("output-firstPrime").innerHTML = outputInteger;
}

// CÂU 9 
function enterArray() {
  let inputArray = document.getElementById("enter-array").value;

  if (inputArray != "") {
    // chuyển về mảng
    inputArray = inputArray.split(",");
    // thêm vào mảng có sẵn bằng toán tử ... . Có sử dụng map để ép kiểu dữ liệu về number
    outputArray.push(
      ...inputArray.map((value, index) => {
        return +value;
      })
    );
  }
  let countInte2 = 0
  // tạo vòng lặp đếm số nguyên 
  for (let i = 0; i < outputArray.length; i++) {
    if (outputArray[i] % 1 === 0) {
      countInte2 += 1
    }
    
  }

  document.getElementById("output-enterArray").style.background = "#EAECF0";
  document.getElementById("output-enterArray").innerHTML = `${outputArray} <br>
  Có ${countInte2} số nguyên`;
}

// CÂU 10 
function compareNumber() {
  // tạo array lọc giá trị âm
  let negativeNumber = outputArray.filter((value, index) => {
    return value < 0;
  });
    // tạo array lọc giá trị dương
  let positiveNumber = outputArray.filter((value, index) => {
    return value > 0;
  });
  document.getElementById("output-compareNumber").style.background = "#EAECF0";
  document.getElementById(
    "output-compareNumber"
  ).innerHTML = ` Có ${negativeNumber.length} số âm 
   ${negativeNumber} <br>
  Có ${positiveNumber.length} số dương
  ${positiveNumber}`;
}