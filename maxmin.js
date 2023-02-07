function maxMin (arr){
    let minCount = arr[0];
    let maxCount = arr[0];
    for (let i = 0; i<arr.length; i++){
      if (arr[i]>maxCount){
        maxCount = arr[i];
      } else if (arr[i] < minCount){
        minCount = arr[i];
      }
    }
    return [minCount,maxCount]
  }
  console.log(maxMin([2, 4, 1, 0, 2, -1]))