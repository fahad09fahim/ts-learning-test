//arrow function

const createArray = <T>(params: T): T[] => {
  return [params];
};

const createArray2 = <X, Y>(params1: X, params2: Y): [X, Y] => {
  return [params1, params2];
};

type Name = { name: string };
const result4 = createArray2<Name, number>({ name: "Fahim" }, 25);
// console.log(result4);

const result = createArray<string>("Bangladesh");
const result2 = createArray<boolean>(true);
const result3 = createArray<number>(12);

// console.log("before push: ", result, result2, result3);

// result.push("Dhaka");
// console.log("After Push --:", result);
// result2.push(false);
// console.log(result2);
