console.log("cars class");

export default class Car {
  constructor(brand, model, year, color, fuelTypes, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes; // ["electric", "gas", "petrol"]
    this.price = price;
  }
  getFuleType() {
    //   dysel/electric
    //   petrol/gas
    //   uranus
    // 2 galimi keliai
    // kai turim viena kuro tipa
    // kai turim daugiau kuro tipu

    // console.log("this.fuelTypes;", this.fuelTypes.join("/"));
    return this.fuelTypes.join("/");
  }
  get priceDollarsFormat() {
    return "$" + this.price + ".00";
  }
}
