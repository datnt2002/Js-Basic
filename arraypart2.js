//forEach
// courses.forEach(function (course, index) {
//   console.log(course);
// });
//every()
// var isFree = courses.every(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);
//
//some()
// var isFree = courses.some(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);

//find()
// var findingCourse = courses.find(function (course, index) {
//   return course.name === "PHP";
// });

// console.log(findingCourse);

//filter()
// var filterCourses = courses.filter(function (course, index) {
//   return course.coin === 0;
// });

// console.log(filterCourses);

// //map()
// var courses = [
//   {
//     id: 1,
//     name: "javaScript",
//     coin: 250,
//   },
//   {
//     id: 2,
//     name: "HTML, CSS",
//     coin: 0,
//   },
//   {
//     id: 3,
//     name: "PHP",
//     coin: 400,
//   },
//   {
//     id: 1,
//     name: "Java",
//     coin: 0,
//   },
//   {
//     id: 5,
//     name: "React",
//     coin: 1000,
//   },
// ];
// courses.map(function (course, index, originArray) {
//   course.name = `Khoa hoc ${course.name}`;
//   course.coinText = `Gia ${course.coin}`;
//   return course;
// });
// // var newCourses = courses.map(function (course, index, originArray) {
// //   return {
// //     id: course.id,
// //     name: `Khoa hoc ${course.name}`,
// //     coin: course.coin,
// //     coinText: `Gia ${course.coin}`,
// //   };
// // });
// console.log(newCourses);

// console.log(courses);

//reduce
// var totalCoins = courses.reduce(function (
//   accumulator,
//   currentValue,
//   currentIndex,
//   originArray
// ) {
//   return accumulator + currentValue.coin;
// },
// 0);
// console.log(totalCoins);

//Flat- lam phang mang Depth array
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function (arr, currentValue) {
//   return arr.concat(currentValue);
// }, []);
// console.log(flatArray);

// //Lay ra cac khoa hoc dua vao mang moi
// var topics = [
//   {
//     topic: "Frontend",
//     courses: [
//       { id: 1, title: "HTML" },
//       {
//         id: 2,
//         title: "JS",
//       },
//     ],
//   },
//   {
//     topic: "Backend",
//     courses: [
//       { id: 1, title: "PHP" },
//       {
//         id: 2,
//         title: "NodeJS",
//       },
//     ],
//   },
// ];

// var newCourses = topics.reduce(function (course, topic) {
//   return course.concat(topic.courses);
// }, []);
// console.log(newCourses);
// Array.prototype.reduce2 = function (callback, result) {
//   var i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// var numbers = [1, 2, 3, 4, 5];

// var result = numbers.reduce2((total, number) => {
//   return total + number;
// });

// console.log(result);
function arrToObj(arr) {
  return arr.reduce(function (output, currentValue) {
    output[currentValue[0]] = currentValue[1];
    return output;
  }, {});
}

// Expected results:
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
