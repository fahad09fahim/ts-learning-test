//keyof guard
type Alphanumeric = number | string;

function addNum(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(addNum(10, 20));
console.log(addNum("10", "20"));

//in guard

type normalUser = { name: string };
type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: normalUser | AdminUser): string {
  if ("role" in user) {
    return `Admin user: ${user.name} with role ${user.role}`;
  } else {
    return `Normal user: ${user.name}`;
  }
}

const normalUser1: normalUser = { name: "Mr John" };
const adminUser1: AdminUser = {
  name: "Mr keith",
  role: "admin",
};

console.log(getUser(adminUser1));
console.log(getUser(normalUser1));

// instaceof guard

class Animal {
  constructor(public name: string, public species: string) {}

  makeSound() {
    console.log(`I  am making sound`);
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I am barking `);
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow() {
    console.log(`I am meowing`);
  }
}

function getAnimal(obj: Animal) {
  if (obj instanceof Dog) {
    obj.makeBark();
  } else if (obj instanceof Cat) {
    obj.makeMeow();
  } else {
    obj.makeSound();
  }
}

const animal1 = new Dog("German Shepard", "dog");
const animal2 = new Cat("Persian Cat ", "Cat");
const animal3 = new Animal("Rabbit", "kekek");

getAnimal(animal1);
