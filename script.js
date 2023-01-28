//* function sevenBoom(arr) {
//   arr.forEach(() => {
//     return element == 7 ? "Boom!" : "there is no 7 in the array";
//   });
// }

// console.log(sevenBoom([2, 6, 7, 9, 3]));

//* HACKERRANK EXERCICE TWO
/* function compareTriplets(a, b) {
  let firstScore = 0;
  let secondScore = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] < b[i]) {
      firstScore += 0;
      secondScore += 1;
    } else if (a[i] == b[i]) {
      firstScore += 0;
      secondScore += 0;
    } else {
      firstScore += 1;
      secondScore += 0;
    }
  }
  return [firstScore, secondScore];
} */
// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

//* HACKERRANK EXERCICE THREE

// function aVeryBigSum(ar) {
//   const i = 5;
//   console.log(i);
//   return ar.reduce((accumulator, currentValue) => accumulator + currentValue);
// }
// console.log(
//   aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
// );

//* HACKERRANK EXERCICE FORTH
//! MyCode
// function diagonalDifference(arr) {
//   const n = 3;
//   console.log(n);
//   let result;
//   for (let i = 0; i < n; i++) {
//     result = Math.abs(
//       parseInt(arr[0] + arr[4] + arr[8] - (arr[2] + arr[4] + arr[6]))
//     );
//   }

//   return result;
// }

//* Others Code
// function diagonalDifference(arr) {
//   let d1 = 0;
//   let d2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     d1 += arr[i][i];
//     d2 += arr[arr.length - 1 - i][i];
//   }
//   return Math.abs(d2 - d1);
// }
// console.log(diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]));

//* HACKERRANK EXERCICE FIVE
// function staircase(n) {
//   for (let i = 1; i < n; i++) {
//     console.log(" ".repeat(n - i) + "#".repeat(i));
//   }
// }
// staircase(6);

//* HACKERRANK EXERCICE SIX
// function miniMaxSum(arr) {
//   let min = 0;
//   let max = 0;

//   if (arr[1] === arr[2]) {
//     arr.pop();
//     let equals = arr.reduce(
//       (accumilator, currentValue) => accumilator + currentValue
//     );
//     console.log(equals + " " + equals);
//   } else {
//     max = arr
//       .filter((e) => e != Math.max(...arr))
//       .reduce((accumilator, currentValue) => accumilator + currentValue);
//     min = arr
//       .filter((e) => e != Math.min(...arr))
//       .reduce((accumilator, currentValue) => accumilator + currentValue);

//     console.log(min + " " + max);
//   }
// }
// miniMaxSum([5, 1, 5, 5, 5]);\\

//* HACKERRANK EXERCICE SEVEN
