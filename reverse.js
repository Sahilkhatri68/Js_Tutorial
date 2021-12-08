function rev() {
    let rem = 0;
    let n = parseInt(prompt("Enter a Num:"));
    let ld;

    while (n != 0) {
        ld = n % 10;
        rem = rem * 0 + ld;
        n = Math.floor(n / 10);
        document.write(rem);
    }
}