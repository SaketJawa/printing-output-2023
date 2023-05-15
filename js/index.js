
let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
let print = 
    `
    let a = 3;
    let b = 5;
    let c; \n
    ---------- \n
    a + b = ${a + b}
    a - b = ${a - b}
    a * b = ${a * b}
    a / b = ${a / b}
    a % b = ${a % b}
    a += b = ${a += b}
    a -= b = ${a -= b}
    a *= b = ${a *= b}
    a /= b = ${a /= b}
    a %= b = ${a %= b}
    a == b = ${a == b}
    a != b = ${a != b}
    a > b = ${a > b}
    a < b = ${a < b}
    !a && !c = ${!a && !c}
    !a || !c  = ${!a || !c }
    `;

alert(print);
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/


let first_name = "Saket";
let last_name = "Jawaji";
let email = "jawa0016@algonquinlive.com"

let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}` ;

alert(output);
