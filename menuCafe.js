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

courses.forEach(function (course, index) {
  console.log(index, course);
});

var isFree = courses.some(function (course, index) {
  return course.coin === 250;
});

var finding = courses.find(function (course, index) {
  return course.name === "Ruby";
});
console.log(finding);

var finding1 = courses.filter(function (course, index) {
  return course.coin !== 0;
});
console.log(finding1);
