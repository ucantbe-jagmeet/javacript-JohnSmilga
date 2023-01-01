// event object argument e , evt 
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1')
const btn = document.querySelector('.btn')
const link = document.getElementById('link')


heading.addEventListener('click', function(event){
    // heading.classList.add('blue')
    console.log(event.currentTarget);
    // console.log(this); this also results in same output in console but it is bit confusing 
})

btn.addEventListener('click', function(event){
    // heading.classList.add('blue')
    // console.log(event.currentTarget);
    event.currentTarget.classList.add('blue');
    console.log(event.type);
})

function fun(event){
    event.preventDefault();
}

link.addEventListener('click', fun)