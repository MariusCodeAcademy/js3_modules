"use strict"; // here we go again

import add, { blue, red as purple } from "./add.js";
import { a as a, b, c, d as tomato } from "./var.js";
// pervadinam kintamaji
import { mod as modulus } from "./mod.js";
// a = 1000; // error
add(10, 20);
modulus(24, 7);

console.log("blue", blue, true);
console.log("purple", purple, true);

console.group("Veiksmai su itrauktais kintamaisiais");
add(a, b);
add(c, tomato);
modulus(c, tomato);
console.log("a + b + c + tomato", a + b + c + tomato);

console.groupEnd();
console.log("");
