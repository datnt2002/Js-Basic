var courses = [
  { name: "JavaScript", coin: 980, isFinish: false },
  { name: "PHP", coin: 680, isFinish: false },
  { name: "Ruby", coin: 980, isFinish: false },
];

// Array.prototype.map2 = function (callback) {
//   var arrLength = this.length;
//   var output = [];
//   for (var i = 0; i < arrLength; i++) {
//     var result = callback(this[i], i, this);
//     output.push(result);
//   }
// };

// courses.map2(function (course, index) {
//   return `<h2>${course}</h2>`;
// });

//forEach
// Array.prototype.forEach2 = function (callback) {
//   for (var i in this) {
//     if (this.hasOwnProperty(i)) {
//       callback(this[i], i, this);
//     }
//   }
// };

// courses.forEach2(function (course, index, array) {
//   console.log(course, index, array);
// });

//filter
// Array.prototype.myFilter = function (callback) {
//   var output = [];
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }
//   return output;
// };

// var result = courses.myFilter(function (course, index) {
//   return course.coin > 700;
// });
// console.log(result);

//some()
// Array.prototype.mySome = function (cb) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (cb(this[index], index)) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// var result = courses.mySome(function (course, index) {
//   return course.coin > 500;
// });
// console.log(result);

//every()
Array.prototype.myEvery = function (cb) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (cb(this[index], index, this)) {
        output.push(true);
      }
      if (output.length === this.length || output.length === 0) {
        return true;
      }
    }
  }
  return false;
};

var result = courses.myEvery(function (course, index, arr) {
  return course.coin > 700;
});
console.log(result);
