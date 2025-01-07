class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}
  makeSleep(hours: number): void {
    return console.log(`${this.name} is sleeping for ${hours} hours`);
  }
}

class student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const result1 = new student("Fahim", 25, "Dhaka");
result1.makeSleep(6);
console.log(result1);

class teacher extends Parent {
  constructor(
    name: string,
    age: number,
    address: string,
    public subject: string
  ) {
    super(name, age, address);
  }
  takeClass(num: number): void {
    return console.log(
      `This teacher ${this.name} has take this class ${this.subject}  in  ${num} section`
    );
  }
}

const teacher1 = new teacher("Adil", 34, "Dhaka", "OPP");
teacher1.takeClass(4);
teacher1.makeSleep(8);
console.log(teacher1);
