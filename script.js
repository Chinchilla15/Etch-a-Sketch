const input = document.getElementById("rangeInput");
const container = document.getElementById("container");
const rowSize = document.querySelector(".rangeValue2");
const colSize = document.querySelector(".rangeValue");
const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const grayScale = document.getElementById('grayScale');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

// Update rowSize and colSize values on input change
input.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    rowSize.textContent = value;
    colSize.textContent = value;
    createGrid(value);
});

function createGrid(size) {
    // Clear previous grid
    container.innerHTML = "";

    container.style.setProperty("--size", size);

    // Create grid cells
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell);
        cell.classList.add("cell");
    }
}

createGrid(parseInt(input.value));

container.addEventListener("mouseover", (e) => {
    e.target.style.background = "black";
})


/*
clear.addEventListener('click', ()=>{
    container.style.background = "white"
})
*/

function white(){
    container.addEventListener("mouseover", (e) => {
        e.target.style.background = "white";
    })
}
