interface MyInfoType {
  name: string;
  age: number;
  address: string;
}
const addData = <T extends MyInfoType>(myInfo: T) => {
  const salary = 20000;
  const newData = { ...myInfo, salary };
  return newData;
};

interface Myinfo {
  name: string;
  age: number;
  address: string;
}
const myInfo: Myinfo = {
  name: "Fahim",
  age: 25,
  address: "Dhaka",
};

const results = addData(myInfo);
console.log(results);
