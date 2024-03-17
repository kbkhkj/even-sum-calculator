// index.js

function calculateEvenSum(array) {
    let sum = 0;
    for (let num of array) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenSum = calculateEvenSum(numbers);
  console.log(`Sum of even numbers in the array:`, evenSum);
  