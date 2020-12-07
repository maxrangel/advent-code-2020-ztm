// Import data (number[])
const data = require('./data.js');

// Loop the data to find numbers that sum 2020
let result = 0;

data.forEach(numA => {
  data.forEach(numB => {
    data.forEach(numC => {
      // Multiply the numbers if sum of numA and numB is 2020
      if (numA + numB + numC === 2020) {
        result = numA * numB * numC;
      }
    });
  });
});

// Once the loop is done, print the final result
console.log(result);
