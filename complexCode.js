/*
Filename: complexCode.js

This code is a complex implementation of a matrix multiplication algorithm.
The algorithm takes two matrices as input and returns their multiplication result.
*/

function multiplyMatrices(matrix1, matrix2) {
  const rowsA = matrix1.length;
  const colsA = matrix1[0].length;
  const rowsB = matrix2.length;
  const colsB = matrix2[0].length;

  if (colsA !== rowsB) {
    throw new Error('Matrices cannot be multiplied!');
  }

  const result = [];
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

// Test matrices
const matrixA = [
  [2, 4, 6],
  [8, 10, 12],
];

const matrixB = [
  [3, 5],
  [7, 9],
  [11, 13],
];

// Perform matrix multiplication
const product = multiplyMatrices(matrixA, matrixB);

// Output the result
console.log('Matrix A:');
console.log(matrixA);
console.log('Matrix B:');
console.log(matrixB);
console.log('Product:');
console.log(product);
// The product matrix should be:
// [[94, 122], [226, 290]]