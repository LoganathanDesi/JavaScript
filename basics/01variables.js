// var, let, const
// var is a old way
//ES6 - expired

//var is not block scoped
var a=10;
if (5>3)
{
    var a = 20;
}

console.log(a); //it will print 20


//you can declare var more then once
var a = 10;
var a = 20;

console.log(a) //prints 20


//var allows only declaration (without defining/assigning a value)
var b;
console.log(b); // this prints undefined

//next is let (advance version of var)
// cannot initiate the same variable with let more than once inside the same block
let c = 10;
//let c = 20; //this is not allowed. /SyntaxError: Identifier 'c' has already been declared

//but you can use define in it different block

let d = 20;

if (2>1){
    let d = 30;
    console.log("inside if d ="+d); //prints 30
}

console.log("Outside if block d =" + d); // prints 20

//let too allows just declaring the variable
let e;
console.log(e); //prints undefined


//next is const
//this is used for define and declare constant variables which should not be changed anywhere
const weekdays = 7;
console.log(weekdays);

//can't just declare const
//const numberofmonths; //SyntaxError: Missing initializer in const declaration

