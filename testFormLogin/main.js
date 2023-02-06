const $ = document.querySelector.bind(document);

const left = $(".left");
const right = $(".right");

function right1() {
  right.onclick = function () {
    const activeItem = $(".active");
    activeItem.classList.remove("active");
    right.classList.add("active");
  };
}

function left1() {
  left.onclick = function () {
    const activeItem = $(".active");
    activeItem.classList.remove("active");
    left.classList.add("active");
  };
}
