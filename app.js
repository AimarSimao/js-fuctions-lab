
console.log('sanity check');

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

const isAdult = (number) => {
  if (number >= 18) {
    return 'Adult';
  } else {
    return 'Minor';
  }
}
console.log('Excersie 2 Result:', isAdult(21));

const isCharAVowel= (char) => {
  // Define a list of vowels
  const vowels = 'aeiou';
  // Check if the character is in the list of vowels
  return vowels.includes(char.toLowerCase());
}

// Test the function with the provided example
console.log('Exercise 3 Result:', isCharAVowel("a"));  // Expected output: true


const generateEmail = (person, domain) => {
  return `${person}@${domain}`;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

const greetUser = (human, timeofDay) => {
  //if (timeofDay == 6am-11am) {
    //return 'good morning';
  //} else if (timeofDay == 12pm-5pm) {
   // return 'good afternoon';
  //} else if (timeofDay == 6pm-9pm) {
    //return 'good evening'
  //}
  return `Good ${timeofDay}, ${human}`;
}
console.log('Exercise 5 Result:', greetUser('Sam', 'morning'));

const maxOfThree =(a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

const calculateTip = (billAmount, tipPercentage) => {
  return (billAmount * tipPercentage)/100;
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

const convertTemperature = (temperature, scale) => {
  if (scale === 'C') {
    // Convert Celsius to Fahrenheit
    return (temperature * 9/5) + 32;
  } else if (scale === 'F') {
    // Convert Fahrenheit to Celsius
    return (temperature - 32) * 5/9;
  } else {
    throw new Error('Invalid scale. Use "C" for Celsius or "F" for Fahrenheit.');
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C")); // Should log: 89.6
//console.log('Exercise 8 Result:', convertTemperature(32, "F")); // Should log: 0

const basicCalculator = (num1, num2, operation) => {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    default:
      throw new Error('Invalid operation. Use "add", "subtract", "multiply", or "divide".');
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract')); // Should log: 5
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'add'));      // Should log: 15
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'multiply')); // Should log: 50
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'divide'));   // Should log: 2

console.log('Exercise 3 Result:', isCharAVowel('a'));
console.log('Exercise 3 Result:', isCharAVowel('z'));

console.log(isCharAVowel)

console.log('sanity check')
console.log('Exercise 3 result:', isCharAVowel('i'));