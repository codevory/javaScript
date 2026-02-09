const p1 = new Promise((resolve, reject) => {
  resolve("P1 resolved");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 resolved");
  }, 1000);
});

async function call() {
  try {
    const res = await Promise.any([p1, p2, p3]);
    console.log(res);
  } catch (err) {
    console.error(err);
    console.error(err.errors);
  }
}

async function test() {
  try {
    const r1 = await p1;
    console.log(r1);
    const r2 = await p2;
    console.log(r2);
    const r3 = await p3;
    console.log(r3);
  } catch (error) {
    console.error(error);
  }
}
test();
