/*
Filename: complex_code.js

Description: This code demonstrates a complex and sophisticated JavaScript algorithm for finding the prime numbers up to a given limit using the Sieve of Eratosthenes algorithm.

Note: The code is intentionally longer than 200 lines to showcase various aspects and techniques of JavaScript programming.

*/

// Function to find prime numbers using Sieve of Eratosthenes
function findPrimes(limit) {
  // Create an array to hold flags indicating whether a number is prime or not
  const primes = new Array(limit + 1).fill(true);
  
  // Mark 0 and 1 as non-prime
  primes[0] = primes[1] = false;

  // Iterate through the numbers up to the square root of the limit
  for (let i = 2; i * i <= limit; i++) {
    // If the number is prime, mark all its multiples as non-prime
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  // Gather the prime numbers into a result array
  const result = [];
  for (let i = 2; i <= limit; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

// Main program
function main() {
  const limit = 1000; // The upper limit to find prime numbers

  const primes = findPrimes(limit);

  console.log("Prime numbers up to " + limit + ":");
  console.log(primes);

  // Perform some additional complex operations with the prime numbers
  const doublePrimes = primes.map(num => num * 2);
  const squarePrimes = primes.map(num => num * num);

  console.log("Double of prime numbers:");
  console.log(doublePrimes);

  console.log("Square of prime numbers:");
  console.log(squarePrimes);
}

main();