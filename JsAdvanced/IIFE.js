// const callNow = function () {
//   console.log("Now");
// };

// callNow();

// //IIFE
// let fullName = "don";

// (function () {
//   console.log("now now");
// })();

const app = (function () {
  const cars = [];
  return {
    add(car) {
      this.cars.push(car);
    },
    edit(index, car) {
      this.cars[index] = car;
    },
    delete(index) {
      this.cars.splice(index, 1);
    },
  };
})();
