//"use strict";
const obj1 = {
  name: "Shahijahan",
  age: 19,
  getName: function () {
    console.log(this.name);
    const call = () => {
      console.log(this.getName);
    };
    call();
  },
};
//obj1.getName();
//console.log(obj1);

function z() {
  console.log(this);
}
//z();

function multiply(x, y) {
  console.log(x * y);
}

const multiplyByTwo = multiply.bind(2, 3);

const obj2 = {
  multiply: function (x, y) {
    console.log(x * y);
  },
};
function getData() {
  console.log("Fetching... ");
}

//debouncing
function db(fn, dt) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(this, args);
    }, dt);
  };
}

//let debounce = db(getData, 400);
let counter = 0;

//throttle
let text = (document.getElementById("text").textContent = "hello ji");
function throttle(fn, limit) {
  let flag = true;
  let timer;
  return function () {
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
      console.log(text);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      flag = true;
    }, limit);
  };
}
const debounce = throttle(getData, 500);
