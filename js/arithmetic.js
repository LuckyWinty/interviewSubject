// 1. 有一个已经排序的数组，比方[1,4,6,9,11,15,18],给你一个新的数，插入到数组中，写一个function
var insert = (arr,val)=>{
      
  let getIndex = (arr,val)=>{
      let min = 0,max = arr.length - 1,mid;
      while(min <= max){
          mid = (min + max)/2;
          if(arr[mid] > val){
              max = mid - 1;
          }else if(arr[mid] < val){
              min = mid + 1;
          }else{
              return mid;
          }
      } 
      return mid;
  }  
  if(!arr.length || arr[arr.length - 1]==val){
    arr.push(val);
  }else if(arr[0] == val){
    arr.unshift(val);
  }else{
    arr.splice(getIndex(arr,val),0,val)
  }
  return arr;
}
