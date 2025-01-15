// tuple
// const arr: [number, string, string, boolean, string] = [
//   101,
//   "ema",
//   "john",
//   true,
//   "2025",
// ];
// arr[0] = 10;
// arr[1] = "Ema";
// arr.forEach((e: number | string | boolean) => console.log(e));

// const arr2: [string, boolean] = ["Richard", true];
// console.log(arr2[0],arr2[1]);

// compare between arrays

const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [1, 4, 5, 6, 2, 5, 7];

function compare(arr1: number[], arr2: number[]): number[] {
  const newArr: number[] = [];
  for (let num of arr1) {
    if (arr2.includes(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}

console.log(compare(arr1, arr2));
