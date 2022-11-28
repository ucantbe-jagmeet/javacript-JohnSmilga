document.getElementById('btn').style.backgroundColor = '#f9f';
document.body.style.color = 'red';
document.body.style.backgroundColor = 'yellow';
// console.log(window);

// assign to a variable
const element = document.getElementById('element');

// do something
document.querySelector('element');

// returns a node object or a node list, which is an arraylike object
const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;

// console.log(btn);
// console.log(name);
// console.log(css);


//-----------------window Object------------------
// window object = browser api
// console.dir

// alert('hello');
// console.log(document);
// console.log(d);   ---> javascript will not find that particular property or object , it will always find that object in window class
