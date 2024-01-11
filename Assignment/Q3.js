const sampleArray = [1, 5, 3, 2, 4];

// Sort the array in ascending order
const sortedArray = sampleArray.sort((a, b) => a - b);

// Replace the last value with 'LAST'
sortedArray[sortedArray.length - 1] = 'LAST';

// Console log the output
console.log(sortedArray);