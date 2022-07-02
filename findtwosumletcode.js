/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const myCount= [0,0];

  // anotherArr.sort((a,z) => a-z);
   
   for(let i = 0 ; i < nums.length ; i++){
       for(let j = 0 ; j < nums.length; j++){
           if(i == j)
               continue;
      if(nums[i]+nums[j] == target){ 
      myCount[0] = i;
         myCount[1] = j;
       break;
           }
       }
   }
  return myCount;
};