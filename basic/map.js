var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML/Css",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
];

// newCourses = courses.map(function (course, index) {
//   return {
//     id: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     coinText: `Gia: ${course.coin}`,
//     index: index,
//     originArray: courses,
//   };
// });

// console.log(newCourses);

// reduce()
// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   return accumulator + currentValue.coin;
// }

// var totalCoins = courses.reduce(coinHandler, 0);
// console.log(totalCoins);

// var numbers = [100, 200, 200, 220, 480];

// var totalCoins = numbers.reduce(function (total, coin) {
//   return total + coin;
// });

// console.log(totalCoins);

//Flat - lamf phang mang tu depth array
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, Css",
      },
      {
        id: 2,
        title: "JavaScript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      { id: 1, title: "PHP" },
      {
        id: 2,
        title: "Ruby",
      },
    ],
  },
];

var newCourses = topics.reduce(function (coursesFinal, course) {
  return coursesFinal.concat(course.courses);
}, []);

console.log(newCourses);
