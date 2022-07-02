let arr  = new Array(3);



//console.log(opsArr);
rev(arr);
//console.log(rev(arr));

function rev(a){

        a[0] = [1,2,100];
        
        a[1] = [2,5,100];
        
        a[2] = [3,4,100];
        
   
  return a.length;


}

console.log(arrayManipulation(arr,5));

function arrayManipulation(tdarr, n){
    let opsArr = new Array(n+2).fill(0);

    tdarr.forEach(([a, b, k]) => {
       
      opsArr[a]+=k;
      opsArr[b+1]= -k;
      
    });
   
    let sum = 0 ;
    let max = -Infinity;

    opsArr.forEach( V =>{
      sum +=V;
      max = Math.max(sum,max);

    });
    return max;
}



