const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red','green','blue','yellow','purple']

body.style.backgroundColor = 'cyan';


button.addEventListener('click',changeBackground)

function changeBackground()
{
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]

}