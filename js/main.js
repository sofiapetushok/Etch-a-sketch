const container = document.querySelector('#container');
console.log(container);
 
let rows = document.querySelector('.gridRow');
let cols = document.querySelector('.gridCol');
let clearBtn = document.querySelector('#clear-cells');

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
            cell.style.backgroundColor = "red";
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