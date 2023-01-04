// Function Currying

// currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time;

// function f( a, b, c) is transformed to f(a)(b)(c)

// When a function , instead of taking all arguments at one time , takes the first one and return a new function that takes the second one and returns a new functions


function sum( a, b, c)
{
    return a + b + c;
}

console.log( sum( 2, 3, 5));

// after currying this function

function curry(fn)
{
    return function(a)
    {
        return function(b)
        {
            return function(c)
            {
                 return fn( a, b, c);
            }
        }
    }
}

const curriedSum = curry(sum);
console.log( curriedSum(2)(3)(5));


const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);

console.log(add5);