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

