"use strict"; // here we go again

function add(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);

  return a + b;
}
const blue = "green";
const red = "Yellow";
// default export, no need {} kai importuojam
export default add;
export { blue, red };
