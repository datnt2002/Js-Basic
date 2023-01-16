// function getTotal(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i].price;
//   }
//   return sum;
// }
//for in: key
//for of: value

//recursion
// var array = ["a", "b", "c", "d", "a", "a", "c"];

// function removeDup(array) {}

// function findUnique(array) {
//   var output = [];
//   for (var i = 0; i < array.length; i++) {
//     if (output.indexOf(array[i]) === -1) {
//       output.push(array[i]);
//     }
//   }
//   return output;
// }
// console.log(findUnique(array));

function giaiThua(n) {
  if (n == 1) return n;
  return n * giaiThua(n - 1);
}

console.log(giaiThua(6));
