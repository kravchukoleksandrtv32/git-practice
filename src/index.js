const ms = require("../libs/ms");

const input = process.argv[2] || "1h";
const result = ms(input);

if (result === undefined) {
  console.log("Невірний формат: " + input);
} else {
  console.log(input + " = " + result + " мс");
  console.log(result + " мс = " + ms(result, { long: true }));
}
