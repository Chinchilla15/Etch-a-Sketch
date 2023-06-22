const input = document.querySelector("#rangeInput");
const container = document.querySelector("#container");
const rowSize = document.querySelector(".rangeValue2");
const colSize = document.querySelector(".rangeValue");

colSize.textContent = input.value;
input.addEventListener('input',(e) => {
    colSize.textContent = e.target.value;
})

rowSize.textContent = input.value;
input.addEventListener('input',(e) => {
    rowSize.textContent = e.target.value;
})

function createGrid(rowSize,colSize){
    const cell = document.createElement("div");
    cell.classList.toggle('cell');
    container.appendChild(cell);
}

