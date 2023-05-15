
let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
let output = 
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

alert(output);
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
