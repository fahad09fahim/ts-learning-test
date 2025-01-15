const arr: [number, string, string, boolean, string] = [
  101,
  "ema",
  "john",
  true,
  "2025",
];
arr[0] = 10;
arr[1] = "Ema";
arr.forEach((e: number | string | boolean) => console.log(e));

const arr2: [string, boolean] = ["Richard", true];
console.log(arr2[0],arr2[1]);
