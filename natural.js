// print natural numbers
function natural() {
  var x = 1;
  let num = window.prompt("Enter a Num:");
  while (x <= num) {
    document.write(x + ",");
    x = x + 1;
  }
}
