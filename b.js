// function declaration-----------------------------------------------------
function sq(x) {
    return x * x;
}
console.log(sq(3));

// function expression------------------------------------------------------
const sqr = function(x) {
    return x * x;
};
console.log(sqr(4));

// arrow function-----------------------------------------------------------
const sr = (x) => {
    return x * x;
};
console.log(sr(9));

//natural numbers print-----------------------------------------------------
let n = 10;
for (let i = 1; i <= n; i++) {
    console.log(i);
}

// enter a user value using prompt()----------------------------------------
// let name = prompt("Enter a Num :", "Num");
// console.log(name);

// Table Print--------------------------------------------------------------
function Printtable() {
    let num;
    num = document.getElementById("numb").value;

    for (var i = 1; i <= 10; i++) {
        var pTag = document.getElementById("pr  ");
        pTag.innerHTML += num * i + "<br/>";
    }
}