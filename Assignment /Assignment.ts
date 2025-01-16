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
