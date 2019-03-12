  var rotate = document.getElementById('btn5')
  let nums = [1,2,3,6,9,8,7,4];
    const ids = [1,2,3,6,9,8,7,4];

    rotate.onclick= function(){
    nums.unshift(nums.pop());
                console.log(nums)

    // for (var i=0; i< nums.length; i++){
    //     document.getElementById("btn"+ids[i]).innerHTML=nums[i];
    // }
    nums.forEach(function(item, index){
document.getElementById("btn"+ids[index]).innerHTML= item;
        console.log(nums)
        console.log(index, item);
            })
console.log(nums)
}  
let cont =0;
var counterB =document.getElementById('counter');

counterB.onclick = function(){
  
  counterB.innerHTML = 'You clicked me ' + cont++ + ' times.' ;
}

let valueInput = document.getElementById('numsField');
let header = document.getElementById('title2')
console.log(numsField);
valueInput.onkeypress = function(event){

if(event.which == 13 || event.keyCode == 13){

  var timing = setInterval(function(){
  valueInput.value--;
  header.innerHTML = valueInput.value;
  console.log(valueInput.value);
 if (valueInput.value === "0"){
   clearInterval(timing);
   alert("Time Is up!")
   header.innerHTML = "Time is Up!";
   valueInput = 0;
 } 
}, 1000)
}
}
var inter,t;
function interval(){
    t=1;
    inter=setInterval(function(){
        document.getElementById("testdiv").innerHTML=t++;
    },1000,"JavaScript");
}
function timeout(){
    clear();
    setTimeout(function(){
        document.getElementById("testdiv").innerHTML="Pasaron 2 segundos antes de que vieras esto.";
    },2000,"JavaScript");
}
function clear(){
    clearInterval(inter);
}


