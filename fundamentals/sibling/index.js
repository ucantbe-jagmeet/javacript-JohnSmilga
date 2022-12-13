// previoussibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color ='red');
console.log(second);


const last = document.querySelector('#last');
const secondLast = (last.previousSibling.previousSibling.style.color = 'blue');
console.log(secondLast);