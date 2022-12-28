// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - mouse onto the element
// mouseleave - moved out of an element
// mouseover - mouse is over an element


const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log('you clicked me');
})
btn.addEventListener('mousedown', function(){
    console.log('down');
})
btn.addEventListener('mouseup', function(){
    console.log('up');
})


btn.addEventListener('mouseenter', function(){
    heading.classList.add('red')
})


btn.addEventListener('mouseleave', function(){
    heading.classList.remove('red')
})
// btn.addEventListener('mouseover', function(){
//     console.log('mouse over');
// })
