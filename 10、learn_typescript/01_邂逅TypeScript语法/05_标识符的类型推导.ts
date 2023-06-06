// 声明一个标识符时, 如果有直接进行赋值, 会根据赋值的类型推导出标识符的类型注解
// 这个过程称之为类型推导
// let进行类型推导, 推导出来的通用类型
// const进行类型推导, 推导出来的字面量类型(后续专门讲解)
// let name = "why";
// let age = 18;
// const height = 1.88;

// // name = 123
// var myname = "abc";

export {};

let num = 100;
num = 20;
num = 6.66;

num = 100; // 十进制
num = 0b110; // 二进制
num = 0o555; // 八进制
num = 0xf23; // 十六进制

let flag: boolean = true;
flag = false;
flag = 20 > 30;

let message: string = "Hello World";
message = "Hello TypeScript";

const name = "why";
const age = 18;
const height = 1.88;

const info = `my name is ${name}, age is ${age}, height is ${height}`;
console.log(info);
