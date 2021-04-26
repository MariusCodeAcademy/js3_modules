"use strict"; // here we go again

import add, { blue, red as purple } from "./add.js";
// pervadinam kintamaji
import { mod as modulus } from "./mod.js";

add(10, 20);
modulus(24, 7);

console.log("blue", blue, true);
console.log("purple", purple, true);
