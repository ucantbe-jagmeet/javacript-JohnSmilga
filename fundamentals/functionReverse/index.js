// select an element
// addEventListner()
// what event, what to do

const btn = document.querySelector('.btn');
const h2 = document.querySelector('h2')

function changeColor(){
    const tempClass = h2.classList.contains('red')
    if(tempClass)
    {
        h2.classList.remove('red')
    }
    else
    {
        h2.classList.add('red')
    }
}

btn.addEventListener('click', changeColor);
