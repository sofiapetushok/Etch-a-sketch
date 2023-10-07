// Grid
const container = document.querySelector('#container');
console.log(container);
const rows = document.querySelector('.gridRow');
const cols = document.querySelector('.gridCol');
let cell = document.querySelector('.grid-item');
const setGridBtn = document.querySelector('#btn-alert');
const gridBtn = document.querySelector('#gridRange');
const applyBtn = document.querySelector('#applyBtn');
// Buttons
const clearBtn = document.querySelector('#clear-cells');
const randColorBtn = document.querySelector('#randomBtn');
const colorBtn = document.querySelector('#colorBtn');


const getRandomColor = () => {
    const randColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randColor;
};
const colorBg = (el) => {
    let inputColor = document.querySelector('#colorPicker').value;
    console.log(inputColor);
    el.style.backgroundColor = inputColor;

}
const setRandBg = (el) => {
    const randColorHex = getRandomColor();   
    el.style.backgroundColor = randColorHex;
}
const eraseBg = (el) => {
    el.style.backgroundColor = '#fff';
}
let currentMode = 'color'; 
let isMouseDown = false;
function makeRows(rows, cols) {
    container.innerHTML = '';
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for ( c = 0; c < (rows*cols); c++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);

        cell.addEventListener('mousedown', () => {
            isMouseDown = true; // Mouse button is held down
            handleCellAction(cell); // Perform initial action
        });

        cell.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                handleCellAction(cell); // Perform action while hovering
            }
        });

        cell.addEventListener('mouseup', () => {
            isMouseDown = false; // Mouse button is released
        });

        clearBtn.addEventListener('click', () => {
            cell.style.backgroundColor = '#fff';
        });

    }
}
makeRows(20,20);

// Event listener for colorBtn
colorBtn.addEventListener('click', () => {
    currentMode = 'color';
});

// Event listener for randColorBtn
randColorBtn.addEventListener('click', () => {
    currentMode = 'randColor';
});

// Event listener for eraseBtn
eraseBtn.addEventListener('click', () => {
    currentMode = 'erase';
});


function handleCellAction(cell) {
    // Apply the corresponding action based on the current mode
    if (currentMode === 'color') {
        colorBg(cell);
    } else if (currentMode === 'randColor') {
        setRandBg(cell);
    } else if (currentMode === 'erase') {
        eraseBg(cell);
    }
}
let input = document.querySelector('#gridRange');
let squaresValue = input.value;
let gridResult = document.querySelector('#gridResult');
gridResult.textContent = '20x20';
input.addEventListener('change', () => {
    gridResult.textContent = `${squaresValue}x${squaresValue}`;
    console.log(squaresValue);
})

applyBtn.addEventListener('click', () => {
    if (squaresValue < 100) {
        makeRows(squaresValue,squaresValue);
    } 
    })