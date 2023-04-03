const myName = 'Jeshua';
const myAge = 25;

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name} and i've ${this.age} years`;
  }
}

const nicolas = new Person(24, 'nicolas');
nicolas.getSummary();
