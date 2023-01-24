var tabItems = document.querySelectorAll(".tab-item");
var panes = document.querySelectorAll(".tab-pane");
var tabCurrentActive = document.querySelector(".tab-item.active");
var line = document.querySelector(".line");
line.style.left = tabCurrentActive.offsetLeft + "px";
line.style.width = tabCurrentActive.offsetWidth + "px";

function tabClick() {
  tabItems.forEach(function (item, index) {
    const pane = panes[index];
    item.onclick = function () {
      var tabActive = document.querySelector(".tab-item.active");
      var paneActive = document.querySelector(".tab-pane.active");
      tabActive.classList.remove("active");
      paneActive.classList.remove("active");
      item.classList.add("active");
      pane.classList.add("active");
      var tabCurrentActive = document.querySelector(".tab-item.active");
      var line = document.querySelector(".line");
      line.style.left = tabCurrentActive.offsetLeft + "px";
      line.style.width = tabCurrentActive.offsetWidth + "px";
    };
  });
}

tabClick();
