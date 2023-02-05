// objects basics

/*
 Objects are collections of key ( property) value pairs 
 Property values can be strings , numbers, booleans, arrays and functions however if the property value is a function it's is called a method

 object literal syntax , {}
 dot notation

*/

const person = {
  name: "john",
  age: "25",
  married: "true",
  siblings: ["anna", " peter"],
  greet: function (name) {
    console.log(` Hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(` Hello my name is ${name}`);
  },
};

console.log(person.name);

const name = person.name;

person.age = 54;
person.city = "Chicago";

//delete property
delete person.siblings;
console.log(person);
