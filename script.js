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

for(let i = 0; i < 16 * 16; i++){
    let cell = document.createElement("div");
    container.appendChild(cell);
    cell.classList.add("cell")
}


/*
function createGrid(rowSize,colSize){
    const cell = document.createElement("div");
    cell.classList.toggle('cell');
    container.appendChild(cell);
}
*/
