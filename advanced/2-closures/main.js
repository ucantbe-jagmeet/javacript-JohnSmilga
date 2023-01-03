// A closure is the combination of a function bundled together with references to its lexical environment . Closures are created every time a function is created, at function creation time.

function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
    inner();
}

outer();