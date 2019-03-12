let elem = document.getElementById("res");
let operator='';
let res;

function clickZero(){
    elem.innerHTML +='0';
}
function clickOne(){
    elem.innerHTML += '1';
}

function clickClr(){
    elem.innerHTML = "";
}
function clickEql(){
    let [num1, num2] = elem.innerText.split(operator);
    
    switch(operator){
        case '+':
            res=doSum(num1,num2);
            break;
        case '-':
            res=doSub(num1,num2);
            break;
        case '*':
            res=doMul(num1,num2);
            break;
        case '/':
            res=doDiv(num1,num2);
            break;
        default: console.log("something");
    }
    
    elem.innerHTML = res;
}
function clickSum(){
    operator = '+';
    elem.innerHTML += "+";
}
function clickSub(){
    operator = '-';
    elem.innerHTML += "-";
}
function clickMul(){
    operator = '*';
    elem.innerHTML += "*";
}
function clickDiv(){
    operator = '/';
    elem.innerHTML += "/";
}

function doSum(num1,num2){
    return convertToBinary(convertToDecimal(num1) + convertToDecimal(num2));
}
function doSub(num1,num2){
    return convertToBinary(convertToDecimal(num1) - convertToDecimal(num2));
}
function doMul(num1,num2){
    return convertToBinary(convertToDecimal(num1) * convertToDecimal(num2));
}
function doDiv(num1,num2){
    return convertToBinary(convertToDecimal(num1) / convertToDecimal(num2));
}
function convertToDecimal(num){
    return parseInt(num,2);
  
    
    // let numParts=num.split('');
    // numParts.reverse();
    // numParts=numParts.map(item=>parseInt(item));
    // return numParts.reduce((total,item, index)=>total+=(item * 2**index));
}
function convertToBinary(num){
    return num.toString(2);
}