// function logger(log) {
//   console.log(log);
// }

// logger("ngu");

// (log) => {
//   console.log(log);
// };

// const sum = (a, b) => a + b;
// const sum1 = (a, b) => ({ a: a, b: b });

// sum(2, 2);

// const course = {
//   name: "Js",
//   getName: () => {
//     return this.name;
//   },
// };

// console.log(course.getName());

// const Course = function (name, price) {
//   this.name = name;
//   this.price = price;
// };

// const jsCourse = new Course("Js", 100);
// console.log(jsCourse);

//Classes
// class Course {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getName() {
//     return this.name;
//   }
// }

//Default param value
// function logger(log = "Gia tri mac dinh") {
//   console.log(log);
// }
// logger(undefined);

//Enhanced object literals
// var name = "javaScript";
// var price = 1000;

// var course = {
//   name,
//   price,
//   getName() {
//     return name;
//   },
// };
// console.log(course.getName());

// var fieldName = "name";
// var fieldPrice = "price";

// const course = {
//   [fieldName]: "Js",
//   [fieldPrice]: 1000,
// };

// console.log(course);

//Destructuring
// var array = ["js", "PHP", "Ruby"];

// var [a, ...rest] = array;

// console.log(rest);

//Spread
// var array = ["js", "Ruby", "PHP"];

// var array2 = ["react", "dart"];

// var array3 = [...array2, ...array];

// console.log(array3);

// var obj1 = {
//   name: "js",
// };

// var obj2 = {
//   price: 1000,
// };

// var obj3 = {
//   ...obj1,
//   ...obj2,
// };
// console.log(obj3);

// var arr = ["js", "php", "ruby"];

// function logger(...rest) {
//   rest.forEach((course) => console.log(course));
// }

// logger(...arr);

//  Tagged template literals
// function highlight([first, ...strings], ...values) {
//   return values
//     .reduce(
//       (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//       [first]
//     )
//     .join("");
// }

// var brand = "F8";
// var course = "js";

// const html = highlight`Hoc lap trinh ${course} tai ${brand}!`;
// console.log(html);

//Modules: import/export
// import logger from "./logger/index";
// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "/constant.js";
// logger("test");

//Optional chaining
// const obj = {
//   name: "Alice",
//   cat: {
//     name: "Dinah",
//     cat2: {
//       name: "Dinah 2",
//       cat3: {
//         name: "Dinah 3",
//       },
//     },
//   },
// };

// if (obj?.cat?.cat2?.cat3) {
//   console.log(obj.cat.cat2.cat3.name);
// }

// function arrToObj(arr) {
//   return arr.reduce(function (obj, item) {
//     obj[item[0]] = item[1];
//     return obj;
//     // var obj[item[0]] =  item[1]
//   }, {});
// }

// // var arrTres = ["1", "2", "3", 4];
// // arrTres.reduce(function (acc, curr) {
// //   console.log(curr);
// // }, 0);
// // console.log(arrTres[2]);

// const obj1 = arrToObj([
//   ["name", "Son Dang"],
//   ["age", 21],
//   ["address", "Ha Noi"],
// ]);
// console.log(obj1);
