function processData(input) {
  // Assign the data array to x variable
  const x = [...input];
  // sort the array ascendant
  const sortedArray = x.sort((a, b) => a - b);
  console.log("Array sorted input", sortedArray);

  // ============================ The Mean
  // Calculate the sum of the values of the array
  const sumX = sortedArray.reduce((a, b) => a + b);
  // Calculate the mean
  const theMean = sumX / x.length;
  console.log("This is the Mean: ", theMean);

  // ============================ The Median
  let medianIndex = 0;
  // If 2n
  if (x.length % 2 === 0) {
    // Find the median number index
    medianIndex = sortedArray.length / 2;
    // Find the median number in the middle of the array
    const medianNumber =
      (sortedArray[medianIndex] + sortedArray[medianIndex - 1]) / 2;
    console.log("This is the Median: ", medianNumber);
  } else {
    // If 2n + 1
    // Find the median number index
    medianIndex = (sortedArray.length - 1) / 2;
    // Find the median number in the middle of the array
    const medianNumber = sortedArray[medianIndex];
    console.log("This is the Median: ", medianNumber);
  }

  // ============================ The Mode

  // Define a function that count the occurrences
  const countOccurrences = (x) => {
    let count = 0;
    for (let num of sortedArray) {
      if (num === x) {
        count++;
      }
    }
    return count;
  };

  // Create an object of numbers with occurrences
  let numberWithOccurrences = {};
  for (let num of sortedArray) {
    numberWithOccurrences = {
      ...numberWithOccurrences,
      [num]: countOccurrences(num),
    };
  }

  const mostOccurItem = (object) => {
    // Turn the values of the object into an array
    const sortedOccurArray = Object.values(object);

    // Turn the keys of the object into an array
    const sortedNumberArray = Object.keys(object);

    // Find the index of the most occurrences
    const mostOccurIndex = sortedOccurArray.indexOf(
      Math.max(...sortedOccurArray)
    );

    // Return the most occurrence number with that index
    return sortedNumberArray[mostOccurIndex];
  };
  const result = mostOccurItem(numberWithOccurrences);
  console.log("This is The Mode: ", result);
  console.log("===============================================");
}

// processData([1, 2, 3, 4, 5, 5]);
// processData([
//   64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060,
// ]);
// processData([64041, 12415, 99233, 49781, 11743, 67060, 51135]);
// processData([1, 2, 3, 4, 4, 5, 6]);
// processData([13, 11, 22, 33, 33, 42, 49, 55, 53, 51, 611]);
processData([1, 2, 3, 4, 4, 5, 6]);

// console.log("10\n23 12 123 3 123 23 465 67 85 73");
// processData("10\n23 12 123 3 123 23 465 67 85 73");
// processData("23 12 123 3 123 23 465 67 85 73");

// MODIFY INPUT IN THE HACKERRANK
const inputX = "10\n23 12 123 3 123 23 465 67 85 73";
// Choose numbers which is not preceded by \n
const regexpNumber = /\b\d+\b(?!\n)/g;
console.log("X by regexp: ", inputX.match(regexpNumber));
const stringInput = inputX.match(regexpNumber);
const numberInput = stringInput.map((num) => +num);
console.log(numberInput);
