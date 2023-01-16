// var headingNode = document.getElementById("heading");

// console.log({
//   element: headingNode,
// });

// var headingNodes = document.getElementsByTagName("p");
// console.log(headingNodes);

// var headingNode = document.querySelector(".box .heading-2");
// console.log(headingNode);

// var headingNode = document.querySelectorAll(".box .heading-2");
// console.log(headingNode);

// console.log(document.forms["form-2"]);

// var listItems = document.querySelectorAll(".box-1 li");
// console.log(listItems);

// var box = document.querySelector(".box-1");
// var listBox = box.querySelectorAll("li");
// var listBox = box.querySelectorAll("p");

// console.log(listBox);

//DOM attribute
// var heading = document.querySelector("h1");
// console.log(heading);

// // heading.setAttribute("href", "heading");
// console.log(heading.getAttribute("class"));

// var heading = document.querySelector("h1");

// heading.title = "F8 - Học lập trình để đi làm";

// heading.setAttribute("data-title", "F8 - Học lập trình để đi làm");

// var link = document.querySelector("a");
// link.href = "https://fullstack.edu.vn/";

// link.target = "_blank";

// var heading = document.querySelector("h1");
// console.log(heading.innerText);
// console.log(heading.textContent);

//InnerHTML
// var box = document.querySelector(".box");
// console.log(box.outerHTML);
// box.outerHTML;
// var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

// function render(courses) {
//   var list = document.querySelector("ul");
//   var result = "";
//   courses.forEach(function (course) {
//     result += `<li>${course}</li>`;
//   });
//   list.innerHTML = result;
// }
// render(courses);
// var boxElement = document.querySelector(".box");

// boxElement.style.width = "100px";
// boxElement.style.height = "200px";
// boxElement.style.backgroundColor = "green";

// Object.assign(boxElement.style, {
//   width: "100px",
//   height: "500px",
//   backgroundColor: "red",
// });
// var divElement = document.querySelector(".red");
// divElement.style.backgroundColor = "#f00";

// var pElement = document.getElementsByTagName("p");
// console.log(pElement);
// pElement.style.color = "#f05123";

//ClassLít Property
// var divElement = document.querySelector(".box");

// divElement.classList.add("red", "blue");
// console.log(divElement.classList.contains("Blue"));

// setInterval(() => {
//   divElement.classList.toggle("red");
// }, 1000);

// var divElement = document.querySelectorAll("div");
// console.log(divElement);

// divElement.forEach(function (divClass) {
//   divClass.classList.add("box");
// });

//DOM Events
// var h1Element = document.querySelectorAll("h1");
// console.log(h1Element);

// h1Element.forEach(function (h1) {
//   h1.onclick = function (e) {
//     console.log(e.target);
//   };
// });

// var button = document.querySelector("button");
// console.log(button);

// button.onclick = function (e) {
//   button.style.backgroundColor = "#fff";
// };

// var inputvalue;

// // var inputElement = document.querySelector('input[type="checkbox"]');
// var inputElement = document.querySelector("select");
// console.log(inputElement);

// inputElement.onchange = function (e) {
//   // inputvalue = e.target.value;
//   console.log(e.target.value);
// };

// var inputElement = document.querySelector('input[type="text"]');

// inputElement.onkeyup = function (e) {
//   console.log(e.which);
//   switch (e.which) {
//     case 27:
//       console.log("tat");
//       break;
//   }
// };

//preventDefault
// var aElemets = document.querySelectorAll("a");
// console.log(aElemets);

// aElemets.forEach(function (a) {
//   a.onclick = function (e) {
//     if (!e.target.href.startsWith("https://f8.edu.vn")) {
//       e.preventDefault();
//       console.log(e.target.href);
//     }
//   };
// });

// var list = document.querySelector("ul");
// console.log(list);

// list.onmousedown = function (e) {
//   e.preventDefault();
// };

// list.onclick = function (e) {
//   console.log(e.target);
// };

//stopPropagation
// document.querySelector("div").onclick = function () {
//   console.log("DIV");
// };
// document.querySelector("button").onclick = function (e) {
//   e.stopPropagation();
//   console.log("click");
// };

//Events listener
var btn = document.getElementById("btn");

console.log(btn);

function viec1() {
  console.log("Viec 1");
}

btn.addEventListener("click", viec1);

setTimeout(function () {
  btn.removeEventListener("click", viec1);
}, 3000);
