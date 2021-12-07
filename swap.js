function swap() {
  let a, b, c;

  a = parseInt(prompt("Enter 1st Num:"));
  b = parseInt(prompt("Enter 2nd Num:"));

  document.write("A =" + a + "<br>");
  document.write("B =" + b);

  c = a;
  a = b;
  b = c;

  document.write("<br>After swaping A =" + a + "<br>");
  document.write("After swaping B =" + b);
}
