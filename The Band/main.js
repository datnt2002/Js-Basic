var backgroundImage = [
  "./assets/img/chicago.jpg",
  "./assets/img/img_la.jpg",
  "./assets/img/ny.jpg",
];

var slider = document.querySelector("#slider");

function showImage(array) {
  var i = 0;
  slider.setAttribute("style", `background-image: url(${array[0]})`);
  setInterval(function () {
    if (i < array.length) {
      slider.setAttribute("style", `background-image: url(${array[i]})`);
      i++;
      if (i == array.length) {
        i = 0;
      }
    }
  }, 3000);
}

showImage(backgroundImage);

var cityElement = document.querySelector(".text-content");

var cities = {
  cityName: ["Chicago", "Los Angeles", "New York"],
  cityDes: [
    "Thank you, Chicago - A night we won't forget",
    "We had the best time playing at Venice Beach!",
    "The atmosphere in New York is lorem ipsum.",
  ],
};

function showMessage(object) {
  var i = 0;
  cityElement.innerHTML = `<h2 class="text-heading">${cities.cityName[0]}</h2>
        <p class="text-description">
          ${cities.cityDes[0]}
        </p> `;
  setInterval(function () {
    if (i < object?.cityName.length) {
      cityElement.innerHTML = `<h2 class="text-heading">${cities.cityName[i]}</h2>
        <p class="text-description">
          ${cities.cityDes[i]}
        </p> `;
      i++;
      if (i == object?.cityName.length) {
        i = 0;
      }
    }
  }, 3000);
}
showMessage(cities);

var buttonBuy = document.querySelectorAll(".buy-btn");

function showModal() {
  var html = document.querySelector("html");
  var modalElement = document.querySelector("#ticket-modal");
  modalElement.setAttribute("style", "display: block");
  html.setAttribute("style", "background-color: #ccc;");
}
buttonBuy.forEach((button) => {
  button.onclick = showModal();
});

function hideModal() {
  var html = document.querySelector("html");

  var modalElement = document.querySelector("#ticket-modal");
  html.setAttribute("style", "background-color: white;");
  modalElement.setAttribute("style", "display: none");
}
