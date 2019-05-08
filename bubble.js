const a = [6, 2, 3, 7, 99, 0]
console.log("zero", 99 > 0);


const bubbleSort = (arr) => {
  let itemOne = 0
  let itemTwo = 1
  const length = arr.length - 1;
  let sorting = true;
  while(sorting) {
    while(itemTwo <= length && sorting == true) {
      if(arr[itemOne] > arr[itemTwo]) {
        [arr[itemOne], arr[itemTwo]] = [arr[itemTwo], arr[itemOne]]
        sorting = true;
        itemOne += 1
        itemTwo += 1
      } else {
        itemOne += 1
        itemTwo += 1
        sorting = false
      }
    }
  }
  return arr;

}


console.log(bubbleSort(a));
