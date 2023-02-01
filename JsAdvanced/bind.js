//this

// const iPhone7 = {
//   name: "Iphone 7",
//   color: "Pink",
//   weight: 300,

//   takePhoto() {
//     console.log(this);
//   },

//   objChild: {
//     methodChid() {
//       console.log(this);
//     },
//   },
// };

// console.log(iPhone7.objChild.methodChid());

// function Car(name, color, weight){
//     this.name = name,
//     this.color = color,
//     this.weight = weight,
// }

//bind
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const cars = ["BMW"];

  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) => `<li>${car}
      <span class="delete" data-index="${index}">&times</span></li>`
        )
        .join("");

      root.innerHTML = html;
    },
    handleDelete(e) {
      const deleteBtn = e.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        this.delete(index);
        this.render();
      }
    },
    init() {
      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();

        input.value = "";
        input.focus();
      };

      root.onclick = this.handleDelete.bind(this);
      this.render();
    },
  };
})();

app.init();
