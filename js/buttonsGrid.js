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
console.log(numsField);
valueInput.onkeypress = function(event){

if(event.which == 13 || event.keyCode == 13)){
setInterval(function(){
   let i = valueInput.value
   for (i>0; i<valueInput; i--){
     alert("Time remaining" + i)
   }
}, 1000)

}
}


