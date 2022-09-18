// Parameter - when declare/ define
// placeholders, local vars
// argu,emts - when invoke/call/run
// use car/ value, multiple parameters , undefined
// diff - hoisting, use - arrow funcitons , libraries

function hello()
{
    //some logic here
    // console.log('in console log');
   return 10;
}

// const val = hello()

// console.log(val);
hello();
hello();
hello();
hello();

// function Parameter

function greet(name)
{
    console.log("Hello there " + name);
}

// greet('anna');
// greet('Bob');

// ------------**--------------------


// 1 inch = 2.54 cm

const wallheight = 80;

function cal(val)
{
    console.log('The value in cm is : ' + val * 2.54 + ' cm');
    return val;
}

const width = cal(100);
const height = cal(wallheight);

const dimensions = [ width, height]; 
console.log(dimensions); // try to run code without return keyword 

//---------------Function Expression------------------------------

function addValues(num1,num2)
{
    return num1+num2;
}

const firstValue = addValues( 3, 4);
const secondValue = addValues( 12, 14);

const values = [ firstValue, secondValue];
console.log(values);


// -------------------ARRow Functions ---------------------
const multiply = (num1, num2) => num1 * num2;