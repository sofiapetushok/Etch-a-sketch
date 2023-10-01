const container = document.querySelector('#container');
console.log(container);
 
const rows = document.querySelector('.gridRow');
const cols = document.querySelector('.gridCol');
const clearBtn = document.querySelector('#clear-cells');


const setBg = (el) => {
    const randColor = Math.floor(Math.random()*16777215).toString(16);   
    el.style.backgroundColor = "#" + randColor;
}
const darkenBg = (el) => {
    const color = 
}

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    console.log(rows);
    container.style.setProperty('--grid-cols', cols);
    console.log(cols);
    for ( c = 0; c < (rows*cols); c++) {
        let cell = document.createElement('div');
        // cell.textContent = '';
        cell.classList.add('grid-item');
        cell.addEventListener('mouseenter', () => {
            // setBg(cell);
            
        })
        container.appendChild(cell);
        clearBtn.addEventListener('click', () => {
            cell.style.backgroundColor = '#fff';
        })

    }
}

makeRows(16,16);
let cell = document.querySelector('.grid-item');
let button = document.querySelector('#btn-alert');

button.addEventListener('click', () => {
    let squares = prompt('Enter rows and columns');
    if (squares < 100) {
        makeRows(squares,squares);
    } else {
        alert("Too many");
    }
    console.log(squares);
})