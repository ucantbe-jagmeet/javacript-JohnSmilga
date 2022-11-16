// find 
// returns object
// returns first match, if no match undefined
// great for getting unique value


const people = [
    { name: 'bob', age: 20, position : 'developer', id:1},
    { name: 'peter', age: 22, position : 'designer', id:2},
    { name: 'susy', age: 30, position : 'the Boss', id:3},
    { name: 'anna', age: 35, position : 'the Boss', id:4},
];

const names = ['bob', 'peter', 'susy'];

const person = people.find(function(person){
    return person.id === 3;
})


console.log(names.find( function(name){
    return name === 'bob'
}));
console.log(person);