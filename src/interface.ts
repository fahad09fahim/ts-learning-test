interface IDetails {
  name: string;
  age: number;
  address: string;
}

interface extendedDetails extends IDetails {
  mail: string;
}

const userDetails: IDetails = {
  name: "Fahim",
  age: 25,
  address: "bangladesh",
};

console.log(userDetails.name, userDetails.age);

const fullDetails: extendedDetails = {
  name: "Fahad",
  age: 25,
  address: "bangladesh",
  mail: "mdfahad@gmail.com",
};

console.log(fullDetails.mail);
