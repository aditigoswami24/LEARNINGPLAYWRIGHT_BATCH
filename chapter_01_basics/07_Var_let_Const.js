// var, let, cost
// var - function scope
var a = 10 ; // Global scope
console.log (a);

//definition of the fuction 
function printhello (){ 
console.log( "the testing academy");
var a = 20 ;
console.log(a);
if (true) {

    var a = 30 ;
    console.log(a);

    console.log ("f", a);
}
}
//calling of the function 
printhello();

//var also allows redeclaration
var a = 10;
var a = 20 ; // no error redeclaration allowed

// let is blocked scope

//var n = "USA";
//let n = "USA"; // error n identifier is alredy been declared

const pi = 3.14 ;// const variable
console.log(pi);
pi = 3.1459;