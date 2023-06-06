let info: object = {
  name: "why",
  age: 18,
  height: 1.88,
};

// console.log(info.name);
// console.log(info.age);

// let info: {
//   name: string;
//   age: number;
//   height: number;
// } = {
//   name: "why",
//   age: 18,
//   height: 1.88,
// };

// const person = {
//   identity: "程序员",
//   identity: "老师",
// };

const s1: symbol = Symbol("title");
const s2: symbol = Symbol("title");
const person = {
  [s1]: "程序员",
  [s2]: "老师",
};

let n: null = null;
let u: undefined = undefined;

export {};
