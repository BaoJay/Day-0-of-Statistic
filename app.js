function processData(input) {
  //Enter your code here

  // ============================ The Mean
  const x = [...input];
  const sortedArray = x.sort((a, b) => a - b);
  console.log("Array sorted input", sortedArray);
  // console.log(sortedArray);
  const sumX = sortedArray.reduce((a, b) => a + b);
  //   console.log(sumX);
  const theMean = sumX / x.length;
  console.log("This is the Mean: ", theMean);

  // ============================ The Median
  let medianIndex = 0;
  // If 2n
  if (x.length % 2 === 0) {
    // sort the array ascendant: tăng dần
    
    medianIndex = sortedArray.length / 2;
    const medianNumber =
      (sortedArray[medianIndex] + sortedArray[medianIndex - 1]) / 2;
    console.log("This is the Median: ", medianNumber);
  } else {
    // If 2n + 1
    // sort the array ascendant: tăng dần

    medianIndex = (sortedArray.length - 1) / 2;
    const medianNumber = sortedArray[medianIndex];
    console.log("This is the Median: ", medianNumber);
  }

  // ============================ The Mode
  
  
  const countOccurrences = (x) => {
    let count = 0;
    for ( let num of sortedArray ) {
      if(num === x) {
        count++;
      }
    }
    return count;
  }
  
  let numberWithOccurrences = {};
  for (let num of sortedArray) {
    numberWithOccurrences = {
      ...numberWithOccurrences,
      [num]: countOccurrences(num)
    }
  }
  
  
  // Convert into array
  
  
  const mostOccurItem = (object) => {
    const sortedOccurArray = Object.values(object)
    // console.log("Max number is: ",Math.max(...sortedOccurArray))
    
    const sortedNumberArray = Object.keys(object)
    // console.log("sorted Occur Array: ", sortedOccurArray)
    // console.log("sorted Number Array:",sortedNumberArray)
    const mostOccurIndex = sortedOccurArray.indexOf(Math.max(...sortedOccurArray))

    return sortedNumberArray[mostOccurIndex]
  }
  const result = mostOccurItem(numberWithOccurrences)
  console.log("This is The Mode: ",result)

  console.log("===============================================")
}

// processData([1, 2, 3, 4, 5, 5]);
// processData([
//   64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060,
// ]);
processData([64041, 12415, 99233, 49781, 11743, 67060, 51135]);
processData([1, 2, 3, 4, 4, 5, 6]);
processData([13, 11, 22, 33, 33, 42, 49, 55, 53, 51, 611]);