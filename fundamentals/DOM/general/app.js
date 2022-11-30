// manupulating DOM by javascript

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

// console.log(document); --> it returns the object in its string representation 

// console.dir(document); --> it recognise the object as an object and outputs its properties

// ----------------------------------------------------------
/* 
- getElementById
- Select the Element or group of elements that we want , Decide the effect we  want to apply to the selection
*/

const h1 = document.getElementById('title');
h1.style.color = 'green';
h1.style.textTransform = 'uppercase';

const btn1 = document.getElementById('btn');
btn1.style.borderRadius = '12px';
btn1.style.padding = '5px 20px';
btn1.style.fontSize = '22px';

// similary getElementByTagName is used to select element by its tag name i.e. h1  h2  button etc