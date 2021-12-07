// const { count } = require("console");

function num(n) {
  // const num = parseInt(prompt("Enter a number :"));
  var count = 0;

  if (num > 1) {
    ++count;
  }
  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }
  return count;
}
num();
document.write(num(1232));
// console.log();

// function digits_count(n) {
//   var count = 0;
//   if (n >= 1) ++count;

//   while (n / 10 >= 1) {
//     n /= 10;
//     ++count;
//   }

//   return count;
// }

// document.write(digits_count(12112));

// console.log(digits_count(457));
