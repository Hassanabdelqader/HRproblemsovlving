let arr  = new Array(6);


console.log(rev(arr));
//rev(arr);


function rev(a){

    for (let index = 0; index < a.length; index++) {
        a[index] = [2,6,4,9,6,7];
        
    }
  return a;


}

console.log(findMax(arr));

function findMax(a){
    let pigcount = 0;
    let outercounter = 0;

    max = -99;
  

        for (let index = 0; index < 4; index++) {
            
            for (let j = 0; j < 4; j++) {
                //reset the sum
               let sum = 0;
                //set the top
                sum += a[index][index] + a[index][index+1] + a[index]+a[index+2];
                //set the middle
                sum += a[index+1][index+1];
                //set the bottom
                sum += a[index+2][index]+a[index+2][index+1]+a[index+2][index+2];
                outercounter = sum;
             //   max = Math.max(max,sum);
                
            }

        }


  return  outercounter;
}



