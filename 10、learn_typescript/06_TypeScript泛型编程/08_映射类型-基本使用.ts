// TypeScript提供了映射类型: 函数
// 映射类型不能使用interface定义
// Type = IPerson
// keyof = "name" | "age"
type MapPerson<Type> = {
  // 索引类型以此进行使用
  [Property in keyof Type]: Type[Property];

  // name: string
  // age: number
};

interface IPerson {
  name: string;
  age: number;
}

// 拷贝一份IPerson
// interface NewPerson {
//   name: string
//   age: number
// }
type NewPerson = MapPerson<IPerson>;

export {};
