"use strict"; // here we go again
// importuoti duomenis is kitu js failu
// importuojam is default exporto
import Car from "./CarsClass.js";
// importuojam is named exporto
import { carsArr, carArrData } from "./cars.js";
console.log("app js");

// const carsArr = [];

console.log(carsArr);

// new Car();
console.log("carArrData", carArrData[0]);

//["Audi", "A4", 2000, "black", ["dysel"], 1200],
// rankiniu budu paduoti reiksmes pagal index
// let firstCar = new Car(carArrData[0][0], carArrData[0][1], carArrData[0][2]);
// panaudoti spread operatoriu
let firstCar = new Car(...carArrData[0]);

console.log(firstCar);

const newCarsArr = carArrData.map((c) => new Car(...c));
console.clear();
console.table(newCarsArr);

console.group(
  "3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip 'string'ą atskirtą '/'."
);
newCarsArr[2].getFuleType();

console.groupEnd();
console.log("");

console.groupCollapsed(
  "4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:"
);
newCarsArr.forEach((c) => {
  let text = `${c.brand} ${c.model} - ${c.getFuleType()}`;
  console.log(text);
});
console.groupEnd();
console.log("");

console.groupCollapsed("5. Atrinkite tik elektrinius automobilius");
let elektriniai = newCarsArr.filter((c) => {
  // grazinti true jei fuel type masyve yra verte pavadinimu 'electric'
  if (c.fuelTypes.includes("electric")) return true;
});
console.log(elektriniai);

console.groupEnd();
console.log("");

console.groupCollapsed("6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai");
let atrinktiBenz = newCarsArr.filter((c) => {
  return c.fuelTypes.includes("petrol") && c.year > 2016;
});
console.log(atrinktiBenz);

console.groupEnd();
console.log("");

console.groupCollapsed(
  "7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai"
);
let atrinkti7 = newCarsArr
  .filter((c) => c.brand === "Audi")
  .filter((c) => c.year >= 2012 && c.year < 2016)
  .filter((c) => !c.fuelTypes.includes("dysel"));
console.table(atrinkti7);

console.groupEnd();
console.log("");

console.groupCollapsed("8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį");
let electrKainuVidurkis = elektriniai.reduce(
  (avg, carObj) => avg + carObj.price / elektriniai.length,
  0
);
elektriniai.forEach((c) => console.log(c.price));
console.log({ electrKainuVidurkis });

console.groupEnd();
console.log("");

console.groupCollapsed("9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę");
let suma6 = atrinktiBenz.reduce((total, carObj) => {
  console.log(carObj.brand, carObj.price, total);
  return total + carObj.price;
}, 0);
console.log("6 punkto suma", suma6);

console.groupEnd();
console.log("");

console.group(
  "10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:"
);
const naujasMasyvas = newCarsArr.map((carObj) => {
  return {
    brand: carObj.brand,
    model: carObj.model,
    price: "$" + carObj.price + ".00",
    fuel: carObj.getFuleType(),
  };
});
const naujasMasyvasDestructurizuoti = newCarsArr.map((carObj) => {
  let { brand, model, priceDollarsFormat } = carObj;
  return {
    brand,
    model,
    price: priceDollarsFormat,
    fuel: carObj.getFuleType(),
  };
});
// console.log(naujasMasyvas);
console.log(naujasMasyvasDestructurizuoti);

console.groupEnd();
console.log("");
