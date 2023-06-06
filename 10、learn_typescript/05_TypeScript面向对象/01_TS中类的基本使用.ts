class Person {
  // 成员属性: 声明成员属性
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + " eating");
  }

  running() {
    console.log(this.name + " running");
  }
}

// 实例对象: instance
const p1 = new Person("why", 18);
const p2 = new Person("kobe", 30);

console.log(p1.name, p2.age);

class Student extends Person {
  sno: number;

  constructor(name: string, age: number, sno: number) {
    super(name, age);
    this.sno = sno;
  }

  studying() {
    console.log(this.name + " studying");
  }

  eating() {
    console.log("student eating");
  }
  running() {
    super.running();
    console.log("student running");
  }
}

export {};
