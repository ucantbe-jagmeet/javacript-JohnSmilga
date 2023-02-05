// objects basics

/*
nested objects
set variable as property value
dot notation vs bracket notation

*/
let random = "random-value";
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
  job: {
    title: "developer",
    company: {
      name: "coding Boi",
      address: "123 main street",
    },
  },
  "random-value": "random",
};

console.log(person.job.title);
console.log(person.job.company.name);
console.log(person["name"]);
console.log(person["random-value"]);
console.log(person[random]);
