const ms = require("../libs/ms");
const { toSeconds } = require("./utils");

const input = process.argv[2] || "1h";
const result = ms(input);

if (result === undefined) {
  console.log("Невірний формат: " + input);
} else {
  console.log(input + " = " + result + " мс");
  console.log(input + " = " + toSeconds(result) + " с");
  console.log(result + " мс = " + ms(result, { long: true }));
}
