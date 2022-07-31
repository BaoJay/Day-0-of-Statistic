function processData(input) {
  //Enter your code here

  // The Mean
  const x = [...input];
  console.log(x);
  const sumX = x.reduce((a, b) => a + b);
  //   console.log(sumX);
  const theMean = sumX / x.length;
  console.log("This is the Mean: ", theMean);

  // The Median
  let medianIndex = 0;
  // If 2n
  if (x.length % 2 === 0) {
    // sort the array ascendant: tăng dần
    const sortedArray = x.sort((a, b) => a - b);
    console.log(sortedArray);
    medianIndex = sortedArray.length / 2;
    const medianNumber =
      (sortedArray[medianIndex] + sortedArray[medianIndex - 1]) / 2;
    console.log("This is the Median: ", medianNumber);
  } else {
    // If 2n + 1
    // sort the array ascendant: tăng dần
    const sortedArray = x.sort((a, b) => a - b);
    console.log(sortedArray);
    medianIndex = (sortedArray.length - 1) / 2;
    const medianNumber = sortedArray[medianIndex];
    console.log("This is the Median: ", medianNumber);
  }
}

// processData([1, 2, 3, 4, 5, 5]);
// processData([
//   64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060,
// ]);
processData([64041, 12415, 99233, 49781, 11743, 67060, 51135]);
