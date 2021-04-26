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
console.table(newCarsArr);
