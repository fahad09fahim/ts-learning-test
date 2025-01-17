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
/*
  Problem 3:
Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.
  */

function reverse<T>(...items: T[]): T[] {
  return items.reverse();
}

const reversedStrings = reverse<string>("Messi", "Ronaldo", "Neymar", "Yamal");
console.log("Reversed array:", reversedStrings);
/*Problem 4:
Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.
*/

