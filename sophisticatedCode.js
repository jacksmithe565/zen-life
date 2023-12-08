/********** 
 * Filename: sophisticatedCode.js
 * Description: A complex and elaborate JavaScript code showcasing various advanced concepts and techniques.
 **********/

// Utility function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

// Class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex) {
    const real = this.real + complex.real;
    const imaginary = this.imaginary + complex.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  multiply(complex) {
    const real = this.real * complex.real - this.imaginary * complex.imaginary;
    const imaginary = this.real * complex.imaginary + this.imaginary * complex.real;
    return new ComplexNumber(real, imaginary);
  }
}

// Fibonacci sequence generator using recursion and memoization
function fibonacci(n, memo = {}) {
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Custom error class for handling exceptional situations
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = 'CustomError';
    this.errorCode = errorCode;
  }
}

// Function to test throwing a custom error
function testCustomError() {
  try {
    throw new CustomError('Something went wrong!', 500);
  } catch (error) {
    console.error(`Error (${error.errorCode}): ${error.message}`);
  }
}

// Promisify setTimeout to create a promise-based timer
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Example async function using delay
async function exampleAsyncFunction() {
  console.log('Starting async function...');
  await delay(2000);
  console.log('Async function completed!');
}

// Usage example
console.log('Testing some advanced JavaScript features:');
console.log(`Is 17 a prime number? ${isPrime(17)}`);
console.log(`Is 50 a prime number? ${isPrime(50)}`);

const complex1 = new ComplexNumber(3, 4);
const complex2 = new ComplexNumber(1, 2);
console.log(`Adding complex numbers: ${complex1.add(complex2).real} + ${complex1.add(complex2).imaginary}i`);

console.log(`Fibonacci number at position 10: ${fibonacci(10)}`);

testCustomError();

exampleAsyncFunction().then(() => console.log('Async function executed successfully!'));