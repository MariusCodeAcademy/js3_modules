"use strict"; // here we go again
// importuoti duomenis is kitu js failu
import Car from "./CarsClass.js";
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

console.group("5. Atrinkite tik elektrinius automobilius");
let elektriniai = newCarsArr.filter((c) => {
  // grazinti true jei fuel type masyve yra verte pavadinimu 'electric'
});
console.log(elektriniai);

console.groupEnd();
console.log("");
