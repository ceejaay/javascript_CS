const a = [3, 2, 8, 1, 99]
console.log("zero", 99 > 0);


const bubbleSort = (arr) => {
  let itemOne = 0
  let itemTwo = 1
  const length = arr.length - 1;
  let sorting = true;
  // while sorting is true 
  while(sorting) {
    console.log("arr", arr, "one", itemOne, "two", itemTwo)
      if(arr[itemOne] > arr[itemTwo]) {
        [arr[itemOne], arr[itemTwo]] = [arr[itemTwo], arr[itemOne]]
        itemOne += 1
        itemTwo += 1
        console.log("arr itemOne", arr[itemOne])
        console.log("arr itemTwo", arr[itemTwo])
        sorting = true
      } else {
        itemOne += 1
        itemTwo += 1
      }
  }
  return arr;

}


console.log(bubbleSort(a));
