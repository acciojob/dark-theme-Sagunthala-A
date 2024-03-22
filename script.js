//your code here
// document.body.style.backgroundColor = "red";
let btn = document.getElementById('swap')
let div = document.getElementById('app')

btn.addEventListener('click',swapTheme)


function  swapTheme (){
	div.classList.toggle('night');
	btn.classList.toggle('button_night');
	
}