/*
Problem: 1
Functions and Default Parameters

Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.
*/

function repeated(param1: string, param2: number = 3) {
  if (param2 < 3) {
    console.log("Number Must be greater than 3");
  } else {
    console.log(param1.repeat(param2));
  }
}

repeated("Hello");
repeated("Hello world! ", 5);
repeated("Hello world! ", 1);

/*Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18*/


interface Person {
    name: string;
    age: number;
  }
  
  function ageFilter(people: Person[]): Person[] {
    return people.filter((person) => person.age >= 18);
  }
  const people: Person[] = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 18 },
  ];
  
  console.log(ageFilter(people));
  