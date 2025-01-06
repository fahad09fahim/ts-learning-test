type personType = {
  name: string;
  age: number;
  gender: string;
};

type newType = "name" | "age" | "gender "; //manually

type NewTypeKeyOff = keyof personType; //using keyof

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const prop = getProperty({ name: "m x", age: 100 }, "name");
console.log(prop);
