// alias type for objects

type Details = {
  name: string;
  age: number;
  address: string;
  phone: string;
};

const detailsOne: Details = {
  name: "alizabeth",
  age: 30,
  address: "England",
  phone: "012313131",
};

const detailsTwo: Details = {
  name: "John",
  age: 25,
  address: "USA",
  phone: "0987654321",
};

const calculate = (
  num1: number,
  num2: number,
  operations: (x: number, y: number) => number
) => {
  return operations(num1, num2);
};

calculate(10, 20, (x, y) => x - y);
console.log(calculate);

//-------Unknown type---------//

const getSpeed = (value: unknown) => {
  if (typeof value === "number") {
    const convertedValue = (value * 1000) / 3600;
    console.log(`Converted value: ${convertedValue}`);
  }
  if (typeof value === "string") {
    const [values, unit] = value.split(" ");

    const convertedValue = (parseFloat(values) * 1000) / 3600;
    console.log(`Converted value: ${convertedValue}`);
  }
};

getSpeed(20);
getSpeed("20 kmh^-1");
