let arr  = [5,7,1,3,5];

console.log(arr);
console.log(rev(arr));
rev(arr);

function rev(a){

   //first Sol
  //return a.reverse(); we can simply use this function 
  
  //second sol
  let tmep = [];
  let count = 0;
  let last = a.length-1;

  a.forEach((v , i , a) =>tmep[count++] = a[last--] );
 
  return tmep;
}