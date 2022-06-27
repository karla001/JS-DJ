var square = document.getElementsByTagName('div')[0];

//setting initial style
square.style.backgroundColor = 'black';
square.style.height = '300px';
square.style.width = '300px';
square.style.margin = 'auto';
square.style.marginTop = '20%';


square.addEventListener('dblclick', () => { square.style.backgroundColor = 'green';})
square.addEventListener('mouseover', () => { square.style.backgroundColor = 'blue';})
square.addEventListener('mousedown', () => { square.style.backgroundColor = 'red';})
square.addEventListener('mouseup', () => { square.style.backgroundColor = 'yellow';})
window.addEventListener('scroll', () =>{square.style.backgroundColor = 'orange'})