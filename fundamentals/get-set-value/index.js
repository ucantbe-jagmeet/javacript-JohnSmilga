// getAttribute()
//setAttribute()


const first = document.querySelector('.first')
const class1 = first.getAttribute('id') // its returns the value of Attribute
console.log(class1);


const link = document.getElementById('link')
const showLink = link.getAttribute('href')
console.log(showLink);


const last = link.nextElementSibling;
last.setAttribute('class', 'first')

last.textContent = " I also have a class of first"

console.log(last.getAttribute('class'));





const links = document.querySelectorAll('.first');
console.log(links);