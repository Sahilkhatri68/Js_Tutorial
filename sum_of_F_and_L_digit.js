function sum() {
    let n1 = parseInt(prompt("Enter first num:"));
    let n2 = parseInt(prompt("Enter  second num:"));
    let one = String(n1).charAt(0);
    let s1 = Number(one);
    // let s2;
    document.write("First Digit " + n1 + " Number is :" + s1);

    if (n2 != 0) {
        s2 = Math.floor(n2 % 10);
        document.write("<br>Last digit of number " + n2 + "num is " + s2);
    }

    let s;
    s = s1 + s2;
    document.write("<br> Sum of First " + s1 + " and " + s2 + " =" + s);
}
// sum();