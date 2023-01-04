// Function Statement
function a(){}

// Function Expression
var b = function(){} // function act as a value
/* 
the major difference between statement and expression is its hoisting 
 like we cant call function name() before creating it 

 when we call function a() before its statement we  wil not get error
 when we call function b() before its expression we will get error of b is not a function because 
 var b still get memory as a variable
*/


// Function Declaration --> function statement and function declaration are both same 
    function name (){}



// Anonymous Function --> function without name , it doesnot has its own identity so this will always syntax error 
// we need this type of function when we use function as a type of value
    // function(){}



// Named function Expression -->  now name() will lose its global identy and it should be recognise inside its function
 var c = function name(){}



// Difference between Parameter and Arguments
var name = function (Parameter){}
function a(arguments){}

// First Class Function -->  The ability of function to used as value or can be passed as an argument to the another function , and can be returned from the functions this is known as first class function


// FIRST CLASS CITIZENS are same as first class function


// Arrow Functions
var fun = () => { }