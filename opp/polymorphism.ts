class person {
  takeNap(): void {
    console.log("I am sleeping 8 hours  per day");
  }
}

class student extends person {
  takeNap(): void {
    console.log("I am sleeping 10 hours  per day");
  }
}

class developer extends person {
  takeNap(): void {
    console.log("I am sleeping 5 hours  per day");
  }
}
function getNap(params: person) {
  params.takeNap();
}

const person1 = new person();
const person2 = new student();
const person3 = new developer();
getNap(person1);

getNap(person2);
getNap(person3);
