interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("Starting engine");
  }
  stopEngine(): void {
    console.log("stopping engine");
  }
  move(): void {
    console.log("moving vehicle");
  }
}

const vehicle = new Vehicle("bike", "yamaha", 2019);
