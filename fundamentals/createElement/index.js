// createElement('element');
// createTextNode('text context')
// element.appendChild(childElement);


const result = document.querySelector('#result')

// create empty element

const bodyDiv = document.createElement('div');
// create text node

const text = document.createTextNode('A simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const text1 = document.createTextNode('This is the header of the result');

heading.appendChild(text1)

document.body.appendChild(heading)

heading.classList.add('blue')



console.log(result.children);